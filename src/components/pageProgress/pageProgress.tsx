import { Container, LinkButton, PageInProgress } from "./pageProgressStyle";

import { FaArrowLeft } from "react-icons/fa";

export default function PageProgress() {
  return (
    <Container>
      <PageInProgress>
        Hey! 🙋‍♀️ <br /> Page in Progress...
      </PageInProgress>

      <LinkButton href="/">
        <FaArrowLeft color="rgb(130, 92, 168)" fontSize={40} cursor="pointer" />{" "}
        To back!
      </LinkButton>
    </Container>
  );
}
