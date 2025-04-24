import Link from "next/link";
import Image from "next/image";

import { FooterItem } from "./footer-item";

import {
  companyLinks,
  productLinks,
  resourcesLinks,
  socialLinks,
} from "./../constants/index";

export function Footer() {
  return (
    <footer className="flex flex-col relative items-center justify-center pt-16 pb-8 md:pb-8 px-7 max-w-7xl mx-auto bg-white">
      <div className="grid xl:grid-cols-3 gap-12 w-full">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/logo-primary.svg"
              alt="Logo"
              width={32}
              height={32}
            />
            <h1 className="text-black font-bold text-xl">Spend.In</h1>
          </div>
          <p className="text-muted-foreground mt-4 text-sm text-start max-w-[50%] md:max-w-7xl">
            Data visualization, and expense management for your business.
          </p>
        </div>

        <div className="grid-cols-2 grid xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <FooterItem title="Product" links={productLinks} />
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <FooterItem title="Resources" links={resourcesLinks} />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <FooterItem title="Company" links={companyLinks} />
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <FooterItem title="Follow Us" links={socialLinks} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border md:pt-8 md:flex md:items-center md:justify-between w-full">
        <div className="mt-8 md:mt-0 flex flex-col md:flex-row gap-8">
          <Link
            href="/"
            className="text-secondary font-semibold text-base md:border-r-2 border-black pr-8"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-secondary font-semibold text-base md:border-r-2 border-black pr-8"
          >
            Terms & Conditions
          </Link>
          <Link href="/" className="text-secondary font-semibold text-base">
            Cookie Policy
          </Link>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} Spend.In - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
