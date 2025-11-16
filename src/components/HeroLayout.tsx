import { Outlet } from "react-router";
import Navbar from "./Navbar";

const HeroLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HeroLayout;
