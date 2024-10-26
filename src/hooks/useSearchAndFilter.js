import { useRef } from "react";

export const useSearchAndFilter = (setAllData, initialData) => {
  const inputRef = useRef("");
  const selectedContinentsRef = useRef([]);
  const searchAndFilter = (data, search, continents) => {
    return data.filter((item) => {
      const matchesSearch = item.name
        .toString()
        .toLowerCase()
        .startsWith(search.toLowerCase());

      const matchesContinent =
        continents.length === 0 || continents.includes(item.continent.name);

      return matchesSearch && matchesContinent;
    });
  };
  const updateFilteredResults = () => {
    const filteredResults = searchAndFilter(
      initialData.current,
      inputRef.current,
      selectedContinentsRef.current
    );
    setAllData(filteredResults);
  };
  const handleCheckboxChange = ({ target }) => {
    if (target.checked) selectedContinentsRef.current.push(target.value);
    else
      selectedContinentsRef.current.splice(
        selectedContinentsRef.current.indexOf(target.value),
        1
      );

    updateFilteredResults();
  };
  const handleInputChange = ({ target }) => {
    inputRef.current = target.value;
    updateFilteredResults();
  };

  const handleFilterCleaning = () => {
    selectedContinentsRef.current = [];
    document.getElementsByName("continent").forEach((checkbox) => {
      checkbox.checked = false;
    });
    updateFilteredResults();
  };

  return {
    handleFilterCleaning,
    handleInputChange,
    handleCheckboxChange,
    inputRef,
  };
};
