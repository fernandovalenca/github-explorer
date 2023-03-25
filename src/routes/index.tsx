import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Repository from "../pages/Repository";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "repository/:id",
    element: <Repository />,
  },
]);

const Routes: React.FunctionComponent = () => (
  <RouterProvider router={router} />
);

export default Routes;
