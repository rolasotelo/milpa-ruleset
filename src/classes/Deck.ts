/* eslint-disable no-underscore-dangle */
import Card from "./Card";
import {
  CardType,
  Crop,
  CROP_DECK_DISTRIBUTION,
  CROP_DECK_SIZE,
  CROP_HAND_SIZE,
  Errors,
  Good,
  GOOD_DECK_DISTRIBUTION,
  GOOD_DECK_SIZE,
  GOOD_HAND_SIZE,
} from "../common";
import Hand from "./Hand";
import Corn from "./crops/Corn";
import Chilli from "./crops/Chilli";

export default class Deck {
  private _cards: Card[] = [];

  constructor(public readonly type: CardType) {
    this._cards = Deck.initializeDeck(type);
    this.shuffleDeck();
  }

  get cards() {
    return this._cards;
  }

  public static initializeDeck(type: CardType): Card[] {
    const cards: Card[] = [];
    if (type === CardType.CROP) {
      Object.keys(CROP_DECK_DISTRIBUTION).forEach((crop) => {
        const cardsToAdd = Array.from(
          Array(CROP_DECK_DISTRIBUTION[crop as keyof typeof Crop]),
          () => Deck.createCard(Crop[crop as keyof typeof Crop])
        );
        cards.push(...(cardsToAdd as Card[]));
      });
    } else {
      Object.keys(GOOD_DECK_DISTRIBUTION).forEach((good) => {
        const cardsToAdd = Array.from(
          Array(GOOD_DECK_DISTRIBUTION[good as keyof typeof Good]),
          () => Deck.createCard(Good[good as keyof typeof Good])
        );
        cards.push(...(cardsToAdd as Card[]));
      });
    }
    if (
      (cards.length !== CROP_DECK_SIZE && type === CardType.CROP) ||
      (cards.length !== GOOD_DECK_SIZE && type === CardType.GOOD)
    )
      throw new Error(Errors.INVALID_DECK);

    return cards;
  }

  public static createCard(card: Crop | Good): Card {
    switch (card) {
      case Crop.CORN:
        return new Corn();

      case Crop.CHILLI:
        return new Chilli();

      default:
        throw new Error(Errors.INVALID_CARD);
    }
  }

  private shuffleDeck() {
    let currentIndex = this._cards.length;
    let randomIndex;
    const deck = this._cards.slice();

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex],
        deck[currentIndex],
      ];
    }
    this._cards = deck;
  }

  public drawHand(): Hand {
    if (this.type === CardType.CROP) {
      if (this.cards.length < CROP_HAND_SIZE)
        throw new Error(Errors.INVALID_HAND);
      const hand = this.cards.splice(0, CROP_HAND_SIZE);
      return new Hand(hand);
    }
    if (this.cards.length < GOOD_HAND_SIZE)
      throw new Error(Errors.INVALID_HAND);
    const hand = this.cards.splice(0, GOOD_HAND_SIZE);
    return new Hand(hand);
  }
}
