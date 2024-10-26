import { useEffect, useRef } from "react";

export const useOutsideClick = () => {
  const searchRef = useRef();
  const filterShow = useRef();
  const handleFocus = () => {
    filterShow.current.classList.remove("hidden");
  };
  useEffect(() => {
    let handler = (e) => {
      if (
        !filterShow.current.contains(e.target) &&
        !searchRef.current.contains(e.target)
      ) {
        filterShow.current.classList.add("hidden");
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return { searchRef, filterShow, handleFocus };
};
