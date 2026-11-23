import Link from "next/link";
import type { NavItem } from "./navigation";

export type Language = "bn" | "en";

export type SampleNotification = {
  id: number;
  title: string;
  detail: string;
};

export const SAMPLE_NOTIFICATIONS: SampleNotification[] = [
  { id: 1, title: "Welcome to Smart Barguna", detail: "Demo notification" },
  { id: 2, title: "District notice published", detail: "Sample item" },
  { id: 3, title: "Weather update available", detail: "Sample item" },
];

export function LanguageMenu({
  open,
  language,
  onSelect,
}: {
  open: boolean;
  language: Language;
  onSelect: (language: Language) => void;
}) {
  if (!open) return null;
  return (
    <div className="sb-popover sb-language-menu" role="menu" aria-label="Language">
      <button
        type="button"
        role="menuitem"
        className="sb-popover-item"
        data-selected={language === "bn" ? "true" : undefined}
        onClick={() => onSelect("bn")}
      >
        বাংলা
      </button>
      <button
        type="button"
        role="menuitem"
        className="sb-popover-item"
        data-selected={language === "en" ? "true" : undefined}
        onClick={() => onSelect("en")}
      >
        English
      </button>
    </div>
  );
}

export function NotificationsMenu({
  open,
  notifications,
  read,
  onReadAll,
}: {
  open: boolean;
  notifications: SampleNotification[];
  read: boolean;
  onReadAll: () => void;
}) {
  if (!open) return null;
  return (
    <div className="sb-popover sb-notifications-menu" role="menu" aria-label="Notifications">
      <p className="sb-popover-heading">Sample notifications (demo)</p>
      <ul className="sb-popover-list">
        {notifications.map((item) => (
          <li key={item.id} className="sb-popover-note">
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="sb-popover-action" onClick={onReadAll} disabled={read}>
        {read ? "All marked as read" : "Mark all as read"}
      </button>
    </div>
  );
}

export function ProfileMenu({
  open,
  guest,
  onLogin,
  onLogout,
}: {
  open: boolean;
  guest: boolean;
  onLogin: () => void;
  onLogout: () => void;
}) {
  if (!open) return null;
  return (
    <div className="sb-popover sb-profile-menu" role="menu" aria-label="Profile">
      {guest ? (
        <>
          <p className="sb-popover-heading">Guest user</p>
          <button type="button" className="sb-popover-action" onClick={onLogin}>
            Login (demo)
          </button>
        </>
      ) : (
        <>
          <p className="sb-popover-heading">Demo user</p>
          <p className="sb-popover-note">Signed in locally — no real account.</p>
          <button type="button" className="sb-popover-action" onClick={onLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export function SearchSuggestions({
  query,
  items,
  onSelect,
}: {
  query: string;
  items: NavItem[];
  onSelect: () => void;
}) {
  if (!query.trim() || items.length === 0) return null;
  return (
    <div className="sb-popover sb-search-suggestions" role="listbox" aria-label="Search suggestions">
      <p className="sb-popover-heading">Matching pages (local demo)</p>
      <ul className="sb-popover-list">
        {items.map(({ href, label }) => (
          <li key={href}>
            <Link href={href} className="sb-popover-item" role="option" onClick={onSelect}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
