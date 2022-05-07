import "../../App.css";
import { Box, Stack } from "@mui/material";
import { buttonText, flightOptions } from "../../common/translations";
import FlightRoute from "../FlightRoute/FlightRoute";
import FlightType from "../FlightType/FlightType";
import FlightDate from "../FlightDate/FlightDate";
import SearchFlightButton from "../Buttons/SearchFlightButton";
import useFetch from "react-fetch-hook";
import { formWrapper } from "./style";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { AIRPORT_API_PATH, API_TOKEN } from "../../common/config";
import {
  FLIGHT_TYPE,
  ORIGIN_AIRPORT,
  DESTINATION_AIRPORT,
  DEPART_DATE,
  RETURN_DATE,
} from "../../common/constants";
import FlightCriteriaPresentation from "../FlightCriteriaPresentation/FlightCriteriaPresentation";

const App = () => {
  const {
    isLoading: isLoadingAirports,
    data: airports,
    error: fetchAirportError,
  } = useFetch(AIRPORT_API_PATH, {
    headers: { "Tenant-Identifier": API_TOKEN },
  });

  const initialFormValue = {
    [FLIGHT_TYPE]: flightOptions.ONE_WAY,
    [ORIGIN_AIRPORT]: "",
    [DESTINATION_AIRPORT]: "",
    [DEPART_DATE]: "",
    [RETURN_DATE]: "",
  };

  const { handleSubmit, control } = useForm();
  const [formValues, setFormValues] = useState(initialFormValue);
  const [dataToDisplay, setData] = useState(null);

  useEffect(() => {
    setData(null);
  }, [formValues]);

  const isRoundTrip = formValues[FLIGHT_TYPE] === flightOptions.ROUND_TRIP;

  const isSearchButtonDisabled = !!(
    isLoadingAirports ||
    fetchAirportError ||
    !formValues[ORIGIN_AIRPORT] ||
    !formValues[DESTINATION_AIRPORT] ||
    !formValues[DEPART_DATE] ||
    (isRoundTrip && !formValues[RETURN_DATE])
  );

  const handleFlightTypeSelect = (e) => {
    setFormValues({
      ...formValues,
      [FLIGHT_TYPE]: e.target.value,
    });
  };

  const handleAirportSelect = (flightWay, airportName) => {
    setFormValues({
      ...formValues,
      [flightWay]: airportName?.name ? airportName.name : "",
    });
  };

  const handleFlightData = (dateType, e) => {
    setFormValues({
      ...formValues,
      [dateType]: e.target.value,
    });
  };

  return (
    <Box sx={formWrapper}>
      <form onSubmit={handleSubmit(() => setData(formValues))}>
        <Stack direction="column" spacing={2}>
          <FlightType
            formValues={formValues}
            handleChange={handleFlightTypeSelect}
            control={control}
          />
          <ErrorBoundary
            isLoading={isLoadingAirports}
            error={fetchAirportError}
          />
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={{ xs: 2, lg: 4 }}
          >
            <FlightRoute
              airports={airports}
              isLoadingData={isLoadingAirports}
              fetchError={fetchAirportError}
              formValues={formValues}
              handleChange={handleAirportSelect}
              control={control}
            />
            <FlightDate
              isRoundTrip={isRoundTrip}
              handleChange={handleFlightData}
              control={control}
            />
          </Stack>
          <SearchFlightButton
            disabled={isSearchButtonDisabled}
            buttonText={buttonText.SEARCH_FLIGHT}
          />
        </Stack>

        {dataToDisplay && (
          <FlightCriteriaPresentation
            dataToDisplay={dataToDisplay}
            isRoundTrip={isRoundTrip}
          />
        )}
      </form>
    </Box>
  );
};

export default App;
