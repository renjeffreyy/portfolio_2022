import * as React from "react";
import { useState, useEffect } from "react";
import { HiMenuAlt1 } from "@react-icons/all-files/hi/HiMenuAlt1";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

// components
import { Socials } from "./socials.component";
import { Nav } from "./nav.component";

import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";

const Header = () => {
  const data = useStaticQuery(graphql`
    query DataQuery {
      allDataJson {
        edges {
          node {
            name
            email
            socials {
              github
              instagram
              linkedin
            }
            short_about
          }
        }
      }
    }
  `);

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    console.log(menuOpen);
  });

  const { name, short_about, socials, email } = data.allDataJson.edges[0].node;
  return (
    <header className="z-[9999] bg-background p-4 fixed right-0 left-0 top-0 lg:bottom-0 lg:w-[300px] lg:right=[unset] lg:px-8">
      <nav className="relative">
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="px-4 py-2 text-white border-white border rounded z-[2] relative lg:hidden"
        >
          <HiMenuAlt1 />
          <p className="sr-only">Menu Button</p>
        </button>
        <h1 className="text-text_secondary font-bold font-sans absolute top-2 w-full text-center lg:relative">
          {name}
        </h1>
        <div
          className={
            menuOpen
              ? "sm:flex max-h-[500px] transition-all duration-500 overflow-hidden lg:max-h-[unset] lg:flex-col"
              : "sm:flex max-h-0 overflow-hidden transition-all duration-500 lg:max-h-[unset] lg:flex-col"
          }
        >
          <div className="sm:flex-col sm:pr-4 sm:border-r-2 border-text_primary lg:border-0 lg:pr-0">
            <StaticImage
              src="../images/profile.webp"
              alt="testing"
              className="rounded-full max-w-[160px] mx-auto block mt-4"
            />
            <p className="text-text_secondary text-sm text-center mt-4">
              {short_about}
            </p>

            <Socials socials={socials} />
          </div>
          <div className="sm:flex sm:w-full sm:flex-col sm:pl-4 lg:pr-0 lg:pl-0">
            <a
              href={`mailto: ${email}`}
              className="border-secondary cursor-pointer px-4 py-2 mt-4 text-center rounded border text-secondary hover:bg-secondary_hover flex items-center justify-center gap-4"
            >
              <FaPaperPlane />
              Email Me!
            </a>
            <Nav />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
