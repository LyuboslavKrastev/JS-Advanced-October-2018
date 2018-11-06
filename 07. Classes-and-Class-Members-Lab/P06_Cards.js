const result = (function(){
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    
    const validSuits =  {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };
 
    class Card {
        constructor(face, suit){
            this._face = null;
            this._suit = null;
            this.face = face;
            this.suit = suit;
        }

        get suit() {
            return this._suit;
        }
    
        set suit(val){
            if(!Object.values(validSuits).includes(val)){
                throw new Error('Invalid card suit');
            }
            this._suit = val;
        }

        get face(){
            return this._face;
        }
    
        set face(val){
            if(!validFaces.includes(val)){
                throw new Error('Invalid card face');
            }
            this._face = val;
        }
    }
   
    return {
        Suits: validSuits,
        Card
    }
}());

let Card = result.Card;
let suits = result.Suits;

let card = new Card('Q', suits.CLUBS);