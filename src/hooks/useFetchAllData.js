import { useEffect, useRef, useState } from "react";
import { useApolloClient } from "@apollo/client";
import { fetchAllData } from "../api/getAllData";

export const useFetchAllData = () => {
  const client = useApolloClient();
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const initialData = useRef();

  const fetchDataWrapper = async () => {
    try {
      const data = await fetchAllData(client);
      initialData.current = data;
      setAllData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Oops, an error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDataWrapper();
  }, []);
  return { allData, error, loading, setAllData, initialData };
};
