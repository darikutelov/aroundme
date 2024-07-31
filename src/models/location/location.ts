export type LocationsMap = {
  [key: string]: LocationDetails
}

export type LocationDetails = {
  results: PlaceLocation[]
  status?: string
}

export type PlaceLocation = {
  geometry: Geometry
}

export type Geometry = {
  location: Location
  viewport: Viewport
}

export type Viewport = {
  northeast: Location
  southwest: Location
}

export type Location = {
  lng: number
  lat: number
}

export type LocationCtx = {
  lng: number
  lat: number
  viewport: Viewport
}
