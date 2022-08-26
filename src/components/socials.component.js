import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub,faInstagram,faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const Socials = ({socials}) =>{
    const { github, instagram, linkedin } = socials
    return(
        <ul className="flex gap-4 mx-auto justify-center mt-4 border-b border-text_primary pb-4">
            <SocialLink socialLink={github} icon={faGithub} name="github" />
            <SocialLink socialLink={linkedin} icon={faLinkedin} name="linkedin" />
            <SocialLink socialLink={instagram} icon={faInstagram} name="instagram" />
        </ul>
    )
}


const SocialLink = ({socialLink, icon, name}) =>{
    
    return (
        <li>
        <a href={socialLink} className="text-white w-8 h-8 block" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-full h-full text-secondary" icon={icon} />
            <p className="sr-only">{name}</p>
        </a>
        </li>
    )
}