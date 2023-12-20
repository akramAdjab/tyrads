import {
  TbClockHour9,
  TbSettings,
  TbSmartHome,
  TbWallet,
} from "react-icons/tb";
import { FiBell } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi2";
import styled from "styled-components";

import ButtonLink from "./ButtonLink";

const Nav = styled.nav`
  /* padding: var(--space-1); */
  padding: 6px;
  border-radius: 99rem;
  background-color: var(--color-grey-100);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
`;

function Navigation() {
  return (
    <Nav>
      <ButtonLink to="/">
        <TbSmartHome />
      </ButtonLink>
      <ButtonLink to="/notifications">
        <FiBell />
      </ButtonLink>
      <ButtonLink to="/clock">
        <TbClockHour9 />
      </ButtonLink>
      <ButtonLink to="/users">
        <HiOutlineUsers />
      </ButtonLink>
      <ButtonLink to="/wallet">
        <TbWallet />
      </ButtonLink>
      <ButtonLink to="/settings">
        <TbSettings />
      </ButtonLink>
    </Nav>
  );
}

export default Navigation;
