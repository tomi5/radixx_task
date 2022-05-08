import { useState, useEffect } from "react";
import { AIRPORT_API_PATH, API_TOKEN } from "../common/config";

const initialFetchState = {
  fetchAirportError: false,
  isLoadingAirports: false,
};

const useFetchAirport = () => {
  const [fetchState, setFetchState] = useState(initialFetchState);
  const [airports, setAirports] = useState();

  const fetchAirports = async () => {
    setFetchState({
      ...initialFetchState,
      isLoadingAirports: true,
    });

    try {
      const response = await fetch(AIRPORT_API_PATH, {
        method: "GET",
        headers: { "Tenant-Identifier": API_TOKEN },
      });
      const data = await response.json();

      if (response.ok) {
        setFetchState(initialFetchState);
        setAirports(data);
      } else {
        setFetchState({
          ...initialFetchState,
          fetchAirportError: true,
        });
      }
    } catch (error) {
      setFetchState({
        ...initialFetchState,
        fetchAirportError: true,
      });
    }
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  return { fetchState, airports };
};

export default useFetchAirport;
