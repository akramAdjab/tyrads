import styled from "styled-components";

import Box from "../../ui/Box";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import TransactionList from "./TransactionList";

const StyledBox = styled(Box)`
  & h4 {
    white-space: nowrap;
    flex: 1;
  }
`;

const Filter = styled(Row)`
  & input {
    display: none;
  }

  & label {
    cursor: pointer;
  }

  & input:checked + label {
    color: var(--color-grey-950);
    border-bottom: 1px solid var(--color-grey-950);
  }
`;

function LastTransactions() {
  return (
    <StyledBox $width={67}>
      <Row $justify="space-between">
        <Heading as="h4">Last transactions</Heading>

        <Filter $gap={5} $justify="flex-end">
          <div role="button">
            <input
              type="radio"
              id="newest"
              name="transactionDate"
              value="newest"
              defaultChecked
            />
            <label htmlFor="newest">Newest</label>
          </div>
          <div role="button">
            <input
              type="radio"
              id="oldest"
              name="transactionDate"
              value="oldest"
            />
            <label htmlFor="oldest">Oldest</label>
          </div>
        </Filter>
      </Row>

      <TransactionList />
    </StyledBox>
  );
}

export default LastTransactions;
