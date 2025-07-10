import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import type { DropdownMenuProps } from "@/types/types";

export function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <>
      {/** biome-ignore lint/nursery/noNoninteractiveElementInteractions: stop complaining... */}
      <li
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center gap-1" type="button">
          {label} <ChevronDown size={16} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 z-50 mt-2 min-w-[180px] rounded-md bg-secondary-dark-700 p-2 shadow-lg">
            <ul className="flex flex-col gap-1">
              {items.map((item, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: stop complaining...
                <li key={index}>
                  <Link
                    className="block rounded-md px-4 py-2 text-sm text-white transition hover:bg-secondary-dark-600"
                    href={item.href}
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
