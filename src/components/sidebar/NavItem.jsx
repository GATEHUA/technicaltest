import { NavLink } from "react-router-dom";

export const NavItem = ({ to, icon, label }) => (
  <li className="link">
    <NavLink to={to}>
      {icon}
      <span>{label}</span>
    </NavLink>
  </li>
);
