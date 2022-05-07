export const getSelectedAirportConnections = (selectedAirport, allAirports) => {
  const matchedAirports = allAirports.find(
    ({ name }) => name === selectedAirport
  );

  return matchedAirports?.connections
    ? matchedAirports.connections.map((airport) => ({
        name: airport.name,
        code: airport.code,
      }))
    : [];
};
