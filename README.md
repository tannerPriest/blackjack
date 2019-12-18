# Blackjack
 ### General Assembly Project 1 - Blackjack

- A web browser based game of the card game Black Jack built from HTML, CSS, and Javascript.

---
## Screenshots

![alt text](https://github.com/killerwhiteshark/blackjack/blob/master/gameScreenShots/titleScreenshot.png?raw=true "Title Screen")



---- 
## WireFrames

- Bootstrap v4

---

## Game Logic

- Composed of 4 buttons, all of the event listeners are at below of the const and let variables in the JS file. 
- All DOM selectors are in const variables.

- The Deck of cards are sorted each card by objects with a key of total value King = "value: 10" and image key with a value path of each card.
 The all card objects are all sorted in the deck array. 
 - A const of deckArray is assigned to shuffle Deck when page loads, Render() is keeping track of how many cards are in the shuffled array. When Deck array becomes less than 25 cards, the shuffle(), will empty the replace the Deck with original deck and reshuffle that. 

- Balance has a start of 100 credits and user is reduced to only allowed to bet either 5 or 10 credits a hand. 
-Balance does display message and usermasked to reset game if balance is less that bet amount.

- Cards are delt out one at a time. Player is checked for 21. If Black Jack or 21 player auto wins and is awarded the bet amount accordingly. 

- Hit/Stay buttons are disabled when waiting for bet, and enabled when bet is made. Bet buttons are then disabled and waits for next deal. 

- Computer Dealer is built to hit if dealer hand is below 17. 

- Aces are recgonized and auto changed if it is in the players hands insterest to staying below 21. 