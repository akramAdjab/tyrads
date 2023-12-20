import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

import Container from "../../ui/Container";
import MessageLog from "../../ui/MessageLog";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
import BalanceStatistics from "../chart/BalanceStatistics";
import Analytics from "../chart/Analytics";
import VisaCard from "../../ui/VisaCard";
import Box from "../../ui/Box";
import ListItems from "./ListItems";
import Chat from "../chat/Chat";
import LastTransactions from "../transaction/LastTransactions";

const StyledHomeMain = styled(Container)`
  font-size: var(--text-2);

  display: flex;
  flex-direction: column;
  gap: var(--space-7);
`;

const SearchButton = styled(Button)`
  padding: var(--space-4);

  display: grid;
  place-items: center;

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

function HomeMain() {
  return (
    <StyledHomeMain>
      <Row $align="center" $justify="space-between">
        <MessageLog />
        <SearchButton $variation="secondary" $shape="round">
          <FiSearch />
        </SearchButton>
      </Row>

      <Row $gap={7}>
        <BalanceStatistics />
        <VisaCard />
      </Row>

      <Box $space="without" className="side-by-side">
        <ListItems />
        <Chat />
      </Box>

      <Row $gap={7}>
        <LastTransactions />
        <Analytics />
      </Row>
    </StyledHomeMain>
  );
}

export default HomeMain;
