import { gql } from "@apollo/client";

export const getCountriesRequest = gql`
  query {
    countries {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const getCountryRequest = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      currency
      capital
      states {
        name
      }
      languages {
        name
      }
    }
  }
`;
