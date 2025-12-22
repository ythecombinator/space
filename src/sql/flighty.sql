SELECT Flight.id,
    Flight.number,
    Airline.iata as airlineIata,
    Airline.icao as airlineIcao,
    Airline.name as airlineName,
    AirportDep.iata as depAirportIata,
    AirportDep.city as depCity,
    AirportArr.iata as arrAirportIata,
    AirportArr.city as arrCity,
    Flight.equipmentIata as aircraftIata,
    Flight.equipmentIcao as aircraftIcao,
    Flight.equipmentModelName as aircraftName,
    Flight.equipmentTailNumber as aircraftTailNumber,
    Flight.distance,
    AirportDep.timezoneIdentifier as depTz,
    Flight.departureScheduleGateOriginal as depTimeOriginal,
    Flight.departureScheduleGateEstimated as depTimeEstimated,
    Flight.departureScheduleGateActual as depTimeActual,
    Flight.departureTerminal as depTerminal,
    Flight.departureGate as depGate,
    AirportArr.timezoneIdentifier as arrTz,
    Flight.arrivalScheduleGateOriginal as arrTimeOriginal,
    Flight.arrivalScheduleGateEstimated as arrTimeEstimated,
    Flight.arrivalScheduleGateActual as arrTimeActual,
    Flight.arrivalTerminal as arrTerminal,
    Flight.arrivalGate as arrGate
FROM UserFlight
    JOIN Flight ON Flight.id = UserFlight.flightId
    JOIN Airline ON Airline.id = Flight.airlineId
    JOIN Airport as AirportDep ON AirportDep.id = Flight.departureAirportId
    JOIN Airport as AirportArr ON AirportArr.id = Flight.scheduledarrivalAirportId
    LEFT JOIN Ticket ON Ticket.flightId = Flight.id
WHERE Flight.deleted IS NULL
    AND UserFlight.deleted IS NULL
    AND UserFlight.isMyFlight = 1
    AND UserFlight.isRandom = 0
    AND (
        UserFlight.importSource IS NULL
        OR UserFlight.importSource != 'CONNECTED_FRIEND'
    )