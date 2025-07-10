"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

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

import { useAuth, useUser } from "@clerk/nextjs";
import { IconLogout2 } from "@tabler/icons-react";
import { MoreVertical } from "lucide-react";
import Link from "next/link";

const SidebarContext = createContext<SidebarContextType>({ expanded: true });

export function Sidebar({ children }: SidebarProps) {
  const { user } = useUser();
  const { signOut } = useAuth();

  const router = useRouter();

  const [expanded, setExpanded] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/");
    } catch {
      alert("Failed to log out. Please try again later.");
    }
  };

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
      <nav className="flex h-full flex-col border-r bg-white shadow-sm">
        <div className="flex items-center justify-between px-4">
          {!expanded && (
            <Image
              alt="Logo"
              className="my-4 ml-1.5 w-[75%]"
              height={10}
              src="/assets/icons/logo-black.svg"
              width={10}
            />
          )}

          <div
            className={`flex justify-center overflow-hidden transition-all ${
              expanded ? "w-full" : "w-0 pb-4"
            }`}
          >
            {expanded && (
              <div className="mt-7 flex flex-row items-center justify-center gap-2">
                <Link className="flex flex-row" href="/dashboard">
                  <Image
                    alt="Logo"
                    height={32}
                    src="/assets/icons/logo-black.svg"
                    width={32}
                  />

                  <h1 className="font-bold text-black text-xl">Spend.In</h1>
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

        <div className="relative border-t p-3">
          <div className="flex items-center">
            {user &&
              (expanded ? (
                <Image
                  alt="User Avatar"
                  className={`rounded-md ${expanded ? "ml-0" : "ml-2"}`}
                  height={40}
                  src={
                    user.imageUrl ||
                    (user.firstName?.[0] ?? "") + (user.lastName?.[0] ?? "")
                  }
                  width={40}
                />
              ) : (
                <button
                  className="flex rounded-xl p-4 hover:bg-error/20"
                  type="button"
                >
                  <IconLogout2 size={20} />
                </button>
              ))}

            {expanded && (
              <div className="ml-3 flex w-full items-center justify-between">
                {user && (
                  <div className="leading-4">
                    <h4 className="font-semibold">
                      {user.firstName} {user.lastName}
                    </h4>
                    <span className="text-gray-600 text-xs">
                      {user.emailAddresses[0]?.emailAddress}
                    </span>
                  </div>
                )}
                <button
                  onClick={() => setShowMenu((prev) => !prev)}
                  type="button"
                >
                  <MoreVertical size={20} />
                </button>
              </div>
            )}
          </div>

          {showMenu && (
            <div
              className="absolute right-3 bottom-full z-20 mb-2 w-36 rounded border bg-white shadow-md"
              ref={menuRef}
            >
              <button
                className="w-full px-4 py-2 text-left text-destructive text-sm hover:text-destructive/80"
                onClick={() => {
                  handleSignOut();
                  setShowMenu(false);
                }}
                type="button"
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
    // biome-ignore lint/a11y/useKeyWithClickEvents: stop complaining...
    // biome-ignore lint/nursery/noNoninteractiveElementInteractions: stop complaining...
    <li
      className={`group relative my-2 flex cursor-pointer items-center justify-center rounded-xl px-3 py-2 font-medium transition-colors ${
        isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-indigo-50"
      } `}
      onClick={handleNavigation}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "ml-3 w-52" : "w-0"
        }`}
      >
        {text}
      </span>

      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={
            "-translate-x-3 invisible absolute left-full ml-6 truncate rounded-md bg-indigo-100 px-2 py-1 text-indigo-800 text-sm opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 "
          }
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
          ? "mt-10 block px-5 font-medium text-secondary-light-300 text-xs"
          : "hidden"
      }`}
    >
      {section}
    </p>
  );
}
