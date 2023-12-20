import { RiVisaLine } from "react-icons/ri";

import Box from "./Box";
import Heading from "./Heading";
import Row from "./Row";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background-image: url("/visa-card-bg.webp");
  background-size: cover;
  background-position: center;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--color-grey-950);
    opacity: 0.2;

    display: block;
    position: absolute;
    inset: 0;
  }

  & * {
    z-index: 1;
  }

  & h3 {
    font-size: var(--text-6);
  }

  & svg {
    font-size: var(--text-7);
  }
`;

const StyledRow = styled(Row)`
  color: var(--color-grey-100);
  margin-top: auto;
`;

function VisaCard() {
  return (
    <StyledBox $flex={1} $bg="dark">
      <Row $align="center" $justify="space-between">
        <Heading as="h3" color="light">
          S.
        </Heading>

        <RiVisaLine />
      </Row>

      <StyledRow $align="flex-end" $justify="space-between">
        <Row $direction="column" $gap={2}>
          <p>**** 9838</p>
          <p>John Demon</p>
        </Row>

        <p>08/12</p>
      </StyledRow>
    </StyledBox>
  );
}

export default VisaCard;
