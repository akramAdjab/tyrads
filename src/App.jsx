import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobaStyles from "./styles/GlobalStyles";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import Clock from "./pages/Clock";
import Users from "./pages/Users";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import User from "./pages/User";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <GlobaStyles />

      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/clock" element={<Clock />} />
            <Route path="/users" element={<Users />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/user" element={<User />} />
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
