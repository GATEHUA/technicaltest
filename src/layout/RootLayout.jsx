import { Outlet } from "react-router-dom";
import { SidebarElement } from "../components/sidebar/SidebarElement";
import { useToggleTheme } from "../hooks/useToggleTheme";

export const RootLayout = () => {
  const { toggleTheme, isDarkTheme } = useToggleTheme();
  return (
    <div className={`container ${isDarkTheme ? "dark-theme" : ""}`}>
      <SidebarElement toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
