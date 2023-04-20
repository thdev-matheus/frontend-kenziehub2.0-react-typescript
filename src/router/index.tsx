import { createBrowserRouter } from "react-router-dom";
import * as P from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <P.LoginPage />,
  },

  {
    path: "/login",
    element: <P.LoginPage />,
  },

  {
    path: "/register",
    element: <P.RegisterPage />,
  },

  {
    path: "/dashboard",
    element: <P.DashboardPage />,
  },
]);
