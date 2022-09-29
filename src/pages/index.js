import * as React from "react";
import Layout from "../components/layout.component";
import { Seo } from "../components/seo.component";
import { AboutHero } from "../components/about-hero.component";
import { SkillSection } from "../components/skill-section.component";

import "../styles/global.css";

const IndexPage = () => {
  return (
    <main>
      <Layout>
        <AboutHero />
        <SkillSection />
      </Layout>
    </main>
  );
};

export const Head = () => {
  return <Seo title="Jeffrey Ren's Porfolio" />;
};

export default IndexPage;
