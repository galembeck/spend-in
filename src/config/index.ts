import { Metadata } from "next";

export const spendInConfig = {
  title: {
    default: "Spend.In | All your business expenses in one place",
    template: `%s | Spend.In`,
  },
  url: "https://spend-in-g.vercel.app",
  description:
    "Your one-stop finnace empower platform. Manage all your business expenses with our supafast app.",
  locale: "en_US", // en_US, de_DE, fr_FR, es_ES, it_IT, pt_PT, ru_RU, zh_CN, ja_JP, ko_KR, pt_BR
  icons: {
    icon: [
      {
        url: "../app/favicon.ico",
        href: "../app/favicon.ico",
      },
    ],
  },
};

export const spendInMetadata: Metadata = {
  metadataBase: new URL(spendInConfig.url),
  title: {
    default: spendInConfig.title.default,
    template: spendInConfig.title.template,
  },
  description: spendInConfig.description,
  openGraph: {
    title: `${spendInConfig.title.default}`,
    description: spendInConfig.description,
    url: spendInConfig.url,
    siteName: `${spendInConfig.title.default}`,
    locale: spendInConfig.locale,
    type: "website",
  },
};
