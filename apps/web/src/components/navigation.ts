import {
  Bookmark,
  CloudSun,
  FileText,
  Home,
  Info,
  LayoutGrid,
  Map,
  Newspaper,
  Settings,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/news", label: "News", icon: Newspaper },
  { href: "/services", label: "Services", icon: LayoutGrid },
  { href: "/explore", label: "Explore Barguna", icon: Map },
  { href: "/emergency", label: "Emergency & Safety", icon: ShieldAlert },
  { href: "/weather", label: "Weather", icon: CloudSun },
  { href: "/district", label: "District Information", icon: FileText },
  { href: "/library", label: "My Library", icon: Bookmark },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/about", label: "About Smart Barguna", icon: Info },
];

export function filterNavItems(query: string): NavItem[] {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  return NAV_ITEMS.filter((item) => item.label.toLowerCase().includes(term)).slice(0, 5);
}
