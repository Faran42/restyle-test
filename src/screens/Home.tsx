import React from "react";
import { Item } from "../components/Item";
import { Button } from "../components/Button/Button";
import { createBox, createText } from "@shopify/restyle";
import { ThemeProps } from "../theme";

import { Text } from "../components/Text";
import { Box } from "../components/Box";

import { Text as RNText, ScrollView } from "react-native";

export function Home() {
  // const Box = createBox<ThemeProps>();
  //const Text = createText<ThemeProps>();
  return (
    <ScrollView>
      <Box
        flex={1}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
        marginTop="xl"
        paddingVertical="xl"
      >
        <Text preset="headingLarge" color="primary_800" marginBottom="l">
          Heading Large
        </Text>
        <Text preset="headingMedium" color="primary_800" marginBottom="l">
          Heading Medium
        </Text>
        <Text preset="headingSmall" color="primary_800" marginBottom="l">
          Heading Small
        </Text>
        <Text preset="paragraphLarge" color="primary_800" marginBottom="l">
          Paragraph Large
        </Text>
        <Text preset="paragraphMedium" color="primary_800" marginBottom="l">
          Paragraph Medium
        </Text>
        <Text preset="paragraphSmall" color="primary_800" marginBottom="l">
          Paragraph Small
        </Text>
        <Text preset="paragraphCaption" color="primary_800" marginBottom="l">
          Paragraph Caption
        </Text>
        <Text
          preset="paragraphCaptionSmall"
          color="primary_800"
          marginBottom="l"
        >
          Paragraph Caption Small
        </Text>
        <Button preset="primary" title="Button Primary" marginBottom="m" />
        <Button preset="outline" title="Button Outline" marginBottom="m" />
        <Button
          preset="primary"
          title="Button Primary Disabled"
          marginBottom="m"
          disabled
        />
        <Button
          preset="outline"
          title="Button Outline Disabled"
          disabled
          mb="m"
        />
        <Button
          preset="primary"
          title="Button Loading"
          loading
          width="40%"
          mb="m"
        />
        <Button
          preset="outline"
          title="Button Outline Disabled"
          loading
          width="40%"
        />
      </Box>
    </ScrollView>
    // <Box
    //   flex={1}
    //   bg={"primary_800"}
    //   justifyContent="flex-start"
    //   alignItems="center"
    //   p="m"
    //   pt={"2xl"}>
    //   <Box width="100%" bg="white" borderRadius={10} p="m">
    //     <Text variant="title">É agora capitão?</Text>
    //     <Box gap="m" borderTopWidth={1} borderColor="gray" pt="xl">
    //       <Item icon="lock-clock" title="Aguarde 72h, patriota." size={24} />
    //       <Item icon="local-shipping" title="Força caminhoneiros!." size={24} />
    //       <Item
    //         icon="credit-card"
    //         title="Mande pix acima de R$ 99,90."
    //         size={24}
    //       />
    //     </Box>

    //     <Box flexDirection="row" mt="l" gap="m">
    //       <Button title="É fake news?"/>
    //       <Button title="Selva!" />
    //     </Box>
    //   </Box>
    // </Box>
  );
}
