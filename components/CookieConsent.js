'use client';

import { useState, useEffect } from 'react';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

const CookieConsent = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = getCookie('cookie-consent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptAll = () => {
        setCookie('cookie-consent', 'all', { maxAge: 60 * 60 * 24 * 365 });
        setCookie('analytics-consent', 'yes', { maxAge: 60 * 60 * 24 * 365 });
        setShowBanner(false);
        window.location.reload();
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
        <div 
            role="dialog"
            aria-labelledby="cookie-title"
            aria-describedby="cookie-description"
            className={`
                fixed bottom-4 left-4 right-4 
                bg-gray-100/10
                backdrop-blur-lg
                border border-gray-200/10 
                p-6 
                rounded-xl
                shadow-2xl
                z-50
                ${showBanner ? 'block' : 'hidden'}
            `}
        >
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                    <div className="mb-6 md:mb-0 max-w-2xl">
                        <h2 
                            id="cookie-title"
                            className="text-xl font-bold mb-3 terminal-text bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                        >
                            Customize Your Privacy Settings
                        </h2>
                        <p 
                            id="cookie-description"
                            className="text-sm text-gray-300/90 leading-relaxed"
                        >
                            To enhance your browsing experience on Phoenix Security, we use essential and optional cookies. 
                            Essential cookies ensure basic functionality, while analytics cookies help us improve our services. 
                            Your privacy matters - choose your preference below.
                        </p>
                    </div>
                    <div 
                        className="flex flex-col sm:flex-row gap-4"
                        role="group"
                        aria-label="Cookie consent options"
                    >
                        <button
                            onClick={rejectAll}
                            className="px-6 py-2.5 text-sm bg-dark-300/50 hover:bg-dark-500/50 rounded-lg border border-primary/20 transition-all duration-300 hover:scale-105"
                            aria-label="Reject all cookies"
                        >
                            Reject All
                        </button>
                        <button
                            onClick={acceptNecessary}
                            className="px-6 py-2.5 text-sm bg-dark-300/50 hover:bg-dark-500/50 rounded-lg border border-secondary/20 transition-all duration-300 hover:scale-105"
                            aria-label="Accept only necessary cookies"
                        >
                            Necessary Only
                        </button>
                        <button
                            onClick={acceptAll}
                            className="px-6 py-2.5 text-sm neon-button hover:bg-primary/90 rounded-lg transition-all duration-300 hover:scale-105"
                            aria-label="Accept all cookies"
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