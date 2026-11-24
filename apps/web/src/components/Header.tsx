"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Bell,
  Globe,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  X,
} from "lucide-react";
import { filterNavItems } from "./navigation";
import {
  LanguageMenu,
  NotificationsMenu,
  SAMPLE_NOTIFICATIONS,
  SearchSuggestions,
  type Language,
} from "./HeaderMenus";

type HeaderProps = {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  drawerOpen: boolean;
  onOpenDrawer: () => void;
};

type OpenMenu = "language" | "notifications" | null;

export default function Header({
  sidebarCollapsed,
  onToggleSidebar,
  drawerOpen,
  onOpenDrawer,
}: HeaderProps) {
  const [query, setQuery] = useState("");
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [language, setLanguage] = useState<Language>("en");
  const [notificationsRead, setNotificationsRead] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    function onPointerDown(event: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  const suggestions = useMemo(() => filterNavItems(query), [query]);

  function toggleMenu(menu: Exclude<OpenMenu, null>) {
    setOpenMenu((current) => (current === menu ? null : menu));
  }

  return (
    <header className="sb-header" ref={rootRef}>
      <div className="sb-header-inner sb-container">
        <button
          type="button"
          className="sb-header-icon sb-collapse-toggle"
          onClick={onToggleSidebar}
          aria-expanded={!sidebarCollapsed}
          aria-controls="sb-sidebar-nav"
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? (
            <PanelLeftOpen className="sb-nav-icon" aria-hidden="true" />
          ) : (
            <PanelLeftClose className="sb-nav-icon" aria-hidden="true" />
          )}
        </button>

        {drawerOpen ? null : (
          <button
            type="button"
            className="sb-header-icon sb-menu-toggle"
            onClick={onOpenDrawer}
            aria-controls="sb-mobile-drawer"
            aria-label="Open navigation menu"
          >
            <Menu className="sb-nav-icon" aria-hidden="true" />
          </button>
        )}

        <Link href="/" className="sb-header-brand" aria-label="Smart Barguna home">
          <span className="sb-brand-mark" aria-hidden="true">
            SB
          </span>
          <span className="sb-brand-text">Smart Barguna</span>
        </Link>

        <div className="sb-header-search">
          <Search className="sb-nav-icon" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Smart Barguna"
            aria-label="Search Smart Barguna"
          />
          {query ? (
            <button
              type="button"
              className="sb-search-clear"
              onClick={() => setQuery("")}
              aria-label="Clear search"
            >
              <X className="sb-nav-icon" aria-hidden="true" />
            </button>
          ) : null}
          <div className="sb-header-popover-wrap">
            <SearchSuggestions
              query={query}
              items={suggestions}
              onSelect={() => setQuery("")}
            />
          </div>
        </div>

        <div className="sb-header-actions">
          <div className="sb-header-popover-wrap" id="sb-language-menu">
            <button
              type="button"
              className="sb-header-action"
              onClick={() => toggleMenu("language")}
              aria-expanded={openMenu === "language"}
              aria-haspopup="menu"
              aria-label="Change language"
            >
              <Globe className="sb-nav-icon" aria-hidden="true" />
              <span>{language === "bn" ? "বাংলা" : "English"}</span>
            </button>
            <LanguageMenu
              open={openMenu === "language"}
              language={language}
              onSelect={(value) => {
                setLanguage(value);
                setOpenMenu(null);
              }}
            />
          </div>

          <div className="sb-header-popover-wrap" id="sb-notifications-menu">
            <button
              type="button"
              className="sb-header-icon sb-notification-button"
              onClick={() => toggleMenu("notifications")}
              aria-expanded={openMenu === "notifications"}
              aria-haspopup="menu"
              aria-label="Notifications"
            >
              <Bell className="sb-nav-icon" aria-hidden="true" />
              {notificationsRead ? null : <span className="sb-unread-dot" aria-hidden="true" />}
            </button>
            <NotificationsMenu
              open={openMenu === "notifications"}
              notifications={SAMPLE_NOTIFICATIONS}
              read={notificationsRead}
              onReadAll={() => setNotificationsRead(true)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
