import styled, { css } from "styled-components";

const Heading = styled.h1`
  color: var(--color-grey-950);

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: var(--text-9);
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: var(--text-7);
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: var(--text-4);
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: var(--text-3);
      /* font-weight: var(--weight-3); */
    `}

  /* ${(props) =>
    (props.as === "h1" || props.as === "h2" || props.as === "h3") && css``} */
    font-weight: var(--weight-4);

  ${(props) =>
    props.color === "light" &&
    css`
      color: var(--color-grey-50);
    `}
`;

export default Heading;
