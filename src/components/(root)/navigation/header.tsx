"use client";

import { useEffect, useState } from "react";

import { UserButton, useUser } from "@clerk/nextjs";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
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
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between z-10 mt-5">
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
                    variant="secondary"
                    href="/sign-in"
                    className="text-secondary-light-200 font-medium text-base"
                  >
                    Login
                  </NavbarButton>
                  <NavbarButton
                    variant="primary"
                    href="/"
                    className="bg-primary text-white font-medium text-base rounded-full w-[125px] h-[50px] flex items-center justify-center"
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
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
              className="bg-secondary-dark-700"
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-white/90 dark:text-neutral-300 hover:text-white/70"
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
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                      href="/sign-in"
                      className="w-full"
                    >
                      Login
                    </NavbarButton>
                    <NavbarButton
                      onClick={() => setIsMobileMenuOpen(false)}
                      variant="primary"
                      href="/"
                      className="w-full bg-primary text-white"
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
