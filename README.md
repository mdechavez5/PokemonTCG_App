# Pokemon TCG App
Browser application that welcomes Pokemon TCG collectors and enthusiasts. Users can search and view all Pokemon TCG Cards using [Pokemon TCG API](https://dev.pokemontcg.io/). Application based on REACT, working with a third-party API to find and deliver product information.

## Technologies Used
HTML | CSS | JavaScript | REACT | [Pokemon TCG API](https://pokemontcg.io/)

## Getting Started
- Application Usage:
     - Navigate to [deployed app](https://mdpokemontcgapp.netlify.app/)
     - Search For Cards
          - Searching by name -> "name:..."
          - Searching by set -> "set.id:..."
          - Searching by type -> "types:..."
- Contributor Usage:
     - Fork & Clone Repository
     - Install Dependencies (npm i)
     - Create Development Branch
     - Submit Issue or Pull Request
          - If you identify bugs, submit an issue on the Git repo. Please detail the bug in your issue. 
          - If you know how to fix it, feel free to note the methods you would use. You could also submit a pull request with suggested code to fix it.

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
<img src ="https://user-images.githubusercontent.com/101363667/169394543-a30387c5-f0ca-482e-a629-92ba178efc82.png" alt="Wireframe">
<img src="https://user-images.githubusercontent.com/101363667/169392219-a308f24f-dc45-44b5-a9aa-39343133bb37.png" alt="Home Page">
<img width="972" alt="Screen Shot 2022-06-23 at 7 44 30 PM" src="https://user-images.githubusercontent.com/101363667/175432658-d075481c-dbc3-48d6-aaf6-2f8e094cb877.png">
<img src="https://user-images.githubusercontent.com/101363667/169392644-32513a6e-d7c0-449b-81bc-6409b2025abc.png" alt="Charizard Card Page">
<img src="https://user-images.githubusercontent.com/101363667/169397527-00c43741-6aa3-4194-8207-bae217c85410.png" alt="Set Index Page"


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

