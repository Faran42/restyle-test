import React from "react";
// import {
//   SpacingProps,
//   VariantProps,
//   createBox,
//   createRestyleComponent,
//   createRestyleFunction,
//   createText,
//   createVariant,
//   spacing,
//   BackgroundColorProps,
// } from "@shopify/restyle";
import { ActivityIndicator, TouchableOpacity } from "react-native";
// import { ThemeProps } from "../../theme";

import {
  // Box,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from "../Box";
import { Text } from "../Text";
import { buttonPresets } from "./buttonPresets";

export type ButtonPreset = "primary" | "outline";

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = "primary",
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? "disabled" : "default"];

  return (
    <TouchableOpacityBox
      height={50}
      justifyContent="center"
      alignItems="center"
      paddingHorizontal="m"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}
    >
      {loading ? (
        <ActivityIndicator color={buttonPreset.content.color} />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          color={buttonPreset.content.color}
          {...buttonPreset.content.textProps}
        >
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

// const Text = createText();
// const _Box = createBox<ThemeProps>();

// type BoxCustomProps = SpacingProps<ThemeProps> &
//   VariantProps<ThemeProps, "buttonVariants">;

// const BoxVariant = createRestyleComponent<BoxCustomProps, ThemeProps>([
//   spacing,
//   //createVariant({ themeKey: "buttonVariants" }),
// ]);

// type Props = BoxCustomProps & {
//   title: string;
// };

// export function Button(props: Props) {
//   return (
//     <Box>
//       <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.7}>
//         <BoxVariant {...props}>
//           <Text>{props.title}</Text>
//         </BoxVariant>
//       </TouchableOpacity>
//     </Box>
//   );
// }
