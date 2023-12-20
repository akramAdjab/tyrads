import styled from "styled-components";
import Box from "./Box";
import Heading from "./Heading";
import Button from "./Button";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;

  & img {
    max-width: 12rem;
    aspect-ratio: 1;
    margin: var(--space-8) 0 var(--space-2);
  }

  & p:last-of-type {
    width: 90%;
    margin: var(--space-2) 0 var(--space-8);
    font-weight: var(--weight-2);
    line-height: 1.5;
  }
`;

function Premium() {
  return (
    <StyledBox $border="with">
      <p className="text-center">Go to premium</p>
      <img src="/crown.webp" alt="Crown" />
      <Heading as="h3">Need more features?</Heading>
      <p className="text-light">
        Update your account to premium to get more features.
      </p>
      <Button $size="large">Get now</Button>
    </StyledBox>
  );
}

export default Premium;
