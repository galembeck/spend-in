"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  children: ReactNode;
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  alert?: boolean;
  href: string;
}

interface SidebarSectionProps {
  section: string;
}

interface SidebarContextType {
  expanded: boolean;
}

import { MoreVertical } from "lucide-react";
import { IconLogout2 } from "@tabler/icons-react";
import Link from "next/link";

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="px-4 flex justify-between items-center">
          {!expanded && (
            <Image
              src="/assets/icons/logo-black.svg"
              alt="Logo"
              width={10}
              height={10}
              className="w-[75%] my-4 ml-1.5"
            />
          )}

          <div
            className={`overflow-hidden transition-all flex justify-center ${
              expanded ? "w-full" : "w-0 pb-4"
            }`}
          >
            {expanded && (
              <div className="flex flex-row items-center justify-center gap-2 mt-7">
                <Link href="/dashboard" className="flex flex-row">
                  <Image
                    src="/assets/icons/logo-black.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                  />

                  <h1 className="text-black font-bold text-xl">Spend.In</h1>
                </Link>
              </div>
            )}
          </div>
          {/* <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`rounded-lg bg-gray-50 hover:bg-gray-100 ${
              expanded ? "mt-7 p-1.5" : "mt-4 py-2 px-3"
            }`}
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button> */}
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-4">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t p-3 relative">
          <div className="flex items-center">
            {expanded ? (
              <Image
                src="https://avatars.githubusercontent.com/u/51977156?v=4"
                alt="User Avatar"
                width={40}
                height={40}
                className={`rounded-md ${expanded ? "ml-0" : "ml-2"}`}
              />
            ) : (
              <button className="flex p-4 hover:bg-error/20 rounded-xl">
                <IconLogout2 size={20} />
              </button>
            )}

            {expanded && (
              <div className="ml-3 w-full flex justify-between items-center">
                <div className="leading-4">
                  <h4 className="font-semibold">Pedro Galembeck</h4>
                  <span className="text-xs text-gray-600">
                    galembeckpedro@gmail.com
                  </span>
                </div>
                <button onClick={() => setShowMenu((prev) => !prev)}>
                  <MoreVertical size={20} />
                </button>
              </div>
            )}
          </div>

          {showMenu && (
            <div
              ref={menuRef}
              className="absolute right-3 bottom-full mb-2 w-36 bg-white border rounded shadow-md z-20"
            >
              <button
                onClick={() => {
                  alert("Logging out...");
                  setShowMenu(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert = false,
  href,
}: SidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const { expanded } = useContext(SidebarContext);

  const isActive = active ?? (href ? pathname === href : false);

  const handleNavigation = () => {
    if (pathname !== href) {
      router.push(href);
    }
  };

  return (
    <li
      onClick={handleNavigation}
      className={`relative flex items-center py-2 px-3 justify-center my-2
        font-medium rounded-xl cursor-pointer transition-colors group
        ${
          isActive
            ? "bg-primary text-white"
            : "hover:bg-indigo-50 text-gray-600"
        }
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-indigo-100 text-indigo-800 text-sm truncate
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

export function SidebarSection({ section }: SidebarSectionProps) {
  const { expanded } = useContext(SidebarContext);

  return (
    <p
      className={`${
        expanded
          ? "block px-5 mt-10 text-secondary-light-300 font-medium text-xs"
          : "hidden"
      }`}
    >
      {section}
    </p>
  );
}
