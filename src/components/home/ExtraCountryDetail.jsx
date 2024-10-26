import React from "react";

export const ExtraCountryDetail = ({ country }) => {
  return (
    <dl>
      <div>
        <dt>Capital:</dt>
        <dd>{country.capital || "Capital not Found"}</dd>
      </div>

      <div>
        <dt>Language:</dt>
        <dd>
          {country.languages.length === 0
            ? "Languages not found"
            : country.languages.map((language) => language.name).join(", ")}
        </dd>
      </div>

      <div>
        <dt>Currency:</dt>
        <dd>{country.currency || "Currency not Found"}</dd>
      </div>
      <div>
        <dt>Region:</dt>
        <dd>
          <ul>
            {country.states.length === 0
              ? "Regions not found"
              : country.states.map((state, index) => (
                  <li key={index}>{state.name}</li>
                ))}
          </ul>
        </dd>
      </div>
    </dl>
  );
};
