/** @type {import('react-router-dom').RouterProps} */
export default [
    {
        path: "/",
        element: <div>home</div>
    },
    {
        path: "/about-me",
        element: <div>about me</div>
    },
    {
        path: "*",
        element: <div>404</div>
    }
];