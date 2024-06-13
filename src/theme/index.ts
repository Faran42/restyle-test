import { createTheme } from "@shopify/restyle";

import { colors } from "./colors";
import { spacing } from "./spacing";
// import { textVariants } from "./textVariants";
//import { buttonVariants } from "./buttonVariants";
import { borderRadii } from "./borderRadii";

const theme = createTheme({
  colors,
  spacing,
  borderRadii,
  textVariants: {
    defaults: {},
    secondary: {},
  },
  //textVariants,
  //buttonVariants
});

type ThemeProps = typeof theme;
type ThemeColors = keyof ThemeProps["colors"];

export { theme, ThemeProps, ThemeColors };
