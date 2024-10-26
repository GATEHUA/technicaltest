export const searchAndFilter = (data, search, continents) => {
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
