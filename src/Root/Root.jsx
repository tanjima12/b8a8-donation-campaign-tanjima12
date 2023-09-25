import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="ml-8 mr-8">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
