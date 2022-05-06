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

const App = () => {
  return (
    <FormControl>
      <FlightType flightOptions={flightOptions} />
      <FlightRoute flightRouteWays={flightRouteWays} />
      <FlightDate flightDateName={flightDateName} />
      <SearchFlightButton buttonText={buttonText.SEARCH_FLIGHT} />
    </FormControl>
  );
};

export default App;
