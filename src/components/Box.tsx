import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from "@shopify/restyle";
import {
  TouchableOpacityProps as RNTouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import { ThemeProps } from "../theme";
import { ComponentProps } from "react";

export const Box = createBox<ThemeProps>();

export type BoxProps = ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<ThemeProps> &
  SpacingProps<ThemeProps> &
  LayoutProps<ThemeProps> &
  BorderProps<ThemeProps> &
  SpacingShorthandProps<ThemeProps> &
  RNTouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  ThemeProps
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity
);
