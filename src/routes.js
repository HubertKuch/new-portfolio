import HomeView from "./views/HomeView";
import AboutMeView from "./views/AboutMeView";
import ProjectsView from "./views/ProjectsView";
import SkillsView from "./views/SkillsView";
import HobbiesView from "./views/HobbiesView";


/** @type {[{path: string, element: JSX.Element},{path: string, element: JSX.Element},{path: string, element: JSX.Element}]} */
const routes = [
    {
        path: "/",
        element: <HomeView/>,
        exactly: true
    },
    {
        path: "/about-me",
        element: <AboutMeView/>,
        exactly: true
    },
    {
        path: "/projects",
        element: <ProjectsView/>,
        exactly: true
    },
    {
        path: "/skills-and-technologies",
        element: <SkillsView/>,
        exactly: true
    },
    {
        path: "/hobbies",
        element: <HobbiesView/>,
        exactly: true
    },
    {
        path: "*",
        element: <div>404</div>,
        exactly: true
    }
];

export default routes;
