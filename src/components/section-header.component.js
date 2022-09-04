import * as React from "react";

export const SectionHeader = ({children}) => {
    return (
        <h2 className="text-text_secondary border-secondary border-l-4 pl-4 text-3xl font-bold">{children}</h2>
    )
}