# Pokemon TCG App
Users can search and view all Pokemon TCG Cards using [Pokemon TCG API](https://dev.pokemontcg.io/). Users can sign-up to build their own decks, create lists of their rarest cards, and create a cards wishlist.


## Link to the API to used
> [Pokemon TCG API link](https://pokemontcg.io/)

## Example data response from API
```json
{
     "id": "hgss1-1",
     "name": "Arcanine",
     "supertype": "Pokémon",
     "subtypes": [
          "Stage 1"
     ],
     "hp": "110",
     "types": [
          "Fire"
     ],
     "evolvesFrom": "Growlithe",
     "attacks": [
          {
               "name": "Sharp Fang",
               "cost": [
                    "Fire",
                    "Colorless"
               ],
               "convertedEnergyCost": 2,
               "damage": "50",
               "text": ""
          },
          {
               "name": "Fire Mane",
               "cost": [
                    "Fire",
                    "Colorless",
                    "Colorless",
                    "Colorless"
               ],
               "convertedEnergyCost": 4,
               "damage": "90",
               "text": ""
          }
     ],
     "weaknesses": [
          {
               "type": "Water",
               "value": "×2"
          }
     ],
     "retreatCost": [
          "Colorless",
          "Colorless"
     ],
     "convertedRetreatCost": 2,
     "set": {
          "id": "hgss1",
          "name": "HeartGold & SoulSilver",
          "series": "HeartGold & SoulSilver",
          "printedTotal": 123,
          "total": 124,
          "legalities": {
               "unlimited": "Legal"
          },
          "ptcgoCode": "HS",
          "releaseDate": "2010/02/10",
          "updatedAt": "2018/03/04 10:35:00",
          "images": {
               "symbol": "https://images.pokemontcg.io/hgss1/symbol.png",
               "logo": "https://images.pokemontcg.io/hgss1/logo.png"
          }
     },
     "number": "1",
     "artist": "Naoki Saito",
     "rarity": "Rare Holo",
     "flavorText": "This legendary Chinese Pokémon is considered magnificent. Many people are enchanted by its grand mane.",
     "nationalPokedexNumbers": [
          59
     ],
     "legalities": {
          "unlimited": "Legal"
     },
     "images": {
          "small": "https://images.pokemontcg.io/hgss1/1.png",
          "large": "https://images.pokemontcg.io/hgss1/1_hires.png"
     },
     "tcgplayer": {
          "url": "https://prices.pokemontcg.io/tcgplayer/hgss1-1",
          "updatedAt": "2022/05/11",
          "prices": {
               "holofoil": {
                    "low": 8.49,
                    "mid": 19.5,
                    "high": 39.79,
                    "market": 22.12,
                    "directLow": 13.99
               },
               "reverseHolofoil": {
                    "low": 16.34,
                    "mid": 23.83,
                    "high": 46.5,
                    "market": 13.61
               }
          }
     },
     "cardmarket": {
          "url": "https://prices.pokemontcg.io/cardmarket/hgss1-1",
          "updatedAt": "2022/05/11",
          "prices": {
               "averageSellPrice": 6.52,
               "lowPrice": 0.59,
               "trendPrice": 5.21,
               "reverseHoloSell": 5,
               "reverseHoloLow": 0.59,
               "reverseHoloTrend": 5.1,
               "lowPriceExPlus": 2.5,
               "avg1": 11,
               "avg7": 7.25,
               "avg30": 5.42,
               "reverseHoloAvg1": 5.49,
               "reverseHoloAvg7": 4.23,
               "reverseHoloAvg30": 4.62
          }
     }
}
```

## Visual of your component hierarchy
![PokemonTCG App](https://user-images.githubusercontent.com/101363667/168511402-edee5d29-b1ec-4b2b-bd10-a710b1e9c54f.jpeg)

## Wire Frames
<img width="605" alt="Screen Shot 2022-05-15 at 10 48 14 PM" src="https://user-images.githubusercontent.com/101363667/168511641-a6eee964-b494-443e-89e0-8de377b77d76.png">

## User Stories
>  _As a User, I want search for cards, so that I could find a specific card_
 _As a User, I want view a card's details, so that I could evaluate a specific card_
_As a User, I want search for a Booster Set, so that I could see all the cards included in the set_

### MVP Goals
- Header Component
     - Search Component
          - Link to API to search by name, set, specific card
- Sidebar Component
     - Links to Booster Sets
- Main Component
     - Index Page
          - Link to API to display cards
     - Show Page
          - Link to API to display card details
- Footer Component

### Stretch Goals (if applicable)
- User Register/Sign-In
     - User CRUD List
           - Favorite List
           - Trade List
           - Wish List

