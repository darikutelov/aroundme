import camelize from "camelize-ts"

import { locations } from "./locations.mock"
import { LocationDetails } from "@/src/models/location/location"

export const locationRequest = (
  searchTerm: string
): Promise<LocationDetails> => {
  return new Promise((resolve, reject) => {
    const locationMock: LocationDetails = locations[searchTerm]
    if (!locationMock) {
      reject("not found")
    }
    resolve(locationMock)
  })
}

export const locationTransform = (result: LocationDetails) => {
  const formattedResponse = camelize(result)
  const { geometry } = formattedResponse.results[0]
  const { lat, lng } = geometry.location

  return { lat, lng, viewport: geometry.viewport }
}
