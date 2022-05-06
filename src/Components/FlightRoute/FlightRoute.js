import React, { useEffect, useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

import * as PropTypes from "prop-types";

const FlightRoute = ({ flightRouteWays }) => {
  const { TO, FROM } = flightRouteWays;

  return (
    <>
      <Autocomplete
        disablePortal
        id="flight-origin"
        options={[]}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={FROM} />}
      />

      <Autocomplete
        disablePortal
        disabled={fetchError && true}
        id="flight-destination"
        options={[]}
        sx={{ width: 300 }}
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
};

export default FlightRoute;
