import {Card} from "./Card";

export class Hand {
    private readonly _cards: Card[] = []


    get cards() {
        return this._cards
    }

}