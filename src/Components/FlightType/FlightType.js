import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";
import * as PropTypes from "prop-types";

const FlightType = ({ flightOptions, control }) => {
  const { ONE_WAY, ROUND_TRIP } = flightOptions;

  return (
    <Controller
      name="flightType"
      control={control}
      defaultValue={ONE_WAY}
      aria-label="flight type selection"
      render={({ field }) => (
        <RadioGroup row {...field}>
          <FormControlLabel
            value={ONE_WAY}
            label={ONE_WAY}
            control={<Radio />}
          />
          <FormControlLabel
            value={ROUND_TRIP}
            label={ROUND_TRIP}
            control={<Radio />}
          />
        </RadioGroup>
      )}
    />
  );
};

FlightType.propTypes = {
  flightRouteWays: PropTypes.shape({
    ONE_WAY: PropTypes.string.isRequired,
    ROUND_TRIP: PropTypes.string.isRequired,
  }),
};

export default FlightType;
