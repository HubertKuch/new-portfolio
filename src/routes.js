import HomeView from "./views/HomeView";
import PageLayout from "./layouts/PageLayout";

/** @type {[{path: string, element: JSX.Element},{path: string, element: JSX.Element},{path: string, element: JSX.Element}]} */
const routes = [
    {
        path: "/",
        element: <HomeView/>,
        exactly: true
    },
    {
        path: "/about-me",
        element: <PageLayout title={"test"}>about me</PageLayout>,
        exactly: true
    },
    {
        path: "*",
        element: <div>404</div>,
        exactly: true
    }
];

export default routes;
