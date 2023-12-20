import { FiChevronRight } from "react-icons/fi";
import styled from "styled-components";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Calendar from "../../ui/Calendar";
import ShoppingList from "./ShoppingList";

const StyledListItems = styled.div`
  padding: var(--space-5);
  border-right: 1px solid var(--color-grey-200);
  flex: 1;

  & h4 {
    margin-bottom: var(--space-8);
  }

  & svg {
    color: var(--color-grey-400);
    font-size: var(--text-5);
  }
`;

function ListItems() {
  return (
    <StyledListItems>
      <Heading as="h4">List of items to buy</Heading>

      <Row $align="center" $gap={8}>
        <Calendar time="02:00" date="Sat. August 12" />
        <FiChevronRight />
        <Calendar time="05:00" date="Sat. September 12" />
      </Row>

      <ShoppingList />
    </StyledListItems>
  );
}

export default ListItems;
