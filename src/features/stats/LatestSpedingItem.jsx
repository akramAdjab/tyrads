import styled from "styled-components";
import Row from "../../ui/Row";
import Avatar from "../../ui/Avatar";

const StyledRow = styled(Row)`
  padding-bottom: var(--space-5);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-300);
  }
`;

function LatestSpedingItem({ item }) {
  const { name, date } = item;

  return (
    <StyledRow>
      <Row $align="center">
        <Avatar
          $width={14}
          src="/shop.webp"
          alt="Shopping app on mobile with bag image"
        />

        <Row $direction="column" $gap={1}>
          <p className="text-dark text-semibold">{name}</p>
          <p className="text-small text-light">{date}</p>
        </Row>
      </Row>
    </StyledRow>
  );
}

export default LatestSpedingItem;
