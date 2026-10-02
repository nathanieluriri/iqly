import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import { CircleCheck, Info, LoaderCircle } from "lucide-react";
import { cn } from "../lib/cn";

type ToastType = "success" | "error" | "loading";
type Toast = { id: number; type: ToastType; message: string };
type Api = { show: (type: ToastType, message: string, id?: number) => number; dismiss: (id: number) => void };

const ToastContext = createContext<Api | null>(null);

const tones: Record<ToastType, string> = {
  success: "border-ok-dot bg-ok-soft text-ok",
  error: "border-err bg-err-soft text-err",
  loading: "border-line bg-card text-fg2",
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const next = useRef(1);
  const dismiss = useCallback((id: number) => setToasts((t) => t.filter((x) => x.id !== id)), []);
  const show = useCallback(
    (type: ToastType, message: string, id?: number) => {
      const tid = id ?? next.current++;
      setToasts((t) => [...t.filter((x) => x.id !== tid), { id: tid, type, message }]);
      if (type !== "loading") window.setTimeout(() => dismiss(tid), 4000);
      return tid;
    },
    [dismiss],
  );
  const api = useMemo(() => ({ show, dismiss }), [show, dismiss]);
  return (
    <ToastContext.Provider value={api}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed right-4 bottom-4 z-[100] flex w-[min(356px,calc(100vw-2rem))] flex-col gap-2">
        {toasts.map((t) => (
          <ToastView key={t.id} type={t.type} message={t.message} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function ToastView({ type, message }: { type: ToastType; message: string }) {
  return (
    <div className={cn("pointer-events-auto flex items-center gap-2 rounded-lg border p-4 shadow-md", tones[type])}>
      {type === "success" ? <CircleCheck aria-hidden className="size-4 shrink-0" /> : type === "error" ? <Info aria-hidden className="size-4 shrink-0" /> : <LoaderCircle aria-hidden className="size-4 shrink-0 animate-spin" />}
      <p className="type-body-small-strong">{message}</p>
    </div>
  );
}

export function useToast() {
  const api = useContext(ToastContext);
  if (!api) throw new Error("useToast needs ToastProvider");
  return {
    success: (m: string, id?: number) => api.show("success", m, id),
    error: (m: string, id?: number) => api.show("error", m, id),
    loading: (m: string) => api.show("loading", m),
    dismiss: api.dismiss,
  };
}
