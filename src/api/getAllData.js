import { getCountriesRequest } from "./getCountries";
import { PIXABAY_KEY, PIXABAY_URL, REST_COUNTRIES } from "../../config";

export const processFlags = (flagsData) => {
  const flagsObj = {};
  flagsData.forEach((flagData) => {
    flagsObj[flagData.flag] = flagData.flags.png;
  });
  return flagsObj;
};

export const processImages = (countries, images, flagsObj) => {
  return countries.map((country, index) => ({
    ...country,
    image: images[index].hits[0]?.webformatURL || flagsObj[country.emoji],
    flag: flagsObj[country.emoji],
  }));
};

export const fetchAllData = async (client) => {
  const {
    data: { countries },
  } = await client.query({ query: getCountriesRequest });

  const urls = countries.map(
    (v) => `${PIXABAY_URL}/?key=${PIXABAY_KEY}&q=${v.name}&image_type=photo`
  );
  urls.push(REST_COUNTRIES);

  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const jsonData = await Promise.all(responses.map((res) => res.json()));

  const images = jsonData.slice(0, -1);
  const flagsData = jsonData[jsonData.length - 1];

  const flagsObj = processFlags(flagsData);

  return processImages(countries, images, flagsObj);
};
