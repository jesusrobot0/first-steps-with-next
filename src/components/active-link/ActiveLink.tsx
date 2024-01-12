"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}

export function ActiveLink({ path, text }: Props) {
  const currentPath = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`${style.link} ${
          path === currentPath && style["active-link"]
        }`}
      >
        {text}
      </Link>
    </li>
  );
}
