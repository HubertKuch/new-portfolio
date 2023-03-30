import HomeView from "./views/HomeView";
import AboutMeView from "./views/AboutMeView";
import ProjectsView from "./views/ProjectsView";


/** @type {[{path: string, element: JSX.Element},{path: string, element: JSX.Element},{path: string, element: JSX.Element}]} */
const routes = [
    {path: "/", element: <HomeView/>, exactly: true},
    {path: "/about-me", element: <AboutMeView/>, exactly: true},
    {path: "/projects", element: <ProjectsView/>, exactly: true},
    {path: "*", element: <div>404</div>, exactly: true}
];

export default routes;
