import { NavLink } from "react-router";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Nav;
