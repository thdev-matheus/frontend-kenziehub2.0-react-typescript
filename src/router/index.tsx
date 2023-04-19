import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/register",
    element: (
      <div>
        <h1>Registro</h1>
      </div>
    ),
  },

  {
    path: "/dashboard",
    element: (
      <div>
        <h1>Dashboard</h1>
      </div>
    ),
  },
]);
