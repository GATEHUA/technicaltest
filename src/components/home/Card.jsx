import React from "react";

export const Card = ({ country, handleRadioChange }) => {
  return (
    <label className="card">
      <div>
        <img src={country.image} alt="" />
      </div>
      <input
        type="radio"
        name="country"
        className="hidden"
        onChange={(e) => {
          handleRadioChange(country, e);
        }}
      />
      <div className="footer">
        <img src={country.flag} alt="" />
        <div>
          <span>{country.name}</span>
          <span>{country?.continent?.name}</span>
        </div>
      </div>
    </label>
  );
};
