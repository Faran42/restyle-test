import { ThemeColors } from "../../theme";
import { TouchableOpacityBoxProps } from "../Box";
import { TextProps } from "../Text";

import { ButtonPreset } from "./Button";

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: {
    color: ThemeColors;
    textProps?: TextProps;
  };
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: "primary_800",
      },
      content: { color: "white" },
    },
    disabled: {
      container: {
        backgroundColor: "gray",
      },
      content: { color: "white" },
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: "primary_700",
      },
      content: { color: "primary_700" },
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: "gray",
      },
      content: { color: "gray" },
    },
  },
};
