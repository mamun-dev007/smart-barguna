"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./navigation";

type NavLinksProps = {
  variant?: "sidebar" | "drawer";
  collapsed?: boolean;
  onNavigate?: () => void;
};

export default function NavLinks({
  variant = "sidebar",
  collapsed = false,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();
  const isSidebar = variant === "sidebar";
  const className = isSidebar ? "sb-nav-link" : "sb-drawer-link";
  const listClassName = isSidebar ? "sb-nav-list" : "sb-drawer-nav";

  return (
    <ul className={listClassName}>
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              className={className}
              data-active={active ? "true" : undefined}
              aria-current={active ? "page" : undefined}
              aria-label={isSidebar && collapsed ? label : undefined}
              onClick={onNavigate}
            >
              <Icon className="sb-nav-icon" aria-hidden="true" />
              <span className={isSidebar ? "sb-nav-label" : "sb-drawer-label"}>
                {label}
              </span>
              <span className="sb-nav-tooltip" aria-hidden="true">
                {label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
