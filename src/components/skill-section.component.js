import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SectionHeader } from "./section-header.component";
import { SkillCard } from "./skill-card.component";

// icons
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiAngular } from "@react-icons/all-files/si/SiAngular";
import { FaUniversalAccess } from "@react-icons/all-files/fa/FaUniversalAccess";
import { AiOutlineStock } from "@react-icons/all-files/ai/AiOutlineStock";
import { FaSearchengin } from "@react-icons/all-files/fa/FaSearchengin";
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5";
import { FaShopify } from "@react-icons/all-files/fa/FaShopify";
import { FaHubspot } from "@react-icons/all-files/fa/FaHubspot";

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
    <section className="py-8 max-w-6xl">
      <SectionHeader>{skillHeader}</SectionHeader>
      <div className="flex gap-4 flex-wrap">
        <SkillCard
          headerText={languages.header}
          description={languages.description}
        >
          <div className="flex items-center gap-2 text-text_secondary mb-2">
            <SiJavascript className="w-5 h-5" />
            <SiTypescript className="w-5 h-5" />
          </div>
          <h2 className="text-white mb-2 text-2xl">{languages.header}</h2>
          <p className="text-text_primary">{languages.description}</p>
        </SkillCard>
        <SkillCard
          headerText={frameworks.header}
          description={frameworks.description}
        >
          <div className="flex items-center gap-2 text-text_secondary mb-2">
            <SiReact className="w-5 h-5" />
            <SiAngular className="w-5 h-5" />
          </div>

          <h2 className="text-white mb-2 text-2xl">{frameworks.header}</h2>
          <p className="text-text_primary">{frameworks.description}</p>
        </SkillCard>
        <SkillCard
          headerText={templating.header}
          description={templating.description}
        >
          <div className="flex items-center gap-2 text-text_secondary mb-2">
            <DiHtml5 className="w-5 h-5" />
            <FaShopify className="w-5 h-5" />
            <FaHubspot className="w-5 h-5" />
          </div>
          <h2 className="text-white mb-2 text-2xl">{templating.header}</h2>
          <p className="text-text_primary">{templating.description}</p>
        </SkillCard>
        <SkillCard headerText={seo.header} description={seo.description}>
          <div className="flex gap-2 text-text_secondary mb-2">
            <FaSearchengin className="w-5 h-5" />
            <AiOutlineStock className="w-5 h-5" />
            <FaUniversalAccess className="w-5 h-5" />
          </div>
          <h2 className="text-white mb-2 text-2xl">{seo.header}</h2>
          <p className="text-text_primary">{seo.description}</p>
        </SkillCard>
      </div>
    </section>
  );
};
