"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type CSSProperties, type ReactNode } from "react";
import {
  Bookmark,
  CloudSun,
  FileText,
  Home,
  Info,
  LayoutGrid,
  Map,
  Newspaper,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/services", label: "Services", icon: LayoutGrid },
  { href: "/explore", label: "Explore Barguna", icon: Map },
  { href: "/emergency", label: "Emergency & Safety", icon: ShieldAlert },
  { href: "/weather", label: "Weather", icon: CloudSun },
  { href: "/district", label: "District Information", icon: FileText },
  { href: "/library", label: "My Library", icon: Bookmark },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/about", label: "About Smart Barguna", icon: Info },
];

function NavList({
  collapsed,
  pathname,
  mobile = false,
}: {
  collapsed: boolean;
  pathname: string;
  mobile?: boolean;
}) {
  return (
    <ul className={mobile ? "sb-mobile-nav" : "sb-nav-list"}>
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              className={mobile ? "sb-mobile-nav-link" : "sb-nav-link"}
              data-active={active ? "true" : undefined}
              aria-current={active ? "page" : undefined}
              title={collapsed && !mobile ? label : undefined}
            >
              <Icon className="sb-nav-icon" aria-hidden="true" />
              {(!collapsed || mobile) && <span>{label}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const shellStyle = {
    "--sb-sidebar-width": collapsed ? "4.5rem" : "16rem",
  } as CSSProperties;

  return (
    <div className="sb-app-shell" style={shellStyle}>
      <a className="sb-skip-link" href="#main-content">
        Skip to content
      </a>

      <aside
        className="sb-sidebar"
        data-collapsed={collapsed ? "true" : "false"}
        aria-label="Main navigation"
      >
        <Link href="/" className="sb-brand-link" aria-label="Smart Barguna home">
          <span className="sb-brand-mark" aria-hidden="true">
            SB
          </span>
          {!collapsed && <span className="sb-brand-text">Smart Barguna</span>}
        </Link>

        <button
          type="button"
          className="sb-sidebar-toggle"
          onClick={() => setCollapsed((value) => !value)}
          aria-expanded={!collapsed}
          aria-controls="sb-sidebar-nav"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <PanelLeftOpen className="sb-nav-icon" aria-hidden="true" />
          ) : (
            <PanelLeftClose className="sb-nav-icon" aria-hidden="true" />
          )}
          {!collapsed && <span>Collapse</span>}
        </button>

        <nav id="sb-sidebar-nav" aria-label="Primary">
          <NavList collapsed={collapsed} pathname={pathname} />
        </nav>
      </aside>

      <div className="sb-mobile-header">
        <Link href="/" className="sb-brand-link" aria-label="Smart Barguna home">
          <span className="sb-brand-mark" aria-hidden="true">
            SB
          </span>
          <span className="sb-brand-text">Smart Barguna</span>
        </Link>
        <nav aria-label="Mobile primary">
          <NavList collapsed={false} pathname={pathname} mobile />
        </nav>
      </div>

      <main className="sb-main" id="main-content">
        {children}
      </main>
    </div>
  );
}
