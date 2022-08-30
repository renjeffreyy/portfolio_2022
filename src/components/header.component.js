import * as React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

// components
import { Socials } from "./socials.component";
import { Nav } from "./nav.component";

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
    <header
      className="z-[9999] bg-background p-4 fixed right-0 left-0 top-0 lg:bottom-0 lg:w-[300px] lg:right=[unset] lg:px-8"
    >
      <nav className="relative">
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="px-4 py-2 text-white border-white border rounded z-[2] relative lg:hidden"
        >
          <FontAwesomeIcon icon={faBars} />
          <p className="sr-only">Menu Button</p>
        </button>
        <h1 className="text-text_secondary font-bold font-sans absolute top-2 w-full text-center lg:relative">
          {name}
        </h1>
        <div className={menuOpen ? "max-h-[500px] transition-all duration-500 overflow-hidden lg:max-h-[unset]" :  "max-h-0 overflow-hidden transition-all duration-500 lg:max-h-[unset]"}>
          <StaticImage
            src="../images/profile.webp"
            alt="testing"
            className="rounded-full max-w-[160px] mx-auto block mt-4"
          />
          <p className="text-text_secondary text-sm text-center mt-4">{short_about}</p>

          <Socials socials={socials} />
          <a
            href={`mailto: ${email}`}
            className="border-secondary cursor-pointer block px-4 py-2 mt-4 text-center rounded border text-secondary hover:bg-secondary_hover"
          >
            Email Me!
          </a>
          <Nav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
