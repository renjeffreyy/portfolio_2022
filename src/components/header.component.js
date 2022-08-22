import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <header className="bg-background p-4 px">
      <nav className="relative">
        <button className="px-4 py-2 text-white border-white border rounded z-[2]">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1 className="text-white font-bold font-sans absolute top-2 w-full text-center">
          Jeffrey Ren
        </h1>
        <StaticImage src="../images/profile.webp" alt="testing" className="rounded-full"/>
      </nav>
    </header>
  );
};

export default Header;
