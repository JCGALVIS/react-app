import { Route } from "../../Interfaces/global";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const router: Route[] = [
  {
    name: "Lazy 1",
    path: "lazy1",
    to: "lazy1",
    Component: LazyPage1,
  },
  {
    name: "Lazy 2",
    path: "lazy2",
    to: "lazy2",
    Component: LazyPage2,
  },
  {
    name: "Lazy 3",
    path: "lazy3",
    to: "lazy3",
    Component: LazyPage3,
  },
];
