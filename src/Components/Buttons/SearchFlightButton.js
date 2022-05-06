import React from "react";
import { Button } from "@mui/material";
import * as PropTypes from "prop-types";

const SearchFlightButton = ({ disabled, buttonText }) => {
  return (
    <Button
      variant="contained"
      sx={{ alignSelf: "end" }}
      size="large"
      aria-label={buttonText}
      disabled={disabled}
      type="submit"
    >
      {buttonText}
    </Button>
  );
};

SearchFlightButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SearchFlightButton;
