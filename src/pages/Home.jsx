import { CardPlaceholder } from "../components/home/CardPlaceholder";
import { SearchSection } from "../components/home/SearchSection";
import { useFetchAllData } from "../hooks/useFetchAllData";
import { useSearchAndFilter } from "../hooks/useSearchAndFilter";
import { Card } from "../components/home/Card";
import { CountryDetail } from "../components/home/CountryDetail";
import { useCountryDetail } from "../hooks/useCountryDetail";

export const Home = () => {
  const { allData, error, loading, setAllData, initialData } =
    useFetchAllData();

  const {
    handleFilterCleaning,
    handleInputChange,
    handleCheckboxChange,
    inputRef,
  } = useSearchAndFilter(setAllData, initialData);

  const { countryDetail, handleRadioChange, handleCountryDetailClosure } =
    useCountryDetail();
  return (
    <>
      <SearchSection
        handleInputChangue={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        handleFilterCleaning={handleFilterCleaning}
      />

      <div className="content-section">
        <section className="content">
          {loading ? (
            [...Array(24)].map((_, index) => <CardPlaceholder key={index} />)
          ) : error ? (
            <div className="request-error">{error}</div>
          ) : allData.length === 0 ? (
            <div className="request-error">
              No results found for <span>{inputRef.current}</span>
            </div>
          ) : (
            allData.map((data) => (
              <Card
                key={data.code}
                country={data}
                handleRadioChange={handleRadioChange}
              />
            ))
          )}
        </section>
        {countryDetail && (
          <CountryDetail
            countryDetail={countryDetail}
            handleCountryDetailClosure={handleCountryDetailClosure}
          />
        )}
      </div>
    </>
  );
};
