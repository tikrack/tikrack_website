import { layout, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  layout("./config/RouteChangeConfig.tsx", [route("/", "routes/index.tsx")]),
] satisfies RouteConfig;
