import React, { useEffect, useState } from "react";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import * as PropTypes from "prop-types";
import { routeSelector } from "./style";
import { flightRouteWays } from "../../common/translations";
import { DESTINATION_AIRPORT, ORIGIN_AIRPORT } from "../../common/constants";

const FlightRoute = ({
  airports,
  isLoadingData,
  fetchError,
  control,
  handleChange,
}) => {
  const { TO, FROM } = flightRouteWays;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    !isLoadingData && !fetchError && setOptions([...airports?.airports]);
  }, [airports, isLoadingData, fetchError]);

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
            options={options}
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
            options={options}
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
  fetchError: PropTypes.shape({}),
  control: PropTypes.shape({}),
};

export default FlightRoute;
