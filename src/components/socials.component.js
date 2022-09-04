import React from "react"

import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

export const Socials = ({socials}) =>{
    const { github, linkedin } = socials
    return(
        <ul className="flex gap-4 mx-auto justify-center mt-4 border-b-2 border-text_primary pb-4 sm:border-b-0 lg:border-b-2">
            <SocialLink socialLink={github}  name="github" >
                <FaGithub className="w-full h-full" />
            </SocialLink>
            <SocialLink socialLink={linkedin}  name="linkedin" >
                <FaLinkedin className="w-full h-full"/>
            </SocialLink>
        </ul>
    )
}


const SocialLink = ({socialLink, name, children}) =>{
    
    return (
        <li>
        <a href={socialLink} className="text-text_secondary w-8 h-8 block cursor-pointer hover:text-secondary" target="_blank" rel="noopener noreferrer">
            { children }
            <p className="sr-only">{name}</p>
        </a>
        </li>
    )
}