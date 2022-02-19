import Card from "../cards/Card";
import { AnyCard } from "../../common";

abstract class DeckCreator {
  protected constructor(private readonly size: number) {}

  abstract createCard(cardId: AnyCard): Card;
  abstract createDeck(): Card[];
  abstract dealHand(cards: Card[]): [Card[], Card[]];

  static shuffleDeck(cards: Card[]): Card[] {
    let currentIndex = cards.length;
    let randomIndex;
    const deck = cards.slice();

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
    return deck;
  }
}

export default DeckCreator;
