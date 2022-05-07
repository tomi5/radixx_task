import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";
import * as PropTypes from "prop-types";
import { FLIGHT_TYPE } from "../../common/constants";
import { flightOptions } from "../../common/translations";

const FlightType = ({ formValues, handleChange, control }) => {
  const { ONE_WAY, ROUND_TRIP } = flightOptions;

  return (
    <Controller
      name={FLIGHT_TYPE}
      control={control}
      defaultValue={formValues[FLIGHT_TYPE]}
      render={({ field }) => (
        <RadioGroup row {...field}>
          <FormControlLabel
            value={ONE_WAY}
            onChange={(e) => handleChange(e)}
            label={ONE_WAY}
            control={<Radio />}
          />
          <FormControlLabel
            value={ROUND_TRIP}
            onChange={handleChange}
            label={ROUND_TRIP}
            control={<Radio />}
          />
        </RadioGroup>
      )}
    />
  );
};

FlightType.propTypes = {
  formValues: PropTypes.shape({}),
  control: PropTypes.shape({}),
};

export default FlightType;
