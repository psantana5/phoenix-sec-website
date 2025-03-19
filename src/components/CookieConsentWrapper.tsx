'use client';

import dynamic from 'next/dynamic';

// Dynamically import the CookieConsent component with ssr: false
const CookieConsent = dynamic(() => import('../../components/CookieConsent'), {
  ssr: false,
});

export default function CookieConsentWrapper() {
  return <CookieConsent />;
}