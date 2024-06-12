import React from "react";
import { Item } from "../components/Item";
import { Button } from "../components/Button";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../theme";

export function Home() {
  const Box = createBox<ThemeProps>();
  const Text = createText<ThemeProps>();
  return (
    <Box
      flex={1}
      bg={"primary_800"}
      justifyContent="flex-start"
      alignItems="center"
      p="m"
      pt={"2xl"}>
      <Box width="100%" bg="white" borderRadius={10} p="m">
        <Text variant="title">É agora capitão?</Text>
        <Box gap="m" borderTopWidth={1} borderColor="gray" pt="xl">
          <Item icon="lock-clock" title="Aguarde 72h, patriota." size={24} />
          <Item icon="local-shipping" title="Força caminhoneiros!." size={24} />
          <Item
            icon="credit-card"
            title="Mande pix acima de R$ 99,90."
            size={24}
          />
        </Box>

        <Box flexDirection="row" mt="l" gap="m">
          <Button title="É fake news?"/>
          <Button title="Selva!" />
        </Box>
      </Box>
    </Box>
  );
}
