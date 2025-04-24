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
