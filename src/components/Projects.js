import {useRef, useState} from "react";

function Projects() {
    const [projects, setProjects] = useState([
        {
            name: "Avocado4123",
            description: "test",
            backgroundColor: "var(--primary-green)",
            isOpen: false
        },
        {
            name: "Avocado213",
            description: "test",
            backgroundColor: "var(--primary-green)",
            isOpen: false
        },
        {
            name: "Avocado13321",
            description: "test",
            backgroundColor: "var(--primary-green)",
            isOpen: false
        },
        {
            name: "Avocado",
            description: "test",
            backgroundColor: "var(--primary-green)",
            isOpen: false
        },
        {
            name: "Avocado21424",
            description: "test",
            backgroundColor: "var(--primary-green)",
            isOpen: false
        },
        {
            name: "Avoc32113233ado",
            description: "test",
            backgroundColor: "var(--primary-green)",
            isOpen: false
        },
        {
            name: "Avocado 2",
            description: "test",
            backgroundColor: "var(--primary-red)",
            isOpen: false
        }, {
            name: "Avocado 3",
            description: "dsakjdkaskdjhasldh;lkdhjdsakjdkaskdjhasldh;lkdhjdsakjdkaskdjhasldh;lkdhjdsakjdkaskdjhasldh;lkdhjdsakjdkaskdjhasldh;lkdhjdsakjdkaskdjhasldh;lkdhjdsakjdkaskdjhasldh;lkdhjdsakjdkaskdjhasldh;lkdhjdsakjdkaskdjhasldh;lkdhj",
            backgroundColor: "var(--primary-blue)",
            isOpen: true
        },]);

    const containerRef = useRef();

    function openSingle(event) {
        /* const projectsNodes = [...containerRef.current?.querySelectorAll(".project-node")] ?? [];
         const eventNode = event.currentTarget;

         for (const node of projectsNodes) {
             const article = node.querySelector("article");

             if (!article.classList.contains("hidden")) {
                 console.log(node)
                 article.classList.add("hidden");
             }
         }

         eventNode.querySelector("article").classList.remove("hidden");*/
        setProjects(projects.map((project) => {
            const eventProjectName = event.currentTarget.getAttribute("data-project-name");

            project.isOpen = project.name === eventProjectName;

            return project;
        }))
    }

    return (<section
        ref={containerRef}
        id={"projects"}
        className={"w-full h-full text-black flex flex-col"}
    >
        {projects.map(({
                           description,
                           name,
                           backgroundColor,
                           isOpen
                       }, index) => {

            return (<div style={{background: backgroundColor}}
                         key={index}
                         data-project-name={name}
                         className={`rounded-tr-xl rounded-tl-xl p-2 ${index !== null ? '-mt-2' : ''} cursor-pointer`}
                         onClick={openSingle}
            >
                <header className={"text-2xl w-full"}>{name}</header>
                <article className={`font-medium w-full ${isOpen ? '' : 'hidden'}`}>
                    {description}
                </article>
            </div>);
        })}
    </section>);
}

export default Projects;