import { registerCards } from "@/constants";
import Image from "next/image";
import { RegisterCard } from "./card/register-card";

export function Register() {
  return (
    <section className="py-16 px-7 bg-secondary-dark-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Image
              src="/assets/register-steps.svg"
              alt="Register Steps"
              width={588}
              height={536}
              className="w-full max-h-[536px] rounded-xl shadow-lg"
            />
          </div>

          <div className="order-1 md:order-2">
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
              How it works
            </p>

            <h2 className="text-3xl max-w-64 md:max-w-7xl md:text-4xl font-bold text-white leading-snug mb-4">
              Few Easy Steps and Done
            </h2>

            <p className="text-secondary-light-300 text-base mb-8">
              In just few easy steps, you are all set to manage your business
              finances. Manage all expenses with Spend.In all in one place.
            </p>

            <Image
              src="/assets/register-items.svg"
              alt="Steps"
              width={526}
              height={288}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-start mt-20 items-center justify-center justify-items-center">
          {registerCards.map((card) => (
            <RegisterCard
              key={card.description}
              image={card.image}
              description={card.description}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-primary hover:bg-primary-light-400 text-white font-semibold py-3 px-8 rounded-full transition duration-300 w-full sm:w-auto">
            Get a Free Demo
          </button>
          <a
            href="#pricing"
            className="text-gray-400 hover:text-white text-sm transition duration-200 no-underline sm:bg-secondary sm:px-7 sm:py-4 sm:rounded-full sm:hover:bg-secondary/80"
          >
            See Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
