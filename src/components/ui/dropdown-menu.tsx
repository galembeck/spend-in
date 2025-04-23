import { useRef, useState } from "react";
import Link from "next/link";

import { DropdownMenuProps } from "@/types/types";

import { ChevronDown } from "lucide-react";

export function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <>
      <li
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center gap-1">
          {label} <ChevronDown size={16} />
        </button>

        {isOpen && (
          <div className="absolute left-0 top-full mt-2 bg-secondary-dark-700 rounded-md shadow-lg p-2 min-w-[180px] z-50">
            <ul className="flex flex-col gap-1">
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm text-white hover:bg-secondary-dark-600 rounded-md transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    </>
  );
}
