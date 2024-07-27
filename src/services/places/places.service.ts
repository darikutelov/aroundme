import camelize from "camelize-ts"
import { Place } from "@/src/models/places/place"
import { mockImages, mocks, ResponseObj } from "./mock"
import { PlaceDTO } from "@/src/models/places/placeDTO"

export function placesTransform(places: PlaceDTO[]): Place[] {
  let mappedPlaces: PlaceDTO[] = places.map((place) => {
    const image = mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    return {
      ...place,
      imageUrl: image,
      address: place.vicinity,
      isOpenNow: place.opening_hours && place.opening_hours.open_now,
      isClosedTemporarily: place.business_status === "CLOSED_TEMPORARILY"
    }
  })

  return camelize(mappedPlaces)
}

export async function placesRequest(
  location: string = "37.7749295,-122.4194155"
) {
  return new Promise<PlaceDTO[]>((resolve, reject) => {
    const responseObj: ResponseObj = mocks[location]
    if (!responseObj) {
      reject("location not found")
    }

    setTimeout(() => resolve(responseObj.results), 1000)
  })
}
