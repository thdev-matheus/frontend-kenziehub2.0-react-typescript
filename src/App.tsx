import { RouterProvider } from "react-router-dom";
import { routes } from "./router";

export const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};
