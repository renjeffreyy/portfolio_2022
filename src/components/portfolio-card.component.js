import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const PortfolioCard = ({projectTitle, description }) =>{
    return (
        <article>
            <div>
                <StaticImage src="../images/wine-insiders.png" alt="Wine Insiders" />
            </div>
            <h3 class="text-text_secondary">{projectTitle }</h3>
            <p class="text-text_primary">{description }</p>
            <p class="text-text_secondary">Technologies</p>
            <div></div>

        </article>
    )
}