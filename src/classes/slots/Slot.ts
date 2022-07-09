/* eslint-disable no-underscore-dangle */
import Card from "../cards/Card";
import { SlotType } from "../../common";

abstract class Slot {
  abstract type: SlotType;

  private _cards: Card[] = [];

  private _modifiers: Card[] = [];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  get cards() {
    return this._cards.slice();
  }

  set cards(cards: Card[]) {
    this._cards = cards;
  }

  addCard(card: Card) {
    this._cards.push(card);
  }

  get modifiers() {
    return this._modifiers.slice();
  }

  set modifiers(cards: Card[]) {
    this._cards = cards;
  }

  addModifier(card: Card) {
    this._modifiers.push(card);
  }
}

export default Slot;
