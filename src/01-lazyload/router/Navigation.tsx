import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { router } from "./router";

export const Navigation = () => {
  return (
    <div>
      <ul>
        {router.map(({ to, name }) => (
          <li key={to}>
            <NavLink to={to}>{name}</NavLink>
          </li>
        ))}
      </ul>

      <Routes>
        {router.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        {/* <Route path="/*" element={<div>Not Found</div>} /> */}
        <Route path="/*" element={<Navigate replace to={router[0].to} />} />
      </Routes>
    </div>
  );
};
