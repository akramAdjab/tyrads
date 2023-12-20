import styled, { css } from "styled-components";

const Avatar = styled.img`
  aspect-ratio: 1;
  border-radius: 50%;

  ${(props) =>
    props.$width &&
    css`
      width: var(--space-${props.$width});
    `}
`;

export default Avatar;
