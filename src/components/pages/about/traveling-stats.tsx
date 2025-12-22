import CardFeatured from 'components/shared/card-featured';
import CardScrollArea from 'components/shared/card-scroll-area';

//  ---------------------------------------------------------------------------
//  TYPES
//  ---------------------------------------------------------------------------

interface TravelingStatsProps {
  totalFlights: number;
  totalDistance: number;
  airlines: number;
  airports: number;
}

//  ---------------------------------------------------------------------------
//  UI
//  ---------------------------------------------------------------------------

export default function TravelingStats({ totalFlights, totalDistance, airlines, airports }: TravelingStatsProps) {
  return (
    <CardScrollArea>
      <CardFeatured title={totalFlights.toString()} description="total flights taken" />
      <CardFeatured title={`${Math.round(totalDistance / 1000).toLocaleString()}K`} description="kilometers traveled" />
      <CardFeatured title={airlines.toString()} description="different carriers" />
      <CardFeatured title={airports.toString()} description="unique destinations" />
    </CardScrollArea>
  );
}
