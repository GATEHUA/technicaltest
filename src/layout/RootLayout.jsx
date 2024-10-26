import { Outlet } from "react-router-dom";
import { SideBar } from "../components/sidebar/SideBar";
import { useToggleTheme } from "../hooks/useToggleTheme";

export const RootLayout = () => {
  const { toggleTheme, isDarkTheme } = useToggleTheme();
  return (
    <div className={`container ${isDarkTheme ? "dark-theme" : ""}`}>
      <SideBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};
