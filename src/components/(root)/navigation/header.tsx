"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavItems,
} from "@/components/ui/resizable-navbar";

export function Header() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setIsLoaded(true);
    }
  }, [user]);

  const navItems = [
    {
      name: "Products",
      link: "#pricing",
    },
    {
      name: "Benefits",
      link: "#benefits",
    },
    {
      name: "How it Works",
      link: "#how-it-works",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Company",
      link: "#company",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="relative z-10 mx-auto mt-5 flex w-full max-w-7xl items-center justify-between">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              {isLoaded ? (
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-10 h-10",
                      userButtonAvatarImage: "rounded-full",
                      userButtonPopoverCard: "bg-secondary-dark-700",
                      userButtonPopoverFooter: "hidden",
                    },
                  }}
                />
              ) : (
                <>
                  <NavbarButton
                    className="font-medium text-base text-secondary-light-200"
                    href="/sign-in"
                    variant="secondary"
                  >
                    Login
                  </NavbarButton>
                  <NavbarButton
                    className="flex h-[50px] w-[125px] items-center justify-center rounded-full bg-primary font-medium text-base text-white"
                    href="/"
                    variant="primary"
                  >
                    Get Demo
                  </NavbarButton>
                </>
              )}
            </div>
          </NavBody>

          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              className="bg-secondary-dark-700"
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  className="relative text-white/90 hover:text-white/70 dark:text-neutral-300"
                  href={item.link}
                  key={`mobile-link-${
                    // biome-ignore lint/suspicious/noArrayIndexKey: required by navbar
                    idx
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                {isLoaded ? (
                  <UserButton />
                ) : (
                  <>
                    <NavbarButton
                      className="w-full"
                      href="/sign-in"
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                    >
                      Login
                    </NavbarButton>
                    <NavbarButton
                      className="w-full bg-primary text-white"
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                    >
                      Get Demo
                    </NavbarButton>
                  </>
                )}
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
      </div>
    </header>
  );
}
