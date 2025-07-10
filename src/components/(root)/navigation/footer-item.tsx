import Link from "next/link";

import type { FooterItemProps } from "@/types/types";

export function FooterItem({ title, links }: FooterItemProps) {
  return (
    <div>
      <h3 className="font-semibold text-black text-lg">{title}</h3>
      <ul className="mt-6 font-normal text-base text-secondary-light-400">
        {links.map((link, index) => (
          <li className={index !== 0 ? "mt-2" : ""} key={link.name}>
            <Link
              className="transition-all duration-300 hover:text-foreground"
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
