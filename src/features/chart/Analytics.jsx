import { FiMoreVertical } from "react-icons/fi";
import styled from "styled-components";

import Box from "../../ui/Box";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AnalyticsCircleChart from "./AnalyticsCircleChart";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

function Analytics() {
  return (
    <StyledBox $flex={1}>
      <Row $align="center" $justify="space-between">
        <Heading as="h4">Analytics</Heading>
        <Button $variation="simple" $size="xsmall">
          <FiMoreVertical />
        </Button>
      </Row>

      <AnalyticsCircleChart />
    </StyledBox>
  );
}

export default Analytics;
