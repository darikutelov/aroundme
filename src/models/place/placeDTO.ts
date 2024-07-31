import { Geometry } from "../location/location"

export type PlaceDTO = {
  name: string
  icon?: string
  photos: Photo[]
  imageUrl?: string
  address?: string
  opening_hours?: OpeningHours
  isOpenNow?: boolean
  rating?: number
  isClosedTemporarily?: boolean
  placeId?: string
  reference: string
  business_status?: string
  geometry: Geometry
  user_ratings_total?: number
  vicinity: string
}

export type OpeningHours = {
  open_now: boolean
}

export type Photo = {
  height: number
  html_attributions: any[]
  photo_reference: string
  width: number
}
