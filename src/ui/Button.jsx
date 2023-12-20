import styled, { css } from "styled-components";

const sizes = {
  xsmall: css`
    padding: 0;
  `,
  small: css`
    padding: var(--space-1);
    font-size: var(--text-1);
    text-transform: uppercase;
    text-align: center;
  `,
  medium: css`
    padding: var(--space-3) var(--space-5);
    font-size: var(--text-2);
  `,
  large: css`
    padding: var(--space-4) var(--space-7);
    font-size: var(--text-3);
  `,
};

const variations = {
  primary: css`
    color: var(--color-grey-50);
    border: 1px solid var(--color-primary-60);
    background-color: var(--color-primary-600);

    &:hover {
      background-color: var(--color-primary-800);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    border: 1px solid var(--color-grey-300);
    background: var(--color-grey-50);

    &:hover {
      background-color: var(--color-grey-100);
    }
  `,
  tertiary: css`
    color: var(--color-grey-600);
    border: 1px solid var(--color-grey-300);
    background: var(--color-grey-100);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  simple: css`
    color: var(--color-grey-950);

    & svg {
      color: inherit !important;
      font-size: var(--text-3) !important;
    }

    &:hover {
      color: var(--color-primary-600);
    }
  `,
  danger: css`
    color: var(--color-grey-50);
    border: 1px solid var(--color-secondary-600);
    background-color: var(--color-secondary-600);

    &:hover {
      background-color: var(--color-secondary-700);
    }
  `,
};

const Button = styled.button`
  font-weight: var(--weight-4);
  border: none;
  border-radius: var(--border-radius-sm);

  ${(props) => variations[props.$variation]}
  ${(props) => sizes[props.$size]}

  ${(props) =>
    props.$shape === "round" &&
    css`
      border-radius: 99rem;
    `}
`;

Button.defaultProps = {
  $variation: "primary",
  $size: "medium",
};

export default Button;
