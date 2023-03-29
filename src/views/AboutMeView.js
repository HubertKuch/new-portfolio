import PageLayout from "../layouts/PageLayout";
import ColorizedText from "../components/ColorizedText";

function AboutMeView() {
    return (<PageLayout title={<span><ColorizedText content={"I"}/>,</span>}>
        <div>
            am a full-stack programmer based on technologies like Java, PHP, SQL oriented databases and React with
            Typescript or JavaScript. I have obsession with clean code and architecture, object-oriented techniques,
            design patterns and Domain Driven Design. In free time I develop my own PHP framework called <a
            href={"https://avocadoframework.com"} rel={"noreferrer"} target={"_blank"}>Avocado</a> (my
            goal is to do something like Spring Boot for Java).
        </div>
        <br/>
        <div>
            Well organized person with good habits, freelancer, stoic, fan of photography and The Wither books, ukulele
            and tennis player.
        </div>
    </PageLayout>);
}

export default AboutMeView;