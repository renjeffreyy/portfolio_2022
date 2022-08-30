import * as React from "react";
import { Link } from "gatsby";
import { faPaw, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = () => {
  return (
    <ul>
      <NavItem link="/" icon={faPaw}>
        About Me
      </NavItem>
      <NavItem link="/portfolio" icon={faLaptopCode}>
        Portfolio
      </NavItem>
    </ul>
  );
};

const NavItem = (props) => {
  const { link, icon } = props;
  return (
    <li className="text-text_secondary  mt-4 block">
      <span className="hover:text-secondary">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        <Link clasName="hover:" to={link}>
          {props.children}
        </Link>
      </span>
    </li>
  );
};
