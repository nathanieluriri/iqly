// Mirrors the shipped formatter: amounts are kobo, shown as ₦ with en-NG grouping and two decimals.
export function formatNaira(kobo: number) {
  return `₦${(kobo / 100).toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatReward(kobo: number) {
  return formatNaira(kobo).replace(".00", "");
}

export function daysUntil(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  return Math.round((d.getTime() - Date.now()) / 86_400_000);
}

export function formatRelative(date: Date | string) {
  const d = typeof date === "string" ? new Date(date) : date;
  const diff = d.getTime() - Date.now();
  const days = Math.round(diff / 86_400_000);
  if (Math.abs(days) >= 1) return days > 0 ? `in ${days}d` : `${Math.abs(days)}d ago`;
  const hours = Math.round(diff / 3_600_000);
  if (Math.abs(hours) >= 1) return hours > 0 ? `in ${hours}h` : `${Math.abs(hours)}h ago`;
  const mins = Math.round(diff / 60_000);
  return mins > 0 ? `in ${mins}m` : `${Math.abs(mins)}m ago`;
}

export function deadlineLabel(status: "live" | "closed", deadline: string | null) {
  if (status === "closed") return "Closed";
  if (!deadline) return "TBD";
  const d = daysUntil(deadline);
  if (d < 0) return "Closed";
  if (d === 0) return "Due today";
  if (d === 1) return "1 day left";
  return `${d} days left`;
}

export function isDimmed(status: "live" | "closed", deadline: string | null) {
  return status === "closed" ? true : deadline ? daysUntil(deadline) < 0 : false;
}
