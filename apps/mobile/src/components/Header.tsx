import { useState } from "react";
import { Bell, Menu, Search } from "lucide-react";
import {
  MenuPanel,
  NotificationsPanel,
  SearchPanel,
} from "./HeaderPanels";
import logo from "../assets/logo.png";

type Panel = "search" | "notifications" | "menu" | null;

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
          <img src={logo} alt="" className="sb-brand-logo h-10 w-10" aria-hidden="true" />
          <span className="sb-brand-text text-2xl ">Smart Barguna</span>
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
            onClick={() => toggle("menu")}
            aria-expanded={panel === "menu"}
            aria-controls="sb-mobile-menu-panel"
            aria-label="Menu"
          >
            <Menu className="sb-nav-icon" aria-hidden="true" />
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
      <MenuPanel open={panel === "menu"} onClose={() => setPanel(null)} />
    </header>
  );
}
