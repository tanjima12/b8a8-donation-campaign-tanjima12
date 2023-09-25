import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Search from "../Components/Search/Search";

const Root = () => {
  return (
    <div>
      <div className="ml-8 mr-8">
        <Navbar></Navbar>
      </div>
      <div>
        <Search></Search>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
