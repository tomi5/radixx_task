import React, { useEffect, useState } from "react";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import * as PropTypes from "prop-types";
import { routeSelector } from "./style";
import { flightRouteWays } from "../../common/translations";
import { DESTINATION_AIRPORT, ORIGIN_AIRPORT } from "../../common/constants";
import { getSelectedAirportConnections } from "../../common/utils";

const FlightRoute = ({
  airports,
  isLoadingData,
  fetchError,
  formValues,
  handleChange,
  control,
}) => {
  const { TO, FROM } = flightRouteWays;
  const [options, setOptions] = useState([]);

  const [filteredOrigins, setFilteredOrigins] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  useEffect(() => {
    !isLoadingData &&
      !fetchError &&
      airports &&
      setOptions([...airports?.airports]);
  }, [airports, isLoadingData, fetchError]);

  useEffect(() => {
    formValues[ORIGIN_AIRPORT] &&
      setFilteredDestinations(() =>
        getSelectedAirportConnections(formValues[ORIGIN_AIRPORT], options)
      );
  }, [formValues, options]);

  useEffect(() => {
    formValues[DESTINATION_AIRPORT] &&
      setFilteredOrigins(() =>
        getSelectedAirportConnections(formValues[DESTINATION_AIRPORT], options)
      );
  }, [formValues, options]);

  const filterOptions = createFilterOptions({
    stringify: ({ name, code }) => `${name} ${code}`,
  });

  return (
    <>
      <Controller
        name={ORIGIN_AIRPORT}
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            disablePortal
            disabled={fetchError && true}
            options={
              formValues[DESTINATION_AIRPORT] ? filteredOrigins : options
            }
            filterOptions={filterOptions}
            getOptionLabel={({ name }) => name}
            sx={routeSelector}
            id={ORIGIN_AIRPORT}
            onChange={(e, data) => handleChange(ORIGIN_AIRPORT, data)}
            renderInput={(params) => <TextField {...params} label={FROM} />}
          />
        )}
      />
      <Controller
        name={DESTINATION_AIRPORT}
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            disablePortal
            disabled={fetchError && true}
            options={
              formValues[ORIGIN_AIRPORT] ? filteredDestinations : options
            }
            filterOptions={filterOptions}
            getOptionLabel={({ name }) => name}
            sx={routeSelector}
            id={DESTINATION_AIRPORT}
            onChange={(e, data) => handleChange(DESTINATION_AIRPORT, data)}
            renderInput={(params) => <TextField {...params} label={TO} />}
          />
        )}
      />
    </>
  );
};

FlightRoute.propTypes = {
  airports: PropTypes.shape({}),
  isLoadingData: PropTypes.bool.isRequired,
  fetchError: PropTypes.bool,
  formValues: PropTypes.shape({}),
  control: PropTypes.shape({}),
  handleChange: PropTypes.func.isRequired,
};

export default FlightRoute;
