import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "..";

interface NavItem {
  path: string;
  text: string;
}

const navItems: NavItem[] = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export function Navbar() {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <HomeIcon size={16} />
        <span>Jesus Velasco</span>
      </Link>

      <ul className="flex gap-3">
        {navItems.map((item) => (
          <ActiveLink {...item} key={`main-nav-item-${item.path}`} />
        ))}
      </ul>
    </nav>
  );
}
