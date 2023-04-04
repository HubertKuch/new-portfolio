import PageLayout from "../layouts/PageLayout";
import ColorizedText from "../components/ColorizedText";
import Project from "../components/Project";

function ProjectsView() {
    return <PageLayout title={<span>My <ColorizedText content={"projects"}/></span>}>
        <h3>Some projects I've created:</h3>
        <div className="projects-container grid gap-5">
            <Project
                name={"Avocado"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis delectus eaque eligendi excepturi hic illum laboriosam neque nisi ratione."}
                link={""}
                tags={["PHP", "ORM", "Framework"]}
            />
            <Project
                name={"Avocado"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis delectus eaque eligendi excepturi hic illum laboriosam neque nisi ratione."}
                link={""}
                tags={["PHP", "ORM", "Framework"]}
            />
            <Project
                name={"Avocado"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis delectus eaque eligendi excepturi hic illum laboriosam neque nisi ratione."}
                link={""}
                tags={["PHP", "ORM", "Framework"]}
            />
            <Project
                name={"Avocado"}
                desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet corporis delectus eaque eligendi excepturi hic illum laboriosam neque nisi ratione."}
                link={""}
                tags={["PHP", "ORM", "Framework"]}
            />
        </div>
    </PageLayout>;
}

export default ProjectsView;