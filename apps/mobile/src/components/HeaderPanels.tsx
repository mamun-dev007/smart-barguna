import { Link } from "react-router";

export type SampleNotification = {
  id: number;
  title: string;
  detail: string;
};

export const SAMPLE_NOTIFICATIONS: SampleNotification[] = [
  { id: 1, title: "Welcome to Smart Barguna", detail: "Demo notification" },
  { id: 2, title: "District notice published", detail: "Sample item" },
];

const MENU_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/news", label: "News" },
  { to: "/services", label: "Services" },
  { to: "/explore", label: "Explore" },
  { to: "/profile", label: "Profile" },
];

export function MenuPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <nav
      id="sb-mobile-menu-panel"
      aria-label="App menu"
      className="border-t border-brand-navy/10 bg-card px-4 pb-3 pt-2"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
        Navigation
      </p>
      <ul className="flex flex-col gap-1">
        {MENU_ITEMS.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={onClose}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-navy hover:bg-brand-green/10 hover:text-brand-green"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function SearchPanel({
  open,
  query,
  onQueryChange,
}: {
  open: boolean;
  query: string;
  onQueryChange: (value: string) => void;
}) {
  if (!open) return null;
  return (
    <div className="sb-mobile-panel" id="sb-mobile-search-panel">
      <label className="sb-mobile-search" htmlFor="sb-mobile-search-input">
        <span className="sb-sr-only">Search Smart Barguna</span>
        <input
          id="sb-mobile-search-input"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search Smart Barguna"
        />
      </label>
      <p className="sb-mobile-panel-hint">
        {query ? `Demo search: “${query}”` : "Local demo search — no results yet."}
      </p>
    </div>
  );
}

export function NotificationsPanel({
  open,
  read,
  onReadAll,
}: {
  open: boolean;
  read: boolean;
  onReadAll: () => void;
}) {
  if (!open) return null;
  return (
    <div className="sb-mobile-panel" id="sb-mobile-notifications-panel">
      <p className="sb-mobile-panel-hint">Sample notifications (demo)</p>
      <ul className="sb-mobile-panel-list">
        {SAMPLE_NOTIFICATIONS.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <span>{item.detail}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="sb-mobile-panel-action" onClick={onReadAll} disabled={read}>
        {read ? "All marked as read" : "Mark all as read"}
      </button>
    </div>
  );
}

export function ProfilePanel({
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
    <div>
    </div>
    // <div className="sb-mobile-panel" id="sb-mobile-profile-panel">
    //   {guest ? (
    //     <>
    //       <p className="sb-mobile-panel-hint">Guest user</p>
    //       <button type="button" className="sb-mobile-panel-action" onClick={onLogin}>
    //         Login (demo)
    //       </button>
    //     </>
    //   ) : (
    //     <>
    //       <p className="sb-mobile-panel-hint">Demo user — no real account.</p>
    //       <button type="button" className="sb-mobile-panel-action" onClick={onLogout}>
    //         Logout
    //       </button>
    //     </>
    //   )}
    // </div>
  );
}
