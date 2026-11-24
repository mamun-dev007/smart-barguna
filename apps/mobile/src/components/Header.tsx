import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { Menu, Search } from "lucide-react";
import { SearchPanel } from "./HeaderPanels";
import NavigationDrawer from "./NavigationDrawer";
import logo from "../assets/logo.png";

const SCROLL_THRESHOLD = 4;
const TOP_THRESHOLD = 2;

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);
  const hiddenRef = useRef(false);
  const frameRef = useRef<number | null>(null);
  const { pathname } = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;

    const setHidden = (hidden: boolean) => {
      if (hiddenRef.current === hidden) return;
      hiddenRef.current = hidden;
      element.classList.toggle("sb-app-header--hidden", hidden);
    };

    const applyScroll = () => {
      frameRef.current = null;
      const currentY = window.scrollY;
      const delta = currentY - lastScrollYRef.current;

      if (currentY <= TOP_THRESHOLD) {
        setHidden(false);
        lastScrollYRef.current = currentY;
        return;
      }
      if (Math.abs(delta) < SCROLL_THRESHOLD) return;

      setHidden(delta > 0);
      lastScrollYRef.current = currentY;
    };

    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(applyScroll);
    };

    hiddenRef.current = false;
    element.classList.remove("sb-app-header--hidden");
    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const element = headerRef.current;
    if (!element) return;
    hiddenRef.current = false;
    element.classList.remove("sb-app-header--hidden");
    lastScrollYRef.current = window.scrollY;
  }, [pathname, drawerOpen]);

  return (
    <>
      <header ref={headerRef} className="sb-app-header border-b border-white/10 bg-brand-navy text-white">
        <div className="sb-container sb-app-header-inner">
          <div className="sb-app-header-brand text-white " aria-label="Smart Barguna">
            <img
              src={logo}
              alt=""
              className="sb-brand-logo h-10 w-10 rounded-full"
              aria-hidden="true"
            />
            <span className="sb-brand-text text-2xl text-white">Smart Barguna</span>
          </div>

          <div className="sb-app-header-actions">
            <button
              type="button"
              className="sb-app-header-icon text-white hover:bg-white/10 hover:text-white"
              onClick={() => setSearchOpen((value) => !value)}
              aria-expanded={searchOpen}
              aria-controls="sb-mobile-search-panel"
              aria-label="Search"
            >
              <Search className="sb-nav-icon" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="sb-app-header-icon text-white hover:bg-white/10 hover:text-white"
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
