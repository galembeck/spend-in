import Image from "next/image";
import Link from "next/link";
import {
  companyLinks,
  productLinks,
  resourcesLinks,
  socialLinks,
} from "../../../constants/index";
import { FooterItem } from "./footer-item";

export function Footer() {
  return (
    <footer className="relative mx-auto flex max-w-7xl flex-col items-center justify-center bg-white px-7 pt-16 pb-8 md:pb-8">
      <div className="grid w-full gap-12 xl:grid-cols-3">
        <div className="flex flex-col items-start justify-start md:max-w-[200px]">
          <div className="flex items-center justify-center gap-2">
            <Image
              alt="Logo"
              height={32}
              src="/assets/icons/logo-primary.svg"
              width={32}
            />
            <h1 className="font-bold text-black text-xl">Spend.In</h1>
          </div>
          <p className="mt-4 max-w-[50%] text-start text-muted-foreground text-sm md:max-w-7xl">
            Data visualization, and expense management for your business.
          </p>
        </div>

        <div className="grid grid-cols-2 xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <FooterItem links={productLinks} title="Product" />
            </div>
            <div className="mt-10 flex flex-col md:mt-0">
              <FooterItem links={resourcesLinks} title="Resources" />
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <FooterItem links={companyLinks} title="Company" />
            </div>
            <div className="mt-10 flex flex-col md:mt-0">
              <FooterItem links={socialLinks} title="Follow Us" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full border-border border-t md:flex md:items-center md:justify-between md:pt-8">
        <div className="mt-8 flex flex-col gap-8 md:mt-0 md:flex-row">
          <Link
            className="border-black pr-8 font-semibold text-base text-secondary md:border-r-2"
            href="/"
          >
            Privacy Policy
          </Link>
          <Link
            className="border-black pr-8 font-semibold text-base text-secondary md:border-r-2"
            href="/"
          >
            Terms & Conditions
          </Link>
          <Link className="font-semibold text-base text-secondary" href="/">
            Cookie Policy
          </Link>
        </div>

        <div>
          <p className="mt-8 text-muted-foreground text-sm md:mt-0">
            &copy; {new Date().getFullYear()} Spend.In - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
