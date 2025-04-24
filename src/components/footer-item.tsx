import Link from "next/link";

import { FooterItemProps } from "@/types/types";

export function FooterItem({ title, links }: FooterItemProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <ul className="mt-6 text-secondary-light-400 text-base font-normal">
        {links.map((link, index) => (
          <li key={index} className={index !== 0 ? "mt-2" : ""}>
            <Link
              href={link.href}
              className="hover:text-foreground transition-all duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
