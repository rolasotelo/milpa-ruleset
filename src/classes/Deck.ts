import {Card} from "./Card";
import {
    CARD_TYPE,
    CROP,
    CROP_DECK_DISTRIBUTION,
    CROP_DECK_SIZE, CROP_HAND_SIZE, ERROR,
    GOOD,
    GOOD_DECK_DISTRIBUTION,
    GOOD_DECK_SIZE, GOOD_HAND_SIZE
} from "../common";
import {Corn, Chilli} from "./crops";
import {Hand} from "./Hand";

export class Deck {
    private _cards: Card[] = []

    constructor(public readonly type: CARD_TYPE) {
        this._cards = this.initializeDeck(type);
        this.shuffleDeck()
    }

    get cards() {
        return this._cards
    }

    private initializeDeck(type: CARD_TYPE): Card[] {
        let cards: Card[] = []
        if (type === CARD_TYPE.CROP) {
            for (let crop in CROP_DECK_DISTRIBUTION) {

                let cardsToAdd = Array.from(Array(CROP_DECK_DISTRIBUTION[crop as keyof typeof CROP]), () => {return Deck.createCard(CROP[crop as keyof typeof CROP])})
                cards.push(...cardsToAdd as Card[])
            }
        } else {
            for (let good in GOOD_DECK_DISTRIBUTION) {
                let cardsToAdd = Array.from(Array(GOOD_DECK_DISTRIBUTION[good as keyof typeof GOOD]), () => Deck.createCard(GOOD[good as keyof typeof GOOD]))
                cards.push(...cardsToAdd as Card[])
            }
        }
        if(cards.length != CROP_DECK_SIZE && type == CARD_TYPE.CROP || cards.length != GOOD_DECK_SIZE && type == CARD_TYPE.GOOD) throw new Error(ERROR.INVALID_DECK)


        return cards
    }

    public static createCard(card: CROP | GOOD): Card {

        switch (card) {

            case CROP.CORN:
                return new Corn()

            case CROP.CHILLI:
                return new Chilli()

            default:
                throw new Error(ERROR.INVALID_CARD)
        }
    }

    private shuffleDeck(){
        let currentIndex = this._cards.length,
            randomIndex;
        let deck = this._cards.slice()

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [deck[currentIndex], deck[randomIndex]] = [
                deck[randomIndex],
                deck[currentIndex],
            ];
        }
        this._cards = deck
    }

    public drawHand():Hand{
        if (this.type === CARD_TYPE.CROP) {
            let hand = this.cards.slice(0,CROP_HAND_SIZE)
            let newDeck = this.cards.slice(CROP_HAND_SIZE,this.cards.length)
            if(hand.length != CROP_HAND_SIZE) throw new Error(ERROR.INVALID_HAND)
            this._cards=newDeck
            return new Hand(hand)
        }
        else {
            let hand = this.cards.slice(0,GOOD_HAND_SIZE)
            let newDeck = this.cards.slice(GOOD_HAND_SIZE,this.cards.length)
            if(hand.length != GOOD_HAND_SIZE) throw new Error(ERROR.INVALID_HAND)
            this._cards=newDeck
            return new Hand(hand)
        }

    }
}
