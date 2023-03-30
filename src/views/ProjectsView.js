import PageLayout from "../layouts/PageLayout";
import ColorizedText from "../components/ColorizedText";
import Projects from "../components/Projects";

function ProjectsView() {
    return <PageLayout title={<span>My <ColorizedText content={"projects"}/></span>}>
        <Projects/>
    </PageLayout>;
}

export default ProjectsView;