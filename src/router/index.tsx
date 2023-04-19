import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";

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
    element: <RegisterPage />,
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
