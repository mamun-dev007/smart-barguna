"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { PanelLeftClose, PanelLeftOpen, X } from "lucide-react";
import Header from "./Header";
import NavLinks from "./NavLinks";

export default function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shellStyle = {
    "--sb-sidebar-width": collapsed ? "4.5rem" : "16rem",
  } as CSSProperties;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="sb-app-shell" style={shellStyle}>
      <a className="sb-skip-link" href="#main-content">
        Skip to content
      </a>

      <Header
        sidebarCollapsed={collapsed}
        onToggleSidebar={() => setCollapsed((value) => !value)}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((value) => !value)}
      />

      <aside
        className="sb-sidebar"
        data-collapsed={collapsed ? "true" : "false"}
        aria-label="Main navigation"
      >
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
          <NavLinks collapsed={collapsed} />
        </nav>
      </aside>

      <div className="sb-mobile-navbar">
        <nav aria-label="Mobile primary">
          <NavLinks variant="mobile" />
        </nav>
      </div>

      {mobileMenuOpen ? (
        <div className="sb-mobile-drawer" id="sb-mobile-drawer">
          <div className="sb-mobile-drawer-head">
            <span>Navigation</span>
            <button
              type="button"
              className="sb-header-icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="sb-nav-icon" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile drawer">
            <NavLinks variant="drawer" onNavigate={() => setMobileMenuOpen(false)} />
          </nav>
        </div>
      ) : (
        <div id="sb-mobile-drawer" hidden />
      )}

      <main className="sb-main" id="main-content">
        {children}
      </main>
    </div>
  );
}
