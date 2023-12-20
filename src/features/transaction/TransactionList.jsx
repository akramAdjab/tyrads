import styled from "styled-components";

import Row from "../../ui/Row";
import TransactionItem from "./TransactionItem";

const StyledTransactionList = styled(Row)`
  margin-top: var(--space-8);

  & .avatar {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    background-color: var(--color-primary-600);
  }
`;

const items = [
  {
    image: "/current-user.webp",
    name: "Bassie Cooper",
    date: "02 July, 2023",
    price: "-$3000",
  },
  {
    image: "/other-user.webp",
    name: "Guy Hawkins",
    date: "29 Jun, 2023",
    price: "+$1970",
  },
  {
    image: "/current-user.webp",
    name: "Floyd Miles",
    date: "14 May, 2023",
    price: "-$5208",
  },
  // {
  //   image: "/other-user.webp",
  //   name: "Maria Wilson",
  //   date: "13 May, 2023",
  //   price: "+$23040",
  // },
];

function TransactionList() {
  return (
    <StyledTransactionList $direction="column" $gap={5}>
      {items.map((item, i) => (
        <TransactionItem item={item} key={i} />
      ))}
    </StyledTransactionList>
  );
}

export default TransactionList;
