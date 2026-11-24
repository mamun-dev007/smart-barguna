import { NavLink } from "react-router";
import {
  Compass,
  Home,
  LayoutGrid,
  Newspaper,
  Timer,
  type LucideIcon,
} from "lucide-react";

type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
};

const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/news", label: "News", icon: Newspaper },
  { to: "/Salad", label: "Salad", icon: Timer },
  { to: "/services", label: "Services", icon: LayoutGrid },
  { to: "/explore", label: "Explore", icon: Compass },
];

export default function BottomNavigation() {
  return (
    <nav className="sb-bottom-nav" aria-label="Primary">
      <ul className="sb-bottom-nav-list">
        {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                isActive ? "sb-bottom-nav-link is-active" : "sb-bottom-nav-link"
              }
            >
              <Icon className="sb-bottom-nav-icon" aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
