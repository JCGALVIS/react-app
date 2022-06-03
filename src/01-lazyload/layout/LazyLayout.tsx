import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";
import { Navigation } from "../router/Navigation";

const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <Navigation />
    </div>
  );
};

export default LazyLayout;
