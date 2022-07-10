// Creating the deck of card class
class Card {
    constructor (suit, value, amount){
        this.suit = suit;
        this.value = value;
        this.amount - amount;
    }
}
// Creating the player class
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}
// Creating the deck of cards to be used. Within the deck are the shuffle and deal function
class Deck{
    constructor(){
        this.deck = []
    }
    deckOfCards(){
        const suit = [ "Hearts", "Diamonds", "Spades", "Clubs" ];
        const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace" ];
        // const value = [2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14]
        const valueMap = {
            "2": 2,
            "3": 3, 
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "10": 10,
            "Jack": 11,
            "Queen": 12,
            "King": 13,
            "Ace": 14,
        };
        for( let i = 0; i < suit.length; i++ ) {
            for( let e = 0; e < value.length; e++ ) {
                this.deck.push(new Card ( suit[i], valueMap[value[e]] ) );
                }
            }
        }
            
        
        shuffle() {
            let index = this.deck.length, randomIndex
    
            while (index != 0) {
                randomIndex = Math.floor(Math.random() * index)
                index--
    
                [this.deck[index], this.deck[randomIndex]] = [this.deck[randomIndex], this.deck[index]]
            }
        }
    
        //Evenly divides the deck of cards between each player hand
    
        deal(firstPlayer, secondPlayer) {
            for (let i = 0; i < this.deck.length; i++) {
                if (i % 2 === 0) {
                    firstPlayer.hand.push(this.deck[i])
                }
                else {
                    secondPlayer.hand.push(this.deck[i])
            }
        }
    }   
}
// PLaying the game, calling the previous functions to make sure the deck is shuffeled and dealt out to the players and then each player plays a card.
// From there, the winner of each round is awarded a point and points are totalled at the end of the game to declare a winner. 
class PlayTheGame{
    
    constructor(players, deck){
        this.players = players;
        this.deck = deck;
        let gameDeck = new Deck
            gameDeck.deckOfCards()
            gameDeck.shuffle()
            gameDeck.deal(firstPlayer, secondPlayer) 
            console.log ("Making sure my cards are dealt to the players", firstPlayer, secondPlayer);
        
        }
        startGame() {            
                this.score = 0
                while (firstPlayer.hand.length > 0 && secondPlayer.hand.length > 0) {
                const card1 = firstPlayer.hand.shift();
                const card2 = secondPlayer.hand.shift();
            
                if (card1.value > card2.value) {
                firstPlayer.score += 1;
                console.log(`${firstPlayer.name} is victorious this round! ${firstPlayer.name} played the ${card1.value} of ${card1.suit} and defeated ${secondPlayer.name} who played the ${card2.value} of ${card2.suit}!`);
            }
                else if (card1.value < card2.value){
                    secondPlayer.score += 1;
                    console.log(`${secondPlayer.name} is victorious this round! ${secondPlayer.name} played the ${card2.value} of ${card2.suit} and defeated ${firstPlayer.name} who played the ${card1.value} of ${card1.suit}!`);  
                }
                else {
                    console.log( `Its a tie! There is no winner this round!  ${firstPlayer.name} played the ${card1.value} of ${card1.suit} and ${secondPlayer.name} played the ${card2.value} of ${card2.suit}.`)
            }
        }   
   }
            andTheWinnerIs() {
            if (firstPlayer.score > secondPlayer.score){
            console.log(`${firstPlayer.name} scored ${firstPlayer.score} points and ${secondPlayer.name} scored ${secondPlayer.score} points. ${firstPlayer.name} is the grand champion of WAR!`)
             }    
            else if (firstPlayer.score < secondPlayer.score){
            console.log(`${firstPlayer.name} scored ${firstPlayer.score} points and ${secondPlayer.name} scored ${secondPlayer.score} points. ${secondPlayer.name} is the grand champion of WAR!`)
            }
            else {
            console.log(`${firstPlayer.name} scored ${firstPlayer.score} and ${secondPlayer.name} scored ${secondPlayer.score}. It's a tie! There is no winner, time for another round!`)
        }
    }
}
let firstPlayer = new Player('Mario')
let secondPlayer = new Player('Bowser')
let game = new PlayTheGame
game.startGame()
game.andTheWinnerIs()