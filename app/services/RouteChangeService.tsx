import { useEffect } from "react";
import { useLocation } from "react-router";
// @ts-ignore
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const RouteChangeService = () => {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
};

export default RouteChangeService;
