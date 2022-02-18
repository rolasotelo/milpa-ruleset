/* eslint-disable no-underscore-dangle */
import Card from "../cards/Card";
import { SlotType } from "../../common";

abstract class Slot {
  abstract type: SlotType;

  private _cards: Card[] = [];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  get cards() {
    return this._cards.slice();
  }

  set cards(cards: Card[]) {
    this._cards = cards;
  }
}

export default Slot;
