import styled, { css } from "styled-components";

const Box = styled.div`
  padding: var(--space-5);
  border-radius: var(--border-radius-lg);

  ${(props) =>
    props.$border === "with" &&
    css`
      border: 1px solid var(--color-grey-300);
    `}

  ${(props) =>
    props.$space === "without" &&
    css`
      padding: 0;
    `}

  ${(props) =>
    props.$bg === "dark"
      ? css`
          color: var(--color-grey-50);
          background-color: var(--color-primary-600);
        `
      : css`
          background-color: var(--color-grey-50);
        `}

  ${(props) =>
    props.$width &&
    css`
      flex-basis: ${props.$width}%;
    `}

  ${(props) =>
    props.$flex &&
    css`
      flex: ${props.$flex};
    `}
`;

export default Box;
