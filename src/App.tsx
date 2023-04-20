import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./styles/Theme";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};
