import React from "react";
import { Button } from "@mui/material";
import * as PropTypes from "prop-types";

const SearchFlightButton = ({ buttonText }) => {
  return (
    <Button
      variant="contained"
      sx={{ alignSelf: "end" }}
      size="large"
      aria-label={buttonText}
    >
      {buttonText}
    </Button>
  );
};

SearchFlightButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default SearchFlightButton;
