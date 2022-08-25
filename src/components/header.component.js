import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

// components
import { Socials } from "./socials.component";
import { Nav } from "./nav.component";

const Header = () => {
  const data = useStaticQuery(graphql`
  query DataQuery{
    allDataJson {
      edges {
        node {
          name
          email
          socials{
            github
            instagram
            linkedin
          }
          short_about
        }
      }
    }
  }`)

  const { name, short_about, socials, email } = data.allDataJson.edges[0].node
  return (
    <header className="bg-background p-4 px">
      <nav className="relative">
        <button className="px-4 py-2 text-white border-white border rounded z-[2]">
          <FontAwesomeIcon icon={faBars} />
          <p className="sr-only">Menu Button</p>
        </button>
        <h1 className="text-white font-bold font-sans absolute top-2 w-full text-center">
          {name}
        </h1>
        <StaticImage src="../images/profile.webp" alt="testing" className="rounded-full max-w-[160px] mx-auto block mt-4"/>
        <p className="text-white text-sm text-center mt-4">{ short_about }</p>

      <Socials socials={ socials }/>
      <a href={`mailto: ${email}` } className="bg-button text-white cursor-pointer block px-4 py-2 mt-4 text-center rounded">Email Me!</a>
      <Nav />
      </nav>
    </header>
  );
};

export default Header;
