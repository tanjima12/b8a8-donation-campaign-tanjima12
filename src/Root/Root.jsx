import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="lg:ml-8 lg:mr-8">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Root;
