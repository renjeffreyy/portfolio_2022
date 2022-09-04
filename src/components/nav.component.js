import * as React from "react";
import { Link } from "gatsby";

// icons
import { FaPaw } from "@react-icons/all-files/fa/FaPaw";
import { FaUser } from "@react-icons/all-files/fa/FaUser";

export const Nav = () => {
  return (
    <ul>
      <NavItem link="/">
        <FaPaw />
        About Me
      </NavItem>
      <NavItem link="/portfolio">
        <FaUser />
        Portfolio
      </NavItem>
    </ul>
  );
};

const NavItem = ({link, children }) => {
  return (
    <li className="text-text_secondary  mt-4 block">
      <span className="hover:text-secondary">
        <Link className="hover:text-secondary flex items-center gap-2" to={link}>
          {children}
        </Link>
      </span>
    </li>
  );
};
