"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Header from "./Header";
import NavLinks from "./NavLinks";

export default function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const shellStyle = {
    "--sb-sidebar-width": collapsed ? "4.75rem" : "16.25rem",
  } as CSSProperties;

  function closeDrawer() {
    setDrawerOpen(false);
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDrawer();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [drawerOpen]);

  return (
    <div className="sb-app-shell" style={shellStyle}>
      <a className="sb-skip-link" href="#main-content">
        Skip to content
      </a>

      <Header
        sidebarCollapsed={collapsed}
        onToggleSidebar={() => setCollapsed((value) => !value)}
        drawerOpen={drawerOpen}
        onOpenDrawer={() => setDrawerOpen(true)}
      />

      <aside
        className="sb-sidebar"
        data-collapsed={collapsed ? "true" : "false"}
        aria-label="Main navigation"
      >
        <Link href="/" className="sb-sidebar-brand" aria-label="Smart Barguna home">
          <span className="sb-brand-mark" aria-hidden="true">
            SB
          </span>
          <span className="sb-brand-text">Smart Barguna</span>
        </Link>

        <nav className="sb-sidebar-nav" id="sb-sidebar-nav" aria-label="Primary">
          <NavLinks collapsed={collapsed} />
        </nav>

        <div className="sb-sidebar-footer">
          <strong>Smart Barguna</strong>
          <span>District portal · v1.0.0</span>
        </div>
      </aside>

      <div
        className="sb-drawer-overlay"
        data-open={drawerOpen ? "true" : "false"}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <aside
        className="sb-mobile-drawer"
        id="sb-mobile-drawer"
        data-open={drawerOpen ? "true" : "false"}
        aria-label="Mobile navigation"
        aria-hidden={!drawerOpen}
        inert={!drawerOpen}
      >
        <div className="sb-drawer-head">
          <span className="sb-brand-mark" aria-hidden="true">
            SB
          </span>
          <span className="sb-brand-text">Smart Barguna</span>
          <button
            type="button"
            className="sb-drawer-close"
            onClick={closeDrawer}
            aria-label="Close navigation menu"
          >
            <X className="sb-nav-icon" aria-hidden="true" />
          </button>
        </div>

        <nav className="sb-drawer-nav-wrap" aria-label="Mobile drawer">
          <NavLinks variant="drawer" onNavigate={closeDrawer} />
        </nav>

        <div className="sb-drawer-footer">District portal · v1.0.0</div>
      </aside>

      <main className="sb-main" id="main-content">
        {children}
      </main>
    </div>
  );
}
