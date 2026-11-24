import { useState } from "react";
import { Bell, Search, UserRound } from "lucide-react";
import {
  NotificationsPanel,
  ProfilePanel,
  SearchPanel,
} from "./HeaderPanels";
import logo from "../assets/logo.png";

type Panel = "search" | "notifications" | "profile" | null;

export default function Header() {
  const [panel, setPanel] = useState<Panel>(null);
  const [query, setQuery] = useState("");
  const [guest, setGuest] = useState(true);
  const [read, setRead] = useState(false);

  function toggle(next: Exclude<Panel, null>) {
    setPanel((current) => (current === next ? null : next));
  }

  return (
    <header className="sb-app-header">
      <div className="sb-container sb-app-header-inner">
        <div className="sb-app-header-brand" aria-label="Smart Barguna">
          <img src={logo} alt="" className="sb-brand-logo" aria-hidden="true" />
          <span className="sb-brand-text">Smart Barguna</span>
        </div>

        <div className="sb-app-header-actions">
          <button
            type="button"
            className="sb-app-header-icon"
            onClick={() => toggle("search")}
            aria-expanded={panel === "search"}
            aria-controls="sb-mobile-search-panel"
            aria-label="Search"
          >
            <Search className="sb-nav-icon" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="sb-app-header-icon"
            onClick={() => toggle("notifications")}
            aria-expanded={panel === "notifications"}
            aria-controls="sb-mobile-notifications-panel"
            aria-label="Notifications"
          >
            <Bell className="sb-nav-icon" aria-hidden="true" />
            {read ? null : <span className="sb-unread-dot" aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="sb-app-header-icon"
            onClick={() => toggle("profile")}
            aria-expanded={panel === "profile"}
            aria-controls="sb-mobile-profile-panel"
            aria-label={guest ? "Guest profile" : "User profile"}
          >
            <UserRound className="sb-nav-icon" aria-hidden="true" />
          </button>
        </div>
      </div>

      <SearchPanel
        open={panel === "search"}
        query={query}
        onQueryChange={setQuery}
      />
      <NotificationsPanel
        open={panel === "notifications"}
        read={read}
        onReadAll={() => setRead(true)}
      />
      <ProfilePanel
        open={panel === "profile"}
        guest={guest}
        onLogin={() => setGuest(false)}
        onLogout={() => setGuest(true)}
      />
    </header>
  );
}
