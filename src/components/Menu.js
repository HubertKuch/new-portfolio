import BaseNavLink from "./BaseNavLink";

export default function Menu() {
    return (<nav className={"h-full w-full"}>
        <ul className={"list-none h-full grid justify-center items-center"}>
            <li>
                <BaseNavLink to={"/"}>Home</BaseNavLink>
            </li>
            <li>
                <BaseNavLink to={"/about-me"}>About</BaseNavLink>
            </li>
            <li>
                <BaseNavLink to={"/projects"}>Projects</BaseNavLink>
            </li>
            <li>
                <BaseNavLink to={"/skills-and-technologies"}>Skills</BaseNavLink>
            </li>
            <li>
                <BaseNavLink to={"/hobbies"}>Hobbies</BaseNavLink>
            </li>
            <li>
                <BaseNavLink to={"/contact"}>Contact</BaseNavLink>
            </li>
        </ul>
    </nav>);
}