import { useQuery } from "@apollo/client";
import { getCountryRequest } from "../../api/getCountries";
import { ExtraCountryDetail } from "./ExtraCountryDetail";
import { ExtraCountryDetailPlaceholder } from "./ExtraCountryDetailPlaceholder";
import { ExtraCountryDetailError } from "./ExtraCountryDetailError";

export const CountryDetail = ({
  countryDetail,
  handleCountryDetailClosure,
}) => {
  const { data, loading, error } = useQuery(getCountryRequest, {
    variables: { code: countryDetail?.code },
  });

  return (
    <aside className="country-details">
      <div>
        <button className="close" onClick={handleCountryDetailClosure}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="190 -780 580 600"
            width="24px"
            fill="none"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              fill="#e8eaed"
              stroke="#e8eaed"
            />
          </svg>
        </button>
        <img src={countryDetail.image} className="image" alt="" />
        <div className="footer special-footer">
          <img src={countryDetail.flag} alt="" />
          <div>
            <span>{countryDetail.name}</span>
            <span>{countryDetail?.continent.name}</span>
          </div>
        </div>
        {loading ? (
          <ExtraCountryDetailPlaceholder />
        ) : error ? (
          <ExtraCountryDetailError />
        ) : (
          <ExtraCountryDetail country={data.country} />
        )}
      </div>
    </aside>
  );
};
