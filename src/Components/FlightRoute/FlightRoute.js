import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

import * as PropTypes from "prop-types";
import { routeSelector } from "./style";

const FlightRoute = ({
  flightRouteWays,
  airports,
  isLoadingData,
  fetchError,
}) => {
  const { TO, FROM } = flightRouteWays;
  const [options, setOptions] = useState([]);
  useEffect(() => {
    !isLoadingData && !fetchError && setOptions([...airports?.airports]);
  }, [airports, isLoadingData, fetchError]);

  return (
    <>
      <Autocomplete
        disablePortal
        disabled={fetchError && true}
        id="flight-origin"
        options={options}
        getOptionLabel={(option) => option.name}
        sx={routeSelector}
        renderInput={(params) => <TextField {...params} label={FROM} />}
      />

      <Autocomplete
        disablePortal
        disabled={fetchError && true}
        id="flight-destination"
        options={options}
        getOptionLabel={(option) => option.name}
        sx={routeSelector}
        renderInput={(params) => <TextField {...params} label={TO} />}
      />
    </>
  );
};

FlightRoute.propTypes = {
  flightRouteWays: PropTypes.shape({
    TO: PropTypes.string.isRequired,
    FROM: PropTypes.string.isRequired,
  }),
  airports: PropTypes.shape({}),
  isLoadingData: PropTypes.bool.isRequired,
  fetchError: PropTypes.shape({}),
};

export default FlightRoute;
