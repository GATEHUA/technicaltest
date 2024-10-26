import { useRef, useState } from "react";

export const useCountryDetail = () => {
  const [countryDetail, setCountryDetail] = useState(null);
  const inputRadioRef = useRef();

  const handleRadioChange = (country, e) => {
    inputRadioRef.current = e.target;
    setCountryDetail(country);
  };
  const handleCountryDetailClosure = () => {
    inputRadioRef.current.checked = false;
    setCountryDetail(null);
  };

  return { countryDetail, handleRadioChange, handleCountryDetailClosure };
};
