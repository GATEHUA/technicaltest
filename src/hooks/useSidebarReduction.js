import { useEffect, useRef } from "react";

export const useSidebarReduction = () => {
  const sidebarRef = useRef(null);
  const togglebtnRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("sidebarStatus")) {
      sidebarRef.current.classList.add("reduced");
      togglebtnRef.current.classList.add("rotate");
    }
  }, []);

  const toggleSidebar = () => {
    const isReduced = sidebarRef.current.classList.toggle("reduced");
    togglebtnRef.current.classList.toggle("rotate", isReduced);
    localStorage.setItem("sidebarStatus", isReduced ? "reduced" : "");
  };

  return { sidebarRef, toggleSidebar, togglebtnRef };
};
