import { lazy } from "react";

const routes = [
  {
    path: "/",
    index: true,
    exact: true,
    element: lazy(() => import("./modules/home/page")),
  },
  {
    path: "/items",
    exact: false,
    element: lazy(() => import("./modules/search/page")),
  },
  {
    path: "/items/:id",
    exact: true,
    element: lazy(() => import("./modules/product/page")),
  },
  {
    path: "*",
    exact: true,
    element: lazy(() => import("./components/NotFoundPage")),
  },
];

export default routes;
