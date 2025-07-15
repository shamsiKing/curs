import {
  ChartSpline,
  Clock2,
  Contact,
  HandCoins,
  Home,
  ListVideo,
  MapPinned,
  MessageSquareText,
  Percent,
  Receipt,
  Rss,
  Star,
  UserRound,
  Wifi,
  Youtube,
} from "lucide-react";

export const navLinks = [
  { route: "", name: "Home", icon: Home },
  { route: "courses", name: "Courses", icon: ListVideo },
  { route: "blogs", name: "Blogs", icon: Rss },
  { route: "contact", name: "Contact", icon: Contact },
];

export const lngs = [
  { route: "en", label: "English" },
  { route: "uz", label: "O'zbekcha" },
  { route: "ru", label: "Русский" },
  { route: "tr", label: "Türkce" },
];

export const companies = [
  ChartSpline,
  Clock2,
  HandCoins,
  MapPinned,
  Star,
  Wifi,
  Youtube,
  UserRound,
  Receipt,
  Percent,
  MessageSquareText,
];
