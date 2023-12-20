import { FiArrowRight, FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";

import Box from "../../ui/Box";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import LatestSpedingItem from "./LatestSpedingItem";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`;

const ViewAllBtn = styled(Button)`
  color: var(--color-primary-600);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &:hover {
    color: var(--color-primary-500);
    gap: 8px;
  }
`;

const spending = [
  {
    image: "",
    name: "Online store",
    date: "May 30, 2023 at 08:00 pm",
  },
  {
    image: "",
    name: "Pay the hospital",
    date: "May 28, 2023 at 10:27 pm",
  },
  {
    image: "",
    name: "Tickets",
    date: "May 10, 2023 at 12:09 pm",
  },
];

function LatestSpending() {
  return (
    <StyledBox $border="with">
      <Row $align="center" $justify="space-between">
        <Heading as="h3">Latest spending</Heading>
        <Button $variation="simple" $size="xsmall">
          <FiMoreVertical />
        </Button>
      </Row>

      <Row $direction="column">
        {spending.map((item, i) => (
          <LatestSpedingItem item={item} key={i} />
        ))}
      </Row>

      <ViewAllBtn $variation="simple" $size="xsmall">
        <span>View all</span> <FiArrowRight />
      </ViewAllBtn>
    </StyledBox>
  );
}

export default LatestSpending;
