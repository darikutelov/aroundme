import { LocationCtx } from "@/src/models/location/location"
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react"
import { locationRequest, locationTransform } from "./location.service"

type LocationContextType = {
  isLoading: boolean
  error: string | null
  location: LocationCtx
  search: (searchKeyword: string) => Promise<void>
  keyword: string
}

const defaultValues: LocationContextType = {
  isLoading: false,
  error: "",
  location: {
    lat: 37.7749295,
    lng: -122.4194155,
    viewport: {
      northeast: { lat: 37.812, lng: -122.3482 },
      southwest: { lat: 37.70339999999999, lng: -122.527 }
    }
  },
  search: () => Promise.resolve(),
  keyword: ""
}

const LocationContext = createContext<LocationContextType>(defaultValues)

export const LocationContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [location, setLocation] = useState<LocationCtx>(defaultValues.location)
  const [keyword, setKeyword] = useState<string>("san francisco")

  useEffect(() => {
    onSearch(keyword)
  }, [])

  const onSearch = async (searchKeyword: string) => {
    setIsLoading(true)

    if (!searchKeyword.length) {
      return
    }

    setKeyword(searchKeyword)

    try {
      const results = await locationRequest(searchKeyword.toLowerCase())
      const camelizedResults = locationTransform(results)
      setLocation(camelizedResults)
      setError(null)
    } catch (error) {
      setLocation(defaultValues.location)
      setError(String(error))
    } finally {
      setIsLoading(false)
    }
    console.log(location)
  }
  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}

export const useLocationContext = () => {
  return useContext(LocationContext)
}
