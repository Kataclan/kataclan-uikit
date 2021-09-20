import { DefaultTheme } from "styled-components";
import { dark as darkNav } from "../components/NavBar/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,
  nav: darkNav,
};

export default darkTheme;
