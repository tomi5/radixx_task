import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller } from "react-hook-form";
import * as PropTypes from "prop-types";

const FlightType = ({
  flightOptions,
  control,
  formValues: { flightType },
  handleChange,
}) => {
  const { ONE_WAY, ROUND_TRIP } = flightOptions;

  return (
    <Controller
      name="flightType"
      control={control}
      defaultValue={flightType}
      aria-label="flight type selection"
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
  flightRouteWays: PropTypes.shape({
    ONE_WAY: PropTypes.string.isRequired,
    ROUND_TRIP: PropTypes.string.isRequired,
  }),
  control: PropTypes.shape({}),
  formValues: PropTypes.shape({}),
};

export default FlightType;
