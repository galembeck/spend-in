export interface DropdownMenuProps {
  label: string;
  items: {
    label: string;
    href: string;
  }[];
}

export interface BenefitsCardProps {
  image: string;
  icon: string;
  title: string;
  description: string;
}

export interface RegisterCardProps {
  image: string;
  description: string;
}

export interface FooterItemProps {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

export interface PricingCardProps {
  title: string;
  icon: string;
  subtitle: string;
  priceMonthly: string;
  priceYearly: string;
  description: string;
  includedFeatures: string[];
  notIncludedFeatures?: string[];
  button: string;
  badge?: string;
  isYearly?: boolean;
}

export interface TestimonialsCardProps {
  title: string;
  testimonial: string;
  avatarUrl: string;
  name: string;
  position: string;
}
