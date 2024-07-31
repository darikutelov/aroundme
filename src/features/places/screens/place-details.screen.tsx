import React, { useState } from "react"
import { ScrollView } from "react-native"
import { List } from "react-native-paper"

import { PlaceInfoCard } from "@/src/features/places/components/place-info-card/places.info.card"
import { SafeArea } from "@/src/components/safe-area.component"

type Props = {
  route: any
}

export const PlaceDetailScreen = ({ route }: Props) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false)
  const [lunchExpanded, setLunchExpanded] = useState(false)
  const [dinnerExpanded, setDinnerExpanded] = useState(false)
  const [drinksExpanded, setDrinksExpanded] = useState(false)

  const { place } = route.params

  return (
    <SafeArea>
      <PlaceInfoCard place={place} />
      <ScrollView>
        <List.Accordion
          title='Breakfast'
          left={(props) => <List.Icon {...props} icon='bread-slice' />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title='Eggs Benedict' />
          <List.Item title='Classic Breakfast' />
        </List.Accordion>

        <List.Accordion
          title='Lunch'
          left={(props) => <List.Icon {...props} icon='hamburger' />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='Burger w/ Fries' />
          <List.Item title='Steak Sandwich' />
          <List.Item title='Mushroom Soup' />
        </List.Accordion>

        <List.Accordion
          title='Dinner'
          left={(props) => <List.Icon {...props} icon='food-variant' />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='Spaghetti Bolognese' />
          <List.Item title='Veal Cutlet with Chicken Mushroom Rotini' />
          <List.Item title='Steak Frites' />
        </List.Accordion>

        <List.Accordion
          title='Drinks'
          left={(props) => <List.Icon {...props} icon='cup' />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='Coffee' />
          <List.Item title='Tea' />
          <List.Item title='Modelo' />
          <List.Item title='Coke' />
          <List.Item title='Fanta' />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  )
}
