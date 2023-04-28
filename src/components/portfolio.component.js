import * as React from "react";


import { PortfolioCard } from './portfolio-card.component'

export const Portfolio = () => {

    return (
        <section>
            <h2 className="text-4xl font-bold text-text_secondary mb-2">My Work</h2>
            <div class="flex md:flex-col md:flex-wrap">
                <PortfolioCard projectTitle="Wine Insiders" description="Shopify Migration of Wine Insider's store" />
                <PortfolioCard projectTitle="Soylent" description="Shopify Migration of Wine Insider's store" />
                <PortfolioCard projectTitle="Florence By Mills" description="Shopify Migration of Wine Insider's store" />
                <PortfolioCard projectTitle="EQ Site" description="Shopify Migration of Wine Insider's store" />
            </div>
        </section>
    )
}