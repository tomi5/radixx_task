import React from "react";

import * as PropTypes from "prop-types";
import {
  DEPART_DATE,
  DESTINATION_AIRPORT,
  ORIGIN_AIRPORT,
  RETURN_DATE,
  FLIGHT_TYPE,
} from "../../common/constants";
import {
  FLIGHT_CRITERIA_SUMMARY,
  FLIGHT_OPTION,
  flightDateName,
  flightRouteWays,
} from "../../common/translations";
import { Card, CardContent, Typography } from "@mui/material";

const FlightCriteriaPresentation = ({ dataToDisplay, isRoundTrip }) => {
  const renderSummaryPortion = (title, text) => (
    <>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
        {title}:
      </Typography>
      <Typography sx={{ mb: 1.5, fontSize: 18 }} color="text.primary">
        {text}
      </Typography>
    </>
  );

  return (
    <Card variant="outlined" sx={{ marginTop: "50px" }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          {FLIGHT_CRITERIA_SUMMARY}
        </Typography>

        {renderSummaryPortion(FLIGHT_OPTION, dataToDisplay[FLIGHT_TYPE])}
        {renderSummaryPortion(
          flightRouteWays.FROM,
          dataToDisplay[ORIGIN_AIRPORT]
        )}
        {renderSummaryPortion(
          flightRouteWays.TO,
          dataToDisplay[DESTINATION_AIRPORT]
        )}
        {renderSummaryPortion(
          flightDateName.DEPART,
          dataToDisplay[DEPART_DATE]
        )}
        {isRoundTrip &&
          renderSummaryPortion(
            flightDateName.RETURN,
            dataToDisplay[RETURN_DATE]
          )}
      </CardContent>
    </Card>
  );
};

FlightCriteriaPresentation.propTypes = {
  isRoundTrip: PropTypes.bool.isRequired,
  dataToDisplay: PropTypes.shape({}),
};

export default FlightCriteriaPresentation;
