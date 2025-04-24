import Image from "next/image";

export function Hero() {
  return (
    <section className="px-7 py-12 flex flex-col items-center bg-secondary-dark-700">
      <div className="max-w-4xl w-full text-center">
        <div className="flex items-center justify-center">
          <h1 className="text-start text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight md:leading-tight text-white sm:text-center max-w-3xl">
            All your business expenses in one place.
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
            Your one-stop finance empower platform. Manage all your business
            expenses with our supafast app.
          </p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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

      {/* Imagem do dashboard */}
      <div className="mt-16 w-full max-w-6xl">
        <Image
          src="/assets/dashboard-preview.svg"
          alt="Dashboard Preview"
          width={1200}
          height={800}
          className="w-full h-full rounded-xl shadow-2xl"
          priority
        />
      </div>
    </section>
  );
}
