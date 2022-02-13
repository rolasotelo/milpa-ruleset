import {Card} from "./Card";
import {CARD_TYPE} from "../common/enums";

export class Deck {
    private readonly _cards: Card[] = []

    constructor(public readonly type: CARD_TYPE) {
        this._cards = this.initializeDeck(type)
    }

    get cards(){
        return this._cards
    }

    public initializeDeck(type: CARD_TYPE): Card[]{
        return []
    }
}