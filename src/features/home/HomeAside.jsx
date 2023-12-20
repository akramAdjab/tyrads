import styled from "styled-components";

import Container from "../../ui/Container";
import ExpansesIncome from "../stats/ExpansesIncome";
import LatestSpending from "../stats/LatestSpending";
import Premium from "../../ui/Premium";

const StyledHomeAside = styled(Container)`
  background-color: var(--color-grey-50);

  display: flex;
  flex-direction: column;
  gap: var(--space-7);
`;

function HomeAside() {
  return (
    <StyledHomeAside>
      <ExpansesIncome />
      <LatestSpending />
      <Premium />
    </StyledHomeAside>
  );
}

export default HomeAside;
