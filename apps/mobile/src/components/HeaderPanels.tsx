export type SampleNotification = {
  id: number;
  title: string;
  detail: string;
};

export const SAMPLE_NOTIFICATIONS: SampleNotification[] = [
  { id: 1, title: "Welcome to Smart Barguna", detail: "Demo notification" },
  { id: 2, title: "District notice published", detail: "Sample item" },
];

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
