import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar justify-between bg-base-100 shadow-xl">
      <div>
        <img src="/public/picture/Logo (1).png"></img>
      </div>
      <div>
        <ul className="text-black rounded-box flex gap-5">
          <li>
            <NavLink className="hover:text-red-500 text-xl" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-red-500 text-xl" to="/donation">
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-red-500 text-xl" to="/statis">
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
