SELECT Flight.number,
    Airline.iata as airlineIata,
    Airline.name as airlineName,
    AirportDep.iata as depAirportIata,
    AirportArr.iata as arrAirportIata,
    Flight.distance,
    Flight.departureScheduleGateOriginal as depTimeOriginal
FROM UserFlight
    JOIN Flight ON Flight.id = UserFlight.flightId
    JOIN Airline ON Airline.id = Flight.airlineId
    JOIN Airport as AirportDep ON AirportDep.id = Flight.departureAirportId
    JOIN Airport as AirportArr ON AirportArr.id = Flight.scheduledarrivalAirportId
WHERE Flight.deleted IS NULL
    AND UserFlight.deleted IS NULL
    AND UserFlight.isMyFlight = 1
    AND UserFlight.isRandom = 0
    AND (
        UserFlight.importSource IS NULL
        OR UserFlight.importSource != 'CONNECTED_FRIEND'
    )