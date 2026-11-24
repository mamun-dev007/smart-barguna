import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { ChevronDown, X } from "lucide-react";
import logo from "../assets/logo.png";
import { isItemActive, NAV_ITEMS, PLAY_STORE_URL } from "./navigation";

type NavigationDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function NavigationDrawer({
  open,
  onClose,
}: NavigationDrawerProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const activeGroup = NAV_ITEMS.find(
      (item) => item.submenu && isItemActive(item, pathname),
    );
    setExpanded(activeGroup?.to ?? null);
  }, [open, pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  function handleRating() {
    if (PLAY_STORE_URL) {
      window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer");
    } else {
      navigate("/app-rating");
    }
    onClose();
  }

  return (
    <div
      className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
      inert={!open}
    >
      <div
        id="sb-drawer-overlay"
        className={`absolute inset-0 bg-black/55 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        id="sb-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`absolute inset-y-0 left-0 flex h-[100dvh] w-[min(20rem,85vw)] flex-col bg-brand-navy text-white shadow-2xl transition-transform duration-200 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex shrink-0 items-center gap-3 border-b border-white/10 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <img
            src={logo}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 shrink-0 rounded-full bg-white object-contain"
          />
          <span className="min-w-0 flex-1 truncate text-base font-bold">
            Smart Barguna
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white hover:bg-white/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Main menu" className="min-h-0 flex-1 overflow-y-auto py-2">
          <ul className="flex flex-col gap-0.5 px-2">
            {NAV_ITEMS.map((item) => {
              const active = isItemActive(item, pathname);
              const Icon = item.icon;
              const isExpanded = expanded === item.to;
              const rowClass = `flex items-center rounded-xl ${
                active ? "bg-brand-green" : "hover:bg-white/10"
              }`;

              return (
                <li key={item.label}>
                  <div className={rowClass}>
                    {item.submenu || item.rating ? (
                      <button
                        type="button"
                        onClick={
                          item.rating
                            ? handleRating
                            : () =>
                                setExpanded((current) =>
                                  current === item.to ? null : (item.to ?? null),
                                )
                        }
                        aria-expanded={item.submenu ? isExpanded : undefined}
                        aria-controls={item.submenu ? `submenu-${item.to}` : undefined}
                        aria-current={active ? "page" : undefined}
                        className="flex min-h-11 flex-1 items-center gap-3 px-3 py-2 text-left text-sm font-medium"
                      >
                        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                        <span className="min-w-0 flex-1 truncate">{item.label}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.to ?? "/"}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className="flex min-h-11 flex-1 items-center gap-3 px-3 py-2 text-left text-sm font-medium"
                      >
                        <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                        <span className="min-w-0 flex-1 truncate">{item.label}</span>
                      </Link>
                    )}

                    {item.submenu ? (
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded((current) =>
                            current === item.to ? null : (item.to ?? null),
                          )
                        }
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${item.label} submenu`}
                        aria-expanded={isExpanded}
                        aria-controls={`submenu-${item.to}`}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white/80 hover:bg-white/10"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                      </button>
                    ) : null}
                  </div>

                  {item.submenu && isExpanded ? (
                    <ul
                      id={`submenu-${item.to}`}
                      className="ml-6 mt-1 flex flex-col gap-0.5 border-l border-white/15 pl-3"
                    >
                      {item.submenu.map((sub) => {
                        const subActive = pathname === sub.to;
                        return (
                          <li key={sub.to}>
                            <Link
                              to={sub.to}
                              onClick={onClose}
                              aria-current={subActive ? "page" : undefined}
                              className={`flex min-h-11 items-center rounded-lg px-3 py-2 text-sm ${
                                subActive
                                  ? "bg-brand-green font-semibold text-white"
                                  : "text-white/70 hover:bg-white/10 hover:text-white"
                              }`}
                            >
                              <span className="truncate">{sub.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-white/10 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-xs text-white/55">
          Smart Barguna · District portal
        </div>
      </aside>
    </div>
  );
}
