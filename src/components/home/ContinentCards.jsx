import React from "react";
const continents = [
  "Africa",
  "Antarctica",
  "Asia",
  "Europe",
  "North America",
  "Oceania",
  "South America",
];
export const ContinentCards = ({ handleCheckboxChange }) => {
  return (
    <>
      {continents.map((continent) => (
        <div key={continent} className="checkbox-card">
          <label className="f-label">
            <input
              type="checkbox"
              name="continent"
              value={continent}
              onChange={handleCheckboxChange}
            />
            <img draggable="false" src={`continents/${continent}.png`} alt="" />
          </label>
          <span>{continent}</span>
        </div>
      ))}
    </>
  );
};
