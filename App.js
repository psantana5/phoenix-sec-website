import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const sendPageView = (url) => {
  window.gtag("config", "G-WLS509JKBY", { page_path: url });
};

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    sendPageView(location.pathname);
  }, [location]);

  return null;
};

export default Analytics;
