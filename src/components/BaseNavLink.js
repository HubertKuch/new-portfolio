import {NavLink} from "react-router-dom";

export default ({to, children}) => <NavLink end to={to}>{children}</NavLink>;