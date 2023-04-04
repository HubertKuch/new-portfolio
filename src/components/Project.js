import React from "react";
import directoryIcon from "../assets/svg/icons/directory.svg";
import externalLink from "../assets/svg/icons/external-link.svg";

function Project({
    name,
    desc,
    tags,
    link
}) {
    return <div className="project bg-primary-violet text-black p-4 max-h-full grid gap-2 shadow shadow-gray-900">
        <header>
            <div className={"flex justify-between"}>
                <img src={directoryIcon} className={"h-8"} alt=""/>
                <a href={link} rel={"noreferrer"} target={"_blank"}>
                    <img src={externalLink} className={"h-8"} alt=""/>
                </a>
            </div>
            <div className="name">
                <h1>{name}</h1>
            </div>
        </header>
        <main>
            <div className="description text-sm">
                {desc}
            </div>
        </main>
        <footer>
            <ul className="tags text-sm w-full flex flex-wrap text-gray-800">
                {tags.map(tag => <li className={"flex-1"}>{tag}</li>)}
            </ul>
        </footer>
    </div>;
}

export default Project;