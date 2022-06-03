import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
import { Route } from "../Interfaces/global";

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    to: "/lazyLoad/",
    path: "/lazyLoad/*",
    Component: LazyLayout,
    name: "Lazy Layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
