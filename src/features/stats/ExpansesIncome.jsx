import styled from "styled-components";

import Box from "../../ui/Box";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import ExpansesIncomeItem from "./ExpansesIncomeItem";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`;

const Divider = styled(Row)`
  flex-basis: 1px;
  border-left: 1px solid var(--color-grey-300);

  position: relative;

  & p {
    padding: var(--space-1);
    text-transform: uppercase;
    background-color: var(--color-grey-50);

    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

const Bars = styled(Row)`
  & div {
    height: var(--space-6);
    border-radius: var(--border-radius-sm);
  }

  & div:first-child {
    background-color: var(--color-primary-600);
  }
  & div:last-child {
    background-color: var(--color-tertiary-400);
  }
`;

const expansesAndIncome = [
  {
    type: "expanse",
    percentage: 75,
    rate: 5.653,
  },
  {
    type: "income",
    percentage: 40,
    rate: 2.656,
  },
];

function ExpansesIncome() {
  const expanse = expansesAndIncome
    .slice()
    .find((item) => item.type === "expanse");
  const income = expansesAndIncome
    .slice()
    .find((item) => item.type === "income");

  return (
    <StyledBox $border="with">
      <Heading as="h3">Expanses & Income</Heading>

      <Row $justify="space-between">
        <ExpansesIncomeItem item={expanse} />
        <Divider>
          <p>vs</p>
        </Divider>
        <ExpansesIncomeItem item={income} />
      </Row>

      <Bars $gap={1}>
        <div style={{ flexBasis: `${expanse.percentage}%` }}></div>
        <div style={{ flex: `1` }}></div>
      </Bars>
    </StyledBox>
  );
}

export default ExpansesIncome;
