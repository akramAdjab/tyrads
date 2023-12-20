import styled from "styled-components";

import HomeMain from "../features/home/HomeMain";
import HomeAside from "../features/home/HomeAside";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 2.9fr 1fr;
`;

function Home() {
  return (
    <StyledHome $justify="space-between" $gap={7}>
      <HomeMain />
      <HomeAside />
    </StyledHome>
  );
}

export default Home;
