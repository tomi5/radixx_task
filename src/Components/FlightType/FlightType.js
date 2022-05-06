import { useState } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import * as PropTypes from "prop-types";

const FlightType = ({ flightOptions }) => {
  const { ONE_WAY, ROUND_TRIP } = flightOptions;
  const [value, setValue] = useState(ONE_WAY);

  const handleRadioChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <RadioGroup
      row
      aria-labelledby="flight type selection"
      value={value}
      onChange={handleRadioChange}
      name="flight-type"
    >
      <FormControlLabel value={ONE_WAY} label={ONE_WAY} control={<Radio />} />
      <FormControlLabel
        value={ROUND_TRIP}
        label={ROUND_TRIP}
        control={<Radio />}
      />
    </RadioGroup>
  );
};

FlightType.propTypes = {
  flightRouteWays: PropTypes.shape({
    ONE_WAY: PropTypes.string.isRequired,
    ROUND_TRIP: PropTypes.string.isRequired,
  }),
};

export default FlightType;
