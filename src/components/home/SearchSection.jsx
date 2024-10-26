import { useRef, useEffect } from "react";
import { ContinentCards } from "./ContinentCards";
import { SearchElement } from "./icons/SearchElement";
import { useOutsideClick } from "../../hooks/useOutsideClick";

export const SearchSection = ({
  handleCheckboxChange,
  handleInputChangue,
  handleFilterCleaning,
}) => {
  const { searchRef, filterShow, handleFocus } = useOutsideClick();
  return (
    <search className="search-section">
      <label ref={searchRef} role="search" className="search">
        <div>
          <span>Country</span>
          <input
            className="search-value"
            type="text"
            onChange={handleInputChangue}
            onFocus={handleFocus}
            placeholder="Type the country you want to see"
          />
        </div>
        <SearchElement />
      </label>
      <div ref={filterShow} className="filter-section hidden">
        <div className="filter-header">
          <span>Filter by continents</span>
          <button className="clean-filter" onClick={handleFilterCleaning}>
            Clear
          </button>
        </div>
        <div className="filter-main">
          <ContinentCards handleCheckboxChange={handleCheckboxChange} />
        </div>
      </div>
    </search>
  );
};
