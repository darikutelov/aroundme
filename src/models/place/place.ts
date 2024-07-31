import { Geometry } from "../location/location"

export type Place = {
  name: string
  icon?: string
  photos: Photo[]
  imageUrl?: string
  address?: string
  openningHours?: OpeningHours
  isOpenNow?: boolean
  rating?: number
  isClosedTemporarily?: boolean
  placeId?: string
  reference: string
  businessStatus?: string
  geometry: Geometry
  userRatingsTotal?: number
  vicinity: string
}

export type OpeningHours = {
  openNow: boolean
}

export type Photo = {
  height: number
  htmlAttributions: any[]
  photoReference: string
  width: number
}
