import React from "react";
import { TextField } from "@mui/material";
import * as PropTypes from "prop-types";

const FlightDate = ({ flightDateName }) => {
  const { DEPART, RETURN } = flightDateName;

  return (
    <>
      <TextField
        id={DEPART}
        label={DEPART}
        type="date"
        defaultValue=""
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id={RETURN}
        label={RETURN}
        type="date"
        defaultValue=""
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
};

FlightDate.propTypes = {
  flightDateName: PropTypes.shape({
    DEPART: PropTypes.string.isRequired,
    RETURN: PropTypes.string.isRequired,
  }),
};

export default FlightDate;