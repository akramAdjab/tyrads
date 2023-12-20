import styled from "styled-components";

const StyledLogo = styled.h2`
  color: var(--color-grey-950);
  font-size: var(--text-6);
  font-weight: var(--weight-4);
`;

function Logo() {
  return <StyledLogo>S.</StyledLogo>;
}

export default Logo;
