import { createContext, useContext, type AnchorHTMLAttributes, type ComponentType } from "react";

export type LinkLike = ComponentType<AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }>;

const PlainLink: LinkLike = (props) => <a {...props} />;
const LinkContext = createContext<LinkLike>(PlainLink);

export const LinkProvider = LinkContext.Provider;
export function useLink() {
  return useContext(LinkContext);
}
