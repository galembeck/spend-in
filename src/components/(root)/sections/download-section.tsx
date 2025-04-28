import Image from "next/image";
import Link from "next/link";

export function Download() {
  return (
    <section className="py-8 px-7 md:py-16 bg-secondary-dark-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-4">
        <div className="flex-1">
          <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-3">
            Download Now
          </p>

          <div className="flex flex-col items-start md:gap-1">
            <div className="flex md:justify-between gap-6 mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug max-w-md">
                Start Track your Business Expenses Today
              </h2>
            </div>
            <p className="text-secondary-light-300 max-w-xl text-base">
              Here are some testimonials from our user after using Spend.In to
              manage their business expenses.
            </p>

            <div className="py-8 w-full">
              <button className="bg-primary hover:bg-primary-light-400 text-white font-semibold py-3 px-8 rounded-full transition duration-300 w-full sm:w-auto">
                <Link href="#pricing">Get a Free Demo</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/assets/statistics-dashboard.svg"
            alt="Statistics Dashboard"
            width={100}
            height={100}
            className="w-full h-auto max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
