import React, {useState} from "react";
import directoryIcon from "../assets/svg/icons/directory.svg";
import externalLink from "../assets/svg/icons/external-link.svg";
import Modal from "./Modal";

function Project({
    name,
    desc,
    tags,
    link
}) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return <div className="project bg-primary-violet text-black p-4 max-h-full grid gap-2 shadow shadow-gray-900">
        <header>
            <div className={"flex justify-between"}>
                <img src={directoryIcon} className={"h-8"} alt=""/>
                <a href={link} rel={"noreferrer"} target={"_blank"} onClick={(e) => {
                    if (link === "") {
                        setIsOpenModal(false);
                        setIsOpenModal(true);
                        e.preventDefault();
                    }
                }}>
                    <img src={externalLink} className={"h-8"} alt=""/>
                </a>
            </div>
            <div className="name">
                <h1 className={"text-xl"}>{name}</h1>
            </div>
        </header>
        <main>
            <div className="description text-sm">
                {desc}
            </div>
        </main>
        <footer>
            <ul className="tags text-sm w-full flex flex-wrap text-gray-800 whitespace-nowrap text-center">
                {tags.map(tag => <li>{tag}</li>)}
            </ul>
        </footer>
        {isOpenModal ? <Modal
            title={"Sorry!"}
            description={"That project has private repository. I can't share code 😥"}
        /> : null}
    </div>;
}

export default Project;