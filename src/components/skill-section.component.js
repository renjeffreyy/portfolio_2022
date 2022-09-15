import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { SectionHeader } from "./section-header.component";
import { SkillCard } from "./skill-card.component";
import { SkillList } from "./skill-card-skills.component";

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
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { FaSass } from "@react-icons/all-files/fa/FaSass";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { SiIonic } from "@react-icons/all-files/si/SiIonic";








export const SkillSection = () => {
  const skillData = useStaticQuery(graphql`
    query skillQuery {
      allDataJson {
        edges {
          node {
            skill_header
            languages {
              header
              skill
            }
            frameworks {
              header
              skill
            }
            templating {
              header
              skill
            }
            seo {
              header
              skill
            }
            styles {
              header
              skill
            }
            backend {
              header
              skill
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
    styles,
    backend
  } = skillData.allDataJson.edges[0].node;

  return (
    <section className="py-8 max-w-6xl">
      <SectionHeader>{skillHeader}</SectionHeader>
      <div className="flex gap-4 flex-wrap">
        <SkillCard
          headerText={languages.header}
          description={languages.description}
        >
          <div className="flex items-center gap-2 text-text_secondary">
            <SiJavascript className="w-5 h-5" />
            <SiTypescript className="w-5 h-5" />
          </div>
          <h2 className="text-white text-2xl">{languages.header}</h2>
          <SkillList skills={languages.skill} />
        </SkillCard>
        <SkillCard
          headerText={frameworks.header}
          description={frameworks.description}
        >
          <div className="flex items-center gap-2 text-text_secondary">
            <SiReact className="w-5 h-5" />
            <SiAngular className="w-5 h-5" />
            <SiGatsby className="w-5 h-5" />
            <SiIonic className="w-5 h-5" />
          </div>
          <h2 className="text-white text-2xl">{frameworks.header}</h2>
          <SkillList skills={frameworks.skill} />
        </SkillCard>
        <SkillCard
          headerText={templating.header}
          description={templating.description}
        >
          <div className="flex items-center gap-2 text-text_secondary">
            <DiHtml5 className="w-5 h-5" />
            <FaShopify className="w-5 h-5" />
            <FaHubspot className="w-5 h-5" />
          </div>
          <h2 className="text-white text-2xl">{templating.header}</h2>
          <SkillList skills={templating.skill} />
        </SkillCard>
        <SkillCard headerText={seo.header} description={seo.description}>
          <div className="flex gap-2 text-text_secondary">
            <FaSearchengin className="w-5 h-5" />
            <AiOutlineStock className="w-5 h-5" />
            <FaUniversalAccess className="w-5 h-5" />
          </div>
          <h2 className="text-white text-2xl">{seo.header}</h2>
          <SkillList skills={seo.skill} />
        </SkillCard>
        <SkillCard headerText={styles.header} description={styles.description}>
          <div className="flex gap-2 text-text_secondary">
            <FaCss3Alt className="w-5 h-5" />
            <FaSass className="w-5 h-5" />
            <SiTailwindcss className="w-5 h-5" />
            <FaBootstrap className="w-5 h-5" />
          </div>
          <h2 className="text-white text-2xl">{styles.header}</h2>
          <SkillList skills={styles.skill} />
        </SkillCard>
        <SkillCard headerText={backend.header} description={backend.description}>
          <div className="flex gap-2 text-text_secondary">
            <FaNodeJs className="w-5 h-5" />
            <SiMongodb className="w-5 h-5" />
            <SiGraphql className="w-5 h-5" />
          </div>
          <h2 className="text-white text-2xl">{backend.header}</h2>
          <SkillList skills={backend.skill} />
        </SkillCard>
      </div>
    </section>
  );
};
