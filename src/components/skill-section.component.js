import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SectionHeader } from "./section-header.component";
import { SkillCard } from "./skill-card.component";

// icons
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiAngular } from "@react-icons/all-files/si/SiAngular";
import { FaUniversalAccess } from "@react-icons/all-files/fa/FaUniversalAccess";
import { AiOutlineStock } from "@react-icons/all-files/ai/AiOutlineStock";
import { FaSearchengin } from "@react-icons/all-files/fa/FaSearchengin";

export const SkillSection = () => {
  const skillData = useStaticQuery(graphql`
    query skillQuery {
      allDataJson {
        edges {
          node {
            skill_header
            languages {
              header
              description
            }
            frameworks {
              header
              description
            }
            templating {
              header
              description
            }
            seo {
              header
              description
            }
          }
        }
      }
    }
  `);

  const {
    skill_header: skillHeader,
    languages,
    frameworks,
    templating,
    seo,
  } = skillData.allDataJson.edges[0].node;

  return (
    <section className="py-8">
      <SectionHeader>{skillHeader}</SectionHeader>
      <div className="flex gap-4 flex-wrap">
        <SkillCard
          headerText={languages.header}
          description={languages.description}
        >
          <SiJavascript />
          <SiTypescript />
          <SiPython />
        </SkillCard>
        <SkillCard
          headerText={frameworks.header}
          description={frameworks.description}
        >
          <SiReact />
          <SiAngular />
        </SkillCard>
        <SkillCard
          headerText={templating.header}
          description={templating.description}
        ></SkillCard>
        <SkillCard headerText={seo.header} description={seo.description}>
          <FaSearchengin />
          <AiOutlineStock />
          <FaUniversalAccess />
        </SkillCard>
      </div>
    </section>
  );
};
