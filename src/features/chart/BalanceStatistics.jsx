import { FiArrowUpCircle, FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

import Row from "../../ui/Row";
import Box from "../../ui/Box";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import BalanceBarChart from "./BalanceBarChart";
import BalanceLineChart from "./BalanceLineChart";

const StyledBox = styled(Box)`
  & img {
    max-width: 5.6rem;
  }

  & h2 {
    margin-bottom: var(--space-6);
    letter-spacing: -1.5px;
  }

  & .balance__details {
    margin-bottom: var(--space-5);
    padding-bottom: var(--space-3);
    border-bottom: 1px solid var(--color-grey-300);
  }

  & .balance__line-chart-info {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  & .text-light {
    margin-top: var(--space-6);
  }

  & .balance__chart {
    flex: 1;
  }
`;

const StyledRow = styled(Row)`
  margin-bottom: var(--space-5);
`;

const FilterButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: var(--space-1);
`;

function BalanceStatistics() {
  return (
    <StyledBox $width={60}>
      <StyledRow $align="center" $justify="space-between">
        <Heading as="h4">Balance statistics</Heading>

        <FilterButton $variation="tertiary">
          <span>Filter</span>
          <FiChevronDown />
        </FilterButton>
      </StyledRow>

      <Row $gap={0}>
        <div>
          <Heading as="h2">$564</Heading>

          <Row $align="center" className="balance__details">
            <img src="/coins.webp" alt="Gold coins image" />
            <p>Your total balance</p>
          </Row>

          <Row $align="center" $gap={2}>
            <BalanceLineChart />
            <p className="balance__line-chart-info">
              <FiArrowUpCircle /> 6%
            </p>
          </Row>

          <p className="text-light">Always see your earnings updates</p>
        </div>

        <div className="balance__chart">
          <BalanceBarChart />
        </div>
      </Row>
    </StyledBox>
  );
}

export default BalanceStatistics;
