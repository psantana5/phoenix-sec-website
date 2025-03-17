// Custom analytics events for tracking user behavior

export const trackEvent = (eventName, properties = {}) => {
  // Send to Vercel Analytics
  if (typeof window !== 'undefined' && window.va) {
    window.va('event', {
      name: eventName,
      data: properties,
    });
  }
};

// Track specific user actions
export const trackButtonClick = (buttonName, pageLocation) => {
  trackEvent('button_click', { button: buttonName, location: pageLocation });
};

export const trackFormSubmission = (formName, success = true) => {
  trackEvent('form_submission', { form: formName, success });
};

export const trackDownload = (fileName) => {
  trackEvent('file_download', { file: fileName });
};

export const trackExternalLink = (url, linkText) => {
  trackEvent('external_link_click', { url, text: linkText });
};

export const trackFeatureUsage = (featureName) => {
  trackEvent('feature_usage', { feature: featureName });
};

export const trackSearch = (searchTerm, resultsCount) => {
  trackEvent('search', { term: searchTerm, results: resultsCount });
};