import PageLayout from "../layouts/PageLayout";
import ColorizedText from "../components/ColorizedText";

export default function HomeView() {
    return (<PageLayout title={<span>Hi, I'am <ColorizedText content={"Hubert"}/></span>}>
        I am mid full-stack developer located at Poland. I have a passion for building clean <ColorizedText
        content={"architecture"}/> and with
        back-end technologies. I am based on <ColorizedText content={"Java"}/>, <ColorizedText
        content={"PHP"}/>, <ColorizedText content={"SQL "}/>
        and <ColorizedText content={"React"}/> but I had started with C++ and Node.
    </PageLayout>)
}