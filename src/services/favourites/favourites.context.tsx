import { createContext, ReactNode, useContext, useState } from "react"
import { Place } from "@/src/models/place/place"

type FavoriesContextType = {
  favourites: Place[]
  addToFavourites: (place: Place) => void
  removeFromFavourites: (place: Place) => void
}

const defaultValues: FavoriesContextType = {
  favourites: [],
  addToFavourites: (place: Place) => {},
  removeFromFavourites: (place: Place) => {}
}

export const FavouritesContext =
  createContext<FavoriesContextType>(defaultValues)

export const FavouritesContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [favourites, setFavourites] = useState<Place[]>([])

  const add = (place: Place) => {
    setFavourites([...favourites, place])
  }

  const remove = (place: Place) => {
    const newFavourites = favourites.filter((x) => x.placeId !== place.placeId)

    setFavourites(newFavourites)
  }
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove
      }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavouritesContext() {
  return useContext(FavouritesContext)
}
