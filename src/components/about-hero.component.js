import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { ButtonPrimary } from "./button-primary.component";
import { ButtonSecondary } from "./button-secondary.component";


export const AboutHero = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allDataJson {
        edges {
          node {
            name
            role
            resume
          }
        }
      }
    }
  `);

  const { name, role, resume } = data.allDataJson.edges[0].node;

  return (
    <section className="flex flex-col md:flex-row md:gap-8 items-start justify-start max-w-6xl">
      <div className="mb-4 lg:mb-0">
        <h2 className="text-4xl font-bold text-text_secondary mb-2">{name}</h2>
        <h3 className="text-xl font-normal text-secondary mb-4">{role}</h3>
        <div className="mb-4">
          <p className="text-text_primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex gap-4">
            <ButtonPrimary url="/portfolio">View Portfolio</ButtonPrimary>
            <ButtonSecondary target="_blank" url={ resume }>View Resume</ButtonSecondary>
        </div>
      </div>

      <StaticImage
        src="../images/looking_up.webp"
        alt="testing"
        className="max-w-[300px] block mt-4 md:hidden"
      />
      <StaticImage
        src="../images/smile.webp"
        alt="testing"
        className="max-w-[300px] mt-4 hidden md:block"
      />
    </section>
  );
};
