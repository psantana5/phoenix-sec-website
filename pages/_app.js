import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
// Add Google Analytics
import Script from 'next/script';
// Add custom event tracking
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// Add this import
import CookieConsent from '../components/CookieConsent';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Track page views and user navigation
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Track page views (fixed the "nm" typo)
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });

      // Custom event for Vercel Analytics
      if (typeof window !== 'undefined' && window.va) {
        window.va('event', {
          name: 'page_view',
          data: { path: url },
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', process.env.NEXT_PUBLIC_GA_ID);
          `,
        }}
      />

      <Component {...pageProps} />
      <Analytics
        mode="production"
        debug={process.env.NODE_ENV === 'development'}
      />
      <SpeedInsights />
      <CookieConsent />
    </>
  );
}

export default MyApp;