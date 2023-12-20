import { useState } from "react";
import { FiMoreVertical, FiPlus } from "react-icons/fi";
import styled from "styled-components";

import Row from "../../ui/Row";
import Button from "../../ui/Button";

const StyledRow = styled(Row)`
  margin-top: var(--space-10);
`;

const ShoppingItems = styled.div`
  margin-top: var(--space-1);

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-1);
`;

const ShoppingButtons = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Item = styled(Row)`
  padding: var(--space-3);
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-100);

  & p {
    white-space: nowrap;
  }
`;

function ShoppingList() {
  const [list, setList] = useState([
    { name: "MacBook", checked: true },
    { name: "Bicycle", checked: false },
    { name: "Motorcycle", checked: false },
    { name: "iPhone 14 Pro Max", checked: true },
  ]);

  const totalItems = list.length;
  const checkedItems = list.slice().filter((item) => item.checked).length;

  function handleChange(item) {
    setList(
      list.slice().map((el) => {
        if (el.name === item.name) {
          el.checked = !el.checked;
        }

        return el;
      })
    );
  }

  return (
    <StyledRow $direction="column">
      <Row $align="center" $justify="space-between">
        <p className="text-semibold">
          <span className="text-light">
            {checkedItems}/{totalItems}
          </span>{" "}
          <span className="text-dark">Shopping list</span>
        </p>

        <ShoppingButtons $variation="simple" $size="xsmall">
          <FiPlus />
          <span>Add an item</span>
        </ShoppingButtons>
      </Row>

      <ShoppingItems>
        {list.map((item, i) => (
          <Item $align="center" $justify="space-between" key={i}>
            <Row $align="center">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item)}
              />
              <p>{item.name}</p>
            </Row>

            <ShoppingButtons $variation="simple" $size="xsmall">
              <FiMoreVertical />
            </ShoppingButtons>
          </Item>
        ))}
      </ShoppingItems>
    </StyledRow>
  );
}

export default ShoppingList;
