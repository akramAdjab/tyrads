import { TiMessages } from "react-icons/ti";
import styled from "styled-components";

import Logo from "./Logo";
import Row from "./Row";
import Navigation from "./Navigation";
import UserAndLogout from "./UserAndLogout";

const StyledSideBar = styled.aside`
  height: 100dvh;
  padding: var(--space-7);
  background-color: var(--color-grey-50);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;
`;

const StyledButton = styled.button`
  color: var(--color-tertiary-900);
  padding: var(--space-2);
  font-size: var(--text-4);
  border-radius: 50%;
  background-color: var(--color-tertiary-200);

  &:hover {
    color: var(--color-tertiary-950);
    background-color: var(--color-tertiary-300);
  }
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Row $direction="column" $align="center" $gap={13}>
        <Logo />
        <StyledButton>
          <TiMessages />
        </StyledButton>
      </Row>
      <Navigation />
      <UserAndLogout />
    </StyledSideBar>
  );
}

export default SideBar;
