import {NavLink} from "react-router-dom";

const BaseNavLink = ({to, children}) => <NavLink end to={to}>{children}</NavLink>;

export default BaseNavLink;