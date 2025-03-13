import { useState, useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = getCookie('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    setCookie('cookie-consent', 'all', { maxAge: 60 * 60 * 24 * 365 });
    setCookie('analytics-consent', 'yes', { maxAge: 60 * 60 * 24 * 365 });
    setShowBanner(false);
    window.location.reload(); // Reload to activate analytics
  };

  const acceptNecessary = () => {
    setCookie('cookie-consent', 'necessary', { maxAge: 60 * 60 * 24 * 365 });
    setCookie('analytics-consent', 'no', { maxAge: 60 * 60 * 24 * 365 });
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
              By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded"
            >
              Necessary Only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;