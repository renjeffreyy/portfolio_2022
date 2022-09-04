import * as React from "react";

export const SkillCard = ({headerText,description,children}) => {

    return(
        <article className="py-2 basis-full sm:basis-[48%] lg:basis-[30%]">
            <div className="flex items-center gap-2 text-text_secondary">
                { children }
            </div>
            <h2 className="text-white mb-2 text-2xl">{ headerText }</h2>
            <p className="text-text_primary">{ description }</p>
        </article>
    )
}