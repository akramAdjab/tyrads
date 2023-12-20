import { Outlet } from "react-router-dom";
import styled from "styled-components";

import SideBar from "./SideBar";

const StyledAppLayout = styled.div`
  /* TEMP */
  min-height: 100dvh;

  display: grid;
  grid-template-columns: auto 1fr;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <SideBar />
      <Outlet />
    </StyledAppLayout>
  );
}

export default AppLayout;
