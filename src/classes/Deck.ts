import {Card} from "./Card";
import {
    CARD_TYPE,
    CROP,
    CROP_DECK_DISTRIBUTION,
    CROP_DECK_SIZE,
    GOOD,
    GOOD_DECK_DISTRIBUTION,
    GOOD_DECK_SIZE
} from "../common";
import {Corn, Chilli} from "./crops";

export class Deck {
    private readonly _cards: Card[] = []

    constructor(public readonly type: CARD_TYPE) {
        this._cards = this.initializeDeck(type)
    }

    get cards() {
        return this._cards
    }

    public initializeDeck(type: CARD_TYPE): Card[] {
        let cards: Card[] = []
        if (type === CARD_TYPE.CROP) {
            for (let crop in CROP_DECK_DISTRIBUTION) {
                let cardsToAdd = Array.from(Array(CROP_DECK_DISTRIBUTION[crop as keyof typeof CROP]), () => Deck.createCard(crop as CROP))
                cards.push(...cardsToAdd as Card[])
            }
        } else {
            for (let good in GOOD_DECK_DISTRIBUTION) {
                let cardsToAdd = Array.from(Array(GOOD_DECK_DISTRIBUTION[good as keyof typeof GOOD]), () => Deck.createCard(good as GOOD))
                cards.push(...cardsToAdd as Card[])
            }
        }
        if(cards.length != CROP_DECK_SIZE && type == CARD_TYPE.CROP || cards.length != GOOD_DECK_SIZE && type == CARD_TYPE.GOOD) throw new Error('Invalid card distribution.')
        return cards
    }

    private static createCard(card: CROP | GOOD) {
        switch (card) {
            case CROP.CORN:
                return new Corn()
            case CROP.CHILLI:
                return new Chilli()
        }
    }
}

