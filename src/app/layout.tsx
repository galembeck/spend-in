import { Plus_Jakarta_Sans } from "next/font/google";

import Script from "next/script";
import type { ReactNode } from "react";

import { spendInMetadata } from "@/config";

import "../styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = spendInMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: required by Clarity
          dangerouslySetInnerHTML={{
            __html: `
						  (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s8m43jxmy7")
            `,
          }}
          id="clarity-script"
        />

        {/* <!-- Google Tag Manager --> */}
        <Script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: requite by Google Tag Manager
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WK93RFDX');
						`,
          }}
          id="wdsli-script"
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${jakartaSans.variable} hide-scrollbar antialiased`}
        suppressHydrationWarning
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WK93RFDX"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
            width="0"
          />
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
