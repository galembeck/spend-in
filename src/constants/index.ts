import { PricingCardProps } from "@/types/types";

export const benefitsCards = [
  {
    image: "/assets/benefit-card-1.svg",
    icon: "/assets/icons/payment.svg",
    title: "Automatic Invoice Payment",
    description:
      "No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it’s that easy!",
  },
  {
    image: "/assets/benefit-card-2.svg",
    icon: "/assets/icons/history.svg",
    title: "Instant Payment Confirmation",
    description:
      "Get instant confirmation of your payments. No more waiting for hours or days to know if your payment was successful.",
  },
  {
    image: "/assets/benefit-card-3.svg",
    icon: "/assets/icons/multi-card.svg",
    title: "Secure Transactions",
    description:
      "We prioritize your security. All transactions are encrypted and secure, ensuring your data is safe with us.",
  },
];

export const registerCards = [
  {
    image: "/assets/register-card-1.svg",
    description: "Register your Spend.In account.",
  },
  {
    image: "/assets/register-card-2.svg",
    description: "Fill in the list of your business expenses.",
  },
  {
    image: "/assets/register-card-3.svg",
    description: "Done, let's continue the work!",
  },
];

export const productLinks = [
  {
    name: "Digital Invoice",
    href: "/",
  },
  {
    name: "Insights",
    href: "/",
  },
  {
    name: "Reimbursements",
    href: "/",
  },
  {
    name: "Virtual Assistant",
    href: "/",
  },
  {
    name: "Artificial Intelligence",
    href: "/",
  },
];

export const resourcesLinks = [
  {
    name: "Blog",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
  {
    name: "FAQ",
    href: "/",
  },
  {
    name: "Events",
    href: "/",
  },
  {
    name: "Ebook & Guide",
    href: "/",
  },
];

export const companyLinks = [
  {
    name: "About Us",
    href: "/",
  },
  {
    name: "Newsletters",
    href: "/",
  },
  {
    name: "Our Partners",
    href: "/",
  },
  {
    name: "Career",
    href: "/",
  },
  {
    name: "Contact Us",
    href: "/",
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "/",
  },
  {
    name: "Twitter",
    href: "/",
  },
  {
    name: "Instagram",
    href: "/",
  },
  {
    name: "Facebook",
    href: "/",
  },
  {
    name: "YouTube",
    href: "/",
  },
];

export const positiveProductivity = [
  "Analyze your business cost easily with group transaction through tagging feature.",
  "Add more than one card for payment. Integrated with more than 50+ payment methods and support bulk payment.",
  "With one click, organize your business expenses by date, name, or category for quick and easy access.",
];

export const negativeProductivity = [
  "Complex recording process due to every administrative file in a different place.",
  "Need more effort to pay manually one by one invoice because there is no payment accommodation.",
  "Manual data arranging needs a long time because the different months/years are not in the same place.",
];

export const pricingPlans: PricingCardProps[] = [
  {
    title: "Free",
    icon: "/assets/icons/lovely.svg",
    subtitle: "Perfect plan to get started.",
    priceMonthly: "$0",
    priceYearly: "$0",
    description:
      "A free plan grants you access to some cool features of Spend.In.",
    includedFeatures: [
      "Sync across device",
      "5 workspace",
      "Collaborate with 5 user",
    ],
    notIncludedFeatures: [
      "Sharing permission",
      "Admin tools",
      "100+ integrations",
    ],
    button: "Get Your Free Plan",
  },
  {
    title: "Pro",
    icon: "/assets/icons/crown.svg",
    subtitle: "Perfect plan for professionals!",
    priceMonthly: "$12",
    priceYearly: "$93,6",
    description:
      "For professional only! Start arranging your expenses with our best templates.",
    includedFeatures: [
      "Everything in Free Plan",
      "Unlimited workspace",
      "Collaborative workspace",
      "Sharing permission",
      "Admin tools",
      "100+ integrations",
    ],
    button: "Get Started",
    badge: "Popular",
  },
  {
    title: "Ultimate",
    icon: "/assets/icons/share.svg",
    subtitle: "Best suits for great company.",
    priceMonthly: "$33",
    priceYearly: "$257,4",
    description:
      "If you a finance manager at big  company, this plan is a perfect match.",
    includedFeatures: [
      "Everything in Pro Plan",
      "Daily performance reports",
      "Dedicated assistant",
      "Artificial intelligence",
      "Marketing tools & automations",
      "Advanced security",
    ],
    button: "Get Started",
  },
];
