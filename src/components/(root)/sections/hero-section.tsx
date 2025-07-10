import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="flex flex-col items-center bg-secondary-dark-700 px-7 py-12"
      id="#"
    >
      <div className="w-full max-w-4xl text-center">
        <div className="flex items-center justify-center">
          <h1 className="max-w-3xl text-start font-bold text-4xl text-white leading-tight tracking-tight sm:text-center md:text-5xl md:leading-tight lg:text-6xl">
            All your business expenses in one place.
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="mt-6 max-w-2xl text-base text-gray-400 leading-relaxed md:text-lg">
            Your one-stop finance empower platform. Manage all your business
            expenses with our supafast app.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            className="w-full rounded-full bg-primary px-8 py-3 font-semibold text-white transition duration-300 hover:bg-primary-light-400 sm:w-auto"
            type="button"
          >
            <Link href="#pricing">Get a Free Demo</Link>
          </button>
          <a
            className="text-gray-400 text-sm no-underline transition duration-200 hover:text-white sm:rounded-full sm:bg-secondary sm:px-7 sm:py-4 sm:hover:bg-secondary/80"
            href="#pricing"
          >
            See Pricing
          </a>
        </div>
      </div>

      <div className="mt-16 w-full max-w-6xl">
        <Image
          alt="Dashboard Preview"
          className="h-full w-full rounded-xl shadow-2xl"
          height={800}
          priority
          src="/assets/dashboard-preview.svg"
          width={1200}
        />
      </div>
    </section>
  );
}
