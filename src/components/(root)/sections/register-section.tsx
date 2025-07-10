import Image from "next/image";
import Link from "next/link";
import { registerCards } from "@/constants";
import { RegisterCard } from "./cards/register-card";

export function Register() {
  return (
    <section className="bg-secondary-dark-700 px-7 py-16" id="how-it-works">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <Image
              alt="Register Steps"
              className="max-h-[536px] w-full rounded-xl shadow-lg"
              height={536}
              src="/assets/register-steps.svg"
              width={588}
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="mb-2 font-semibold text-primary text-sm uppercase tracking-wide">
              How it works
            </p>

            <h2 className="mb-4 max-w-64 font-bold text-3xl text-white leading-snug md:max-w-7xl md:text-4xl">
              Few Easy Steps and Done
            </h2>

            <p className="mb-8 text-base text-secondary-light-300">
              In just few easy steps, you are all set to manage your business
              finances. Manage all expenses with Spend.In all in one place.
            </p>

            <Image
              alt="Steps"
              className="h-auto w-full"
              height={288}
              src="/assets/register-items.svg"
              width={526}
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 items-center justify-center justify-items-center gap-10 text-start md:grid-cols-3">
          {registerCards.map((card) => (
            <RegisterCard
              description={card.description}
              image={card.image}
              key={card.description}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
    </section>
  );
}
