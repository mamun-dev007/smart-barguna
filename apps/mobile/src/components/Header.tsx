import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { SearchPanel } from "./HeaderPanels";
import NavigationDrawer from "./NavigationDrawer";
import logo from "../assets/logo.png";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sb-app-header">
        <div className="sb-app-header-inner">
          <div className="sb-app-header-brand" aria-label="Smart Barguna">
            <img
              src={logo}
              alt=""
              className="sb-brand-logo"
              aria-hidden="true"
            />
            <span className="sb-brand-text">Smart Barguna</span>
          </div>

          <div className="sb-app-header-actions">
            <button
              type="button"
              className="sb-app-header-icon"
              onClick={() => setSearchOpen((value) => !value)}
              aria-expanded={searchOpen}
              aria-controls="sb-mobile-search-panel"
              aria-label="Search"
            >
              <Search className="sb-nav-icon" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="sb-app-header-icon"
              onClick={() => setDrawerOpen(true)}
              aria-expanded={drawerOpen}
              aria-controls="sb-navigation-drawer"
              aria-label="Open navigation menu"
            >
              <Menu className="sb-nav-icon" aria-hidden="true" />
            </button>
          </div>
        </div>

        <SearchPanel
          open={searchOpen}
          query={query}
          onQueryChange={setQuery}
        />
      </header>

      <NavigationDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
}
