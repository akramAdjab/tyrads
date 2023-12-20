import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Avatar from "./Avatar";

const StyledUserAndLogout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: var(--space-10);
  height: var(--space-10);
  padding: 6px;
  border-radius: 50%;
  background-color: var(--color-grey-100);

  display: grid;
  place-items: center;

  &:first-of-type {
    padding: 2px;
    z-index: 1;
  }

  &:last-of-type {
    margin-top: -1rem;

    & * {
      transform: translateY(0.15rem);
    }

    &:hover {
      color: var(--color-primary-600);
    }
  }
`;

function UserAndLogout() {
  return (
    <StyledUserAndLogout>
      <StyledLink to="user">
        <Avatar $width={9} src="/current-user.webp" alt="John Demon image" />
      </StyledLink>

      <StyledLink to="login">
        <FiLogOut />
      </StyledLink>
    </StyledUserAndLogout>
  );
}

export default UserAndLogout;
