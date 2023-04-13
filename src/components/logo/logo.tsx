import { Box, Content, ContentText, Imagem, Text } from "./style";

export default function Logo() {
  return (
    <ContentText>
      <Box>
        <Content>
          <Imagem src="./assets/rk.png"></Imagem>
        </Content>
      </Box>
      <Text>Renata Karolina</Text>
    </ContentText>
  );
}
