import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
// Import the client component wrapper instead of using dynamic directly
import CookieConsentWrapper from "@/components/CookieConsentWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phoenix Security - Securing the Future, One Exploit at a Time",
  description: "A cutting-edge cybersecurity company specializing in penetration testing, incident response, cloud security, and training.",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "1000x1000",
        type: "image/png"
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <CookieConsentWrapper />
        </ThemeProvider>
        {/* Google Analytics - Only loads if user consented to analytics */}
        <Script
          id="google-analytics-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const consent = document.cookie.split('; ').find(row => row.startsWith('cookie-consent='));
                const analyticsConsent = document.cookie.split('; ').find(row => row.startsWith('analytics-consent='));
                if (consent && consent.includes('all') && analyticsConsent && analyticsConsent.includes('yes')) {
                  const script = document.createElement('script');
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}';
                  script.async = true;
                  document.head.appendChild(script);
                  
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
