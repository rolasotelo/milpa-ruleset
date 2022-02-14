import { Card } from "./Card";

export class Hand {
  private readonly _cards: Card[] = [];

  constructor(cards: Card[]) {
    this._cards = cards;
  }

  get cards() {
    return this._cards;
  }

  public takeCard(index: number) {
    this._cards.splice(index, 1);
  }
}
