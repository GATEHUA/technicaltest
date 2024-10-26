import { LogoIcon } from "./icons/LogoIcon";
import { ReductionIcon } from "./icons/ReductionIcon";
import { navItems } from "./data/navItems";
import { NavItem } from "./NavItem";
import { LightElement } from "./icons/LightElement";
import { DarkElement } from "./icons/DarkElement";
import { useSidebarReduction } from "../../hooks/useSidebarReduction";

export const SideBar = ({ toggleTheme, isDarkTheme }) => {
  const { sidebarRef, toggleSidebar, togglebtnRef } = useSidebarReduction();
  return (
    <aside ref={sidebarRef} className="sidebar">
      <div className="logo">
        <LogoIcon />
        <span>FractalUp</span>
      </div>
      <nav className="nav-c">
        <ul className="nav-ul">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>
      </nav>
      <div className="foot">
        <button className="theme-btn" onClick={toggleTheme}>
          {isDarkTheme ? <LightElement /> : <DarkElement />}
        </button>
        <button
          ref={togglebtnRef}
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <ReductionIcon />
        </button>
      </div>
    </aside>
  );
};
