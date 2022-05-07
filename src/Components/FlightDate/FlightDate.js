import React from "react";
import { TextField } from "@mui/material";
import * as PropTypes from "prop-types";
import { dataPicker } from "./style";
import { Controller } from "react-hook-form";
import { flightDateName } from "../../common/translations";
import { DEPART_DATE, RETURN_DATE } from "../../common/constants";

const FlightDate = ({ isRoundTrip, handleChange, control }) => {
  const { DEPART, RETURN } = flightDateName;

  return (
    <>
      <Controller
        name={DEPART_DATE}
        control={control}
        render={({ field }) => (
          <TextField
            id={DEPART_DATE}
            label={DEPART}
            type="date"
            defaultValue=""
            sx={dataPicker}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChange(DEPART_DATE, e)}
          />
        )}
      />
      <Controller
        name={RETURN_DATE}
        control={control}
        render={({ field }) => (
          <TextField
            id={RETURN_DATE}
            label={RETURN}
            type="date"
            defaultValue=""
            disabled={!isRoundTrip}
            sx={dataPicker}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChange(RETURN_DATE, e)}
          />
        )}
      />
    </>
  );
};

FlightDate.propTypes = {
  isRoundTrip: PropTypes.bool.isRequired,
  control: PropTypes.shape({}),
};

export default FlightDate;
