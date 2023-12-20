import { FiMoreVertical } from "react-icons/fi";

import Button from "../../ui/Button";
import Row from "../../ui/Row";
import styled from "styled-components";
import Avatar from "../../ui/Avatar";

const StyledRow = styled(Row)`
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-grey-200);
`;

function TransactionItem({ item }) {
  const { image, name, date, price } = item;

  return (
    <StyledRow $align="center" $justify="space-between">
      <Row $align="center" $gap={4}>
        <Avatar $width={10} src={image} alt="Users image" />
        <Row $direction="column" $gap={1}>
          <p className="text-semibold text-dark">{name}</p>
          <p className="text-light">{date}</p>
        </Row>
      </Row>

      <Row $align="center" $justify="flex-end" $gap={4}>
        <p className="text-semibold text-dark">{price}</p>
        <Button $variation="simple" $size="xsmall">
          <FiMoreVertical />
        </Button>
      </Row>
    </StyledRow>
  );
}

export default TransactionItem;
