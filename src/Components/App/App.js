import "../../App.css";
import { Alert, Box, Stack } from "@mui/material";
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
import { formWrapper } from "./style";
import { useState } from "react";
import { useForm } from "react-hook-form";

const API_TOKEN =
  "9d7d6eeb25cd6083e0df323a0fff258e59398a702fac09131275b6b1911e202d";
const AIRPORT_API_PATH =
  "https://api-uat-ezycommerce.ezyflight.se/api/v1/Airport/OriginsWithConnections/en-us";

const initailFormValue = {
  flightType: flightOptions.ONE_WAY,
};

const App = () => {
  const { isLoading, data, error } = useFetch(AIRPORT_API_PATH, {
    headers: { "Tenant-Identifier": API_TOKEN },
  });

  const { handleSubmit, control } = useForm();
  const [formValues, setFormValues] = useState(initailFormValue);
  const isSearchButtonDisabled = !!(isLoading || error);
  const isRoundTrip = formValues.flightType === flightOptions.ROUND_TRIP;
  const setFlightType = (e) => {
    setFormValues({
      ...initailFormValue,
      flightType: e.target.value,
    });
  };

  return (
    <Box sx={formWrapper}>
      <form onSubmit={handleSubmit((data) => setFormValues(data))}>
        <Stack direction="column" spacing={2}>
          <FlightType
            flightOptions={flightOptions}
            control={control}
            formValues={formValues}
            handleChange={setFlightType}
          />
          {isLoading && (
            <Alert severity="info">{loadingData.LoadingAirports}</Alert>
          )}
          {error && <Alert severity="error">{errors.FETCH_ERROR}</Alert>}
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={{ xs: 2, lg: 4 }}
          >
            <FlightRoute
              flightRouteWays={flightRouteWays}
              airports={data}
              isLoadingData={isLoading}
              fetchError={error}
              formValues={formValues}
            />
            <FlightDate
              flightDateName={flightDateName}
              isRoundTrip={isRoundTrip}
            />
          </Stack>
          <SearchFlightButton
            disabled={isSearchButtonDisabled}
            buttonText={buttonText.SEARCH_FLIGHT}
          />
        </Stack>
      </form>
    </Box>
  );
};

export default App;
