import * as React from "react";

export const SkillCard = ({headerText,description,children}) => {

    return(
        <article className="p-4 basis-full sm:basis-[48%] lg:basis-[30%] bg-background rounded flex-grow">
            <div className="flex gap-2 text-text_secondary mb-2 flex-col">
                { children }
            </div>
        </article>
    )
}