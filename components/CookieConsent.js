'use client';

import { useState, useEffect } from 'react';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

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

    const rejectAll = () => {
        setCookie('cookie-consent', 'none', { maxAge: 60 * 60 * 24 * 365 });
        deleteCookie('analytics-consent');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-dark-400 text-white p-6 z-50 border-t border-primary/20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 max-w-2xl">
                        <h3 className="text-lg font-bold mb-2 terminal-text">Cookie Preferences</h3>
                        <p className="text-sm text-gray-300">
                            We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                            Please select your cookie preferences below.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={rejectAll}
                            className="px-4 py-2 text-sm bg-dark-300 hover:bg-dark-500 rounded border border-primary/20 transition-colors"
                        >
                            Reject All
                        </button>
                        <button
                            onClick={acceptNecessary}
                            className="px-4 py-2 text-sm bg-dark-300 hover:bg-dark-500 rounded border border-secondary/20 transition-colors"
                        >
                            Necessary Only
                        </button>
                        <button
                            onClick={acceptAll}
                            className="px-4 py-2 text-sm neon-button hover:bg-primary/90 transition-all"
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