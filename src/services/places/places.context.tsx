import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react"
import { Place } from "@/src/models/place/place"
import { placesRequest, placesTransform } from "./places.service"
import { useLocationContext } from "../location/location.context"

type PlacesContextType = {
  places: Place[]
  isLoading: boolean
  error: string
}

const defaultValues: PlacesContextType = {
  places: [],
  isLoading: false,
  error: ""
}

const PlacesContext = createContext<PlacesContextType>(defaultValues)

export const PlacesContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [places, setPlaces] = useState<Place[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { location } = useLocationContext()

  const loadPlaces = async (loc: string) => {
    setIsLoading(true)
    setPlaces([])

    try {
      const results = await placesRequest(loc)
      const places = placesTransform(results)
      setError(null)
      setPlaces(places)
    } catch (error) {
      setPlaces([])
      setError(String(error))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`
      loadPlaces(locationString)
    }
  }, [location])

  return (
    <PlacesContext.Provider
      value={{
        places,
        isLoading,
        error: error ?? ""
      }}
    >
      {children}
    </PlacesContext.Provider>
  )
}

export function usePlacesContext() {
  return useContext(PlacesContext)
}
