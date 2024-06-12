import { MaterialIcons } from "@expo/vector-icons";
import { ThemeProps } from "../theme";
import { createBox, createText, useTheme } from "@shopify/restyle";

type Props = {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  size: number;
};

export function Item({ title, icon, size }: Props) {
  const Box = createBox<ThemeProps>();
  const Text = createText<ThemeProps>();
  const theme = useTheme<ThemeProps>();

  return (
    <Box flexDirection="row" alignItems="center" gap="s">
      <MaterialIcons
        name={icon}
        size={size}
        color={theme?.colors?.primary_700}
      />
      <Text variant="body">{title}</Text>
    </Box>
  );
}
