import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_TRACKING_ID = "G-WLS509JKBY"; // Tu ID de seguimiento

const sendPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    sendPageView(location.pathname);
  }, [location]);

  return null;
};

export default Analytics;


