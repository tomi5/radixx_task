import "../../App.css";
import { FormControl } from "@mui/material";
import { buttonText } from "../../Translations/translations";
import FlightRoute from "../FlightRoute/FlightRoute";
import FlightType from "../FlightType/FlightType";
import FlightDate from "../FlightDate/FlightDate";
import SearchFlightButton from "../Buttons/SearchFlightButton";

const App = () => {
  return (
    <FormControl>
      <FlightType />
      <FlightRoute />
      <FlightDate />
      <SearchFlightButton buttonText={buttonText.SEARCH_FLIGHT} />
    </FormControl>
  );
};

export default App;
