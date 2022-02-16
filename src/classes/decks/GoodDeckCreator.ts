import DeckCreator from "./DeckCreator";
import {
  AnyCard,
  CROP_DECK_SIZE,
  Errors,
  Good,
  GOOD_DECK_DISTRIBUTION,
  GOOD_HAND_SIZE,
} from "../../common";
import Card from "../Card";
import MagueyCard from "../goods/maguey/MagueyCard";
import CactusCard from "../goods/cactus/CactusCard";

class GoodDeckCreator extends DeckCreator {
  private GoodIds = Good;

  private GoodDeckDistribution = GOOD_DECK_DISTRIBUTION;

  private readonly handSize = GOOD_HAND_SIZE;

  constructor() {
    super(CROP_DECK_SIZE);
  }

  createCard(cardId: AnyCard): Card {
    switch (cardId) {
      case this.GoodIds.MAGUEY:
        return new MagueyCard();

      case this.GoodIds.CACTUS:
        return new CactusCard();

      default:
        throw new Error(Errors.INVALID_CARD);
    }
  }

  createDeck(): Card[] {
    const newDeck: Card[] = [];

    Object.keys(this.GoodDeckDistribution).forEach((good) => {
      const cardsToAdd = Array.from(
        Array(this.GoodDeckDistribution[good as keyof typeof Good]),
        () => this.createCard(Good[good as keyof typeof Good])
      );
      newDeck.push(...(cardsToAdd as Card[]));
    });

    return DeckCreator.shuffleDeck(newDeck);
  }

  dealHand(cards: Card[]): [Card[], Card[]] {
    if (cards.length < this.handSize) throw new Error(Errors.INVALID_HAND);
    const newDeck = cards.slice();
    const hand = newDeck.splice(0, this.handSize);
    return [hand, newDeck];
  }
}

export default GoodDeckCreator;
