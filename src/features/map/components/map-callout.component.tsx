import { CompactPlaceInfo } from "@/src/components/places/compact-place-info.component"
import { Place } from "@/src/models/place/place"

export const MapCallout = ({ place }: { place: Place }) => {
  return <CompactPlaceInfo place={place} />
}
