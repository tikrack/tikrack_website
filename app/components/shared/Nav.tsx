import { NavLink } from "react-router";

const Nav = () => {
  return (
    <>
      <ul className={"md:block hidden"}>
        <li>
          <NavLink to={"/"} className={"text-[17px]"}>
            Home
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
