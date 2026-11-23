"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./navigation";

type NavLinksProps = {
  variant?: "sidebar" | "mobile" | "drawer";
  collapsed?: boolean;
  onNavigate?: () => void;
};

export default function NavLinks({
  variant = "sidebar",
  collapsed = false,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();
  const className =
    variant === "sidebar"
      ? "sb-nav-link"
      : variant === "mobile"
        ? "sb-mobile-nav-link"
        : "sb-drawer-link";
  const listClassName =
    variant === "sidebar"
      ? "sb-nav-list"
      : variant === "mobile"
        ? "sb-mobile-nav"
        : "sb-drawer-nav";

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
              title={variant === "sidebar" && collapsed ? label : undefined}
              onClick={onNavigate}
            >
              <Icon className="sb-nav-icon" aria-hidden="true" />
              {(!collapsed || variant !== "sidebar") && <span>{label}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
