import PageLayout from "../layouts/PageLayout";
import ColorizedText from "../components/ColorizedText";
import Project from "../components/Project";

function ProjectsView() {
    return <PageLayout title={<span>My <ColorizedText content={"projects"}/></span>}>
        <h3>Main projects I've created:</h3>
        <br/>
        <div className="projects-container grid gap-5 mt-10 mb-20">
            <Project
                name={"Avocado"}
                desc={"Avocado is a modern PHP framework built to be similar to Spring Boot and resolve like dependency injection, ORM, routing, processors, annotations usage, DDD, database drivers, etc"}
                link={"https://avocadoframework.com/"}
                tags={["PHP", "ORM", "Framework", "DI"]}
            />
            <Project
                name={"Minecraft Servers List"}
                desc={"Backend for Minecraft servers added by users and checked that there are their own servers, with payments, ads, user roles, stats, history, etc."}
                link={""}
                tags={["Minecraft", "Java", "Spring Boot", "MySQL", "Docker"]}
            />
            <Project
                name={"Minecraft Hosting"}
                desc={"Minecraft servers hosting written in PHP using Pterodactyl and my own framework with payments, history, user roles, renew"}
                link={""}
                tags={["PHP", "Avocado", "MySQL", "Pterodactyl", "Docker"]}
            />
            <Project
                name={"YouTube Stream Tracker"}
                desc={"Application to monitor YouTube streams. Every channel added to the application is checked in threads to find all streams then every on live is monitored with watchers, start date, end date, and do chart. Bypasses ReCaptcha using 2Captcha."}
                link={""}
                tags={["YouTube", "Java", "Spring Boot", "MySQL", "Docker"]}
            />
            <Project
                name={"YouTube Video Tracker"}
                desc={"Similar to Stream Tracker but with videos. Every channel is checking in threads to get all videos added 30 days before the checking date then is monitored with views, likes, and comments. Bypasses ReCaptcha using 2Captcha."}
                link={""}
                tags={["YouTube", "Java", "Spring Boot", "MySQL", "Docker", "JavaScript", "React"]}
            />
            <Project
                name={"Kafar"}
                desc={"Kafar is a static site for Kafar company based in the Netherlands to show their projects, information about the company, and contact."}
                link={"https://kafar.nl/"}
                tags={["Java", "Spring Boot", "Mustache", "Docker", "JavaScript"]}
            />
            <Project
                name={"Hamster"}
                desc={"Hamster is a project to download files from chomikuj.pl for free using their mobile API."}
                link={"https://github.com/HubertKuch/download_manager"}
                tags={["Java", "Spring Boot", "React", "Docker", "TypeScript", "Tailwind"]}
            />
            <Project
                name={"OVH Automation"}
                desc={"Automation for massive creating OVH emails on a bought domain."}
                link={"https://github.com/HubertKuch/ovh-mail-creator"}
                tags={["Java", "Spring Boot", "Spring Shell", "OVH"]}
            />
        </div>
    </PageLayout>;
}

export default ProjectsView;