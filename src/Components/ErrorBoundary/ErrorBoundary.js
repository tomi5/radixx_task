import React from "react";
import { Alert } from "@mui/material";
import * as PropTypes from "prop-types";
import { errors, loadingData } from "../../common/translations";

const ErrorBoundary = ({ isLoading, error }) => {
  return (
    <>
      {isLoading && (
        <Alert severity="info">{loadingData.LoadingAirports}</Alert>
      )}
      {error && <Alert severity="error">{errors.FETCH_ERROR}</Alert>}
    </>
  );
};

ErrorBoundary.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.shape({}),
};

export default ErrorBoundary;
