import Image from "next/image";
import Link from "next/link";

export function Download() {
  return (
    <section className="bg-secondary-dark-700 px-7 py-8 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 lg:flex-row lg:items-start">
        <div className="flex-1">
          <p className="mb-3 font-semibold text-primary text-sm uppercase tracking-wide">
            Download Now
          </p>

          <div className="flex flex-col items-start md:gap-1">
            <div className="mb-6 flex gap-6 md:justify-between">
              <h2 className="max-w-md font-bold text-3xl text-white leading-snug md:text-4xl">
                Start Track your Business Expenses Today
              </h2>
            </div>
            <p className="max-w-xl text-base text-secondary-light-300">
              Here are some testimonials from our user after using Spend.In to
              manage their business expenses.
            </p>

            <div className="w-full py-8">
              <button
                className="w-full rounded-full bg-primary px-8 py-3 font-semibold text-white transition duration-300 hover:bg-primary-light-400 sm:w-auto"
                type="button"
              >
                <Link href="#pricing">Get a Free Demo</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <Image
            alt="Statistics Dashboard"
            className="h-auto w-full max-w-lg"
            height={100}
            src="/assets/statistics-dashboard.svg"
            width={100}
          />
        </div>
      </div>
    </section>
  );
}
