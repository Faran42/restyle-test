import {
  SpacingProps,
  VariantProps,
  createBox,
  createRestyleComponent,
  createRestyleFunction,
  createText,
  createVariant,
  spacing,
} from "@shopify/restyle";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ThemeProps } from "../theme";

const Text = createText();
const Box = createBox();

type BoxCustomProps = SpacingProps<ThemeProps> &
  VariantProps<ThemeProps, "buttonVariants">;

const BoxVariant = createRestyleComponent<BoxCustomProps, ThemeProps>([
  spacing,
  // createVariant({ themeKey: 'buttonVariants' }),
]);

type Props = BoxCustomProps & {
  title: string;
};

export function Button(props: Props) {
  return (
    <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.7}>
      <BoxVariant {...props}>
        <Text>{props.title}</Text>
      </BoxVariant>
    </TouchableOpacity>
  );
}
