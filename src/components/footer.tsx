import Image from "next/image";
import Link from "next/link";

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
              <h3 className="text-lg font-semibold text-black">Product</h3>
              <ul className="mt-6 text-secondary-light-400 text-base font-normal">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Digital Invoice
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Insights
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Reimbursements
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Virtual Assistant
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Artificial Intelligence
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-lg font-semibold text-black">Resources</h3>
              <ul className="mt-6 text-secondary-light-400 text-base font-normal">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Events
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Ebook & Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-lg font-semibold text-black">Company</h3>
              <ul className="mt-6 text-secondary-light-400 text-base font-normal">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Newsletters
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Our Partners
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Career
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-lg font-semibold text-black">Follow Us</h3>
              <ul className="mt-6 text-secondary-light-400 text-base font-normal">
                <li>
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Twitter
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Instagram
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    YouTube
                  </Link>
                </li>
              </ul>
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
