import * as React from "react";
import { SectionHeader } from "./section-header.component";

export const Section = ({headerText, children }) => {
    return (
        <section className="py-4">
            <SectionHeader>{ headerText }</SectionHeader>
            { children }
        </section>
    )
}