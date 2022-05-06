import "../../App.css";
import { FormControl } from "@mui/material";
import {
  buttonText,
  flightDateName,
  flightOptions,
  flightRouteWays,
} from "../../Translations/translations";
import FlightRoute from "../FlightRoute/FlightRoute";
import FlightType from "../FlightType/FlightType";
import FlightDate from "../FlightDate/FlightDate";
import SearchFlightButton from "../Buttons/SearchFlightButton";
import React from "@types/react";
import useFetch from "react-fetch-hook";

const API_TOKEN =
  "9d7d6eeb25cd6083e0df323a0fff258e59398a702fac09131275b6b1911e202d";
const AIRPORT_API_PATH =
  "https://api-uat-ezycommerce.ezyflight.se/api/v1/Airport/OriginsWithConnections/en-us";

const App = () => {
  const { isLoading, data, error } = useFetch(AIRPORT_API_PATH, {
    headers: { "Tenant-Identifier": API_TOKEN },
  });

  return (
    <FormControl>
      <FlightType flightOptions={flightOptions} />
      <FlightRoute
        flightRouteWays={flightRouteWays}
        airports={data}
        isLoadingData={isLoading}
        fetchError={error}
      />
      <FlightDate flightDateName={flightDateName} />
      <SearchFlightButton buttonText={buttonText.SEARCH_FLIGHT} />
    </FormControl>
  );
};

export default App;
