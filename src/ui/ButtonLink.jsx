import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const ButtonLink = styled(NavLink)`
  ${(props) =>
    props.$type === "button" &&
    css`
      width: var(--space-9);
      height: var(--space-9);
      border-radius: 50%;

      display: grid;
      place-items: center;

      & svg {
        width: var(--space-6);
        height: var(--space-6);
      }
    `}

  &:hover {
    color: var(--color-grey-50);
    background-color: var(--color-primary-600);
  }
`;

ButtonLink.defaultProps = {
  $type: "button",
};

export default ButtonLink;
