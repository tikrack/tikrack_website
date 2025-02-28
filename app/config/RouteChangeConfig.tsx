import { Outlet } from "react-router";
import RouteChangeService from "~/services/RouteChangeService";

const RouteChangeConfig = () => {
  return (
    <>
      <RouteChangeService />
      <Outlet />
    </>
  );
};

export default RouteChangeConfig;
