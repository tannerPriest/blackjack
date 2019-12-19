# Blackjack
 ### General Assembly Project 1 - Blackjack

- A web browser based game of the card game Black Jack built from HTML, CSS, and Javascript.

[BlackJack game launched with Netlify](https://stupefied-jones-c2bbe0.netlify.com/)

---
## Screenshots

![alt text](https://github.com/killerwhiteshark/blackjack/blob/master/gameScreenShots/titleScreenshot.png?raw=true "Title Screen")

![alt text](https://github.com/killerwhiteshark/blackjack/blob/master/gameScreenShots/playerWin.png?raw=true "Player wins!")

![alt text](https://github.com/killerwhiteshark/blackjack/blob/master/gameScreenShots/playerTurn.png?raw=true "Player in turn")

![alt text](https://github.com/killerwhiteshark/blackjack/blob/master/gameScreenShots/dealerWin.png?raw=true "Player busts, Dealer wins!")

---- 
## Technologies Used

- Bootstrap v4, JavaScript, HTML, and CSS.

---
## Instuctions and game rules.

- This game of Blackjack only uses one deck. The user is the only player and the dealer is the only opponent. The dealer does deal one card at a time to player then dealer. You are reduced to only allowed to bet $5 and $10 for simplicity. You start with $100. If you are delt 21 or blackjack, the hand ends and you are awarded your winnings accordingly. If you click the hit button, you are delt a new card and your value is increased. But if your new card pushes your total value over 21, you loose your bet. If you stay with your current hand, the dealer flips its second card and continues to hit if dealers total amount is equal too or less than 16. If either go over 21, that player busts. If you get an Ace and a card valued to ten first deal, you win 1.5 to 1 your bet made. Cards are reshuffled after deck goes below 25 cards.  

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

- Aces are recgonized as 11 and auto changed to 1 if it is in the players hands insterest to staying below 21. 

---
## Next Steps

- Adding a split function. Manipulating the DOM and have a place to compare and add cards to split hands. 

- Adding Double Down feature for more game play options. 

- Update and change visual effects, looks and feel of the page. 