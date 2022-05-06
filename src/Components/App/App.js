import "../../App.css";
import { FormControl, Stack } from "@mui/material";
import {
  buttonText,
  errors,
  flightDateName,
  flightOptions,
  flightRouteWays,
  loadingData,
} from "../../Translations/translations";
import FlightRoute from "../FlightRoute/FlightRoute";
import FlightType from "../FlightType/FlightType";
import FlightDate from "../FlightDate/FlightDate";
import SearchFlightButton from "../Buttons/SearchFlightButton";
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
      <Stack direction="column" spacing={2}>
        {isLoading && <div>{loadingData.LoadingAirports}</div>}
        {error && <div>{errors.FETCH_ERROR}</div>}
        <FlightType flightOptions={flightOptions} />
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 2, lg: 4 }}
        >
          <FlightRoute
            flightRouteWays={flightRouteWays}
            airports={data}
            isLoadingData={isLoading}
            fetchError={error}
          />
          <FlightDate flightDateName={flightDateName} />
        </Stack>
        <SearchFlightButton buttonText={buttonText.SEARCH_FLIGHT} />
      </Stack>
    </FormControl>
  );
};

export default App;
