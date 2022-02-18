import DeckCreator from "./DeckCreator";
import {
  AnyCard,
  Crop,
  CROP_DECK_DISTRIBUTION,
  CROP_DECK_SIZE,
  CROP_HAND_SIZE,
  Errors,
} from "../../common";
import Card from "../cards/Card";
import { ChilliCard, CornCard } from "../cards/crops";

class CropDeckCreator extends DeckCreator {
  private CropIds = Crop;

  private CropDeckDistribution = CROP_DECK_DISTRIBUTION;

  private readonly handSize = CROP_HAND_SIZE;

  constructor() {
    super(CROP_DECK_SIZE);
  }

  createCard(cardId: AnyCard): Card {
    switch (cardId) {
      case this.CropIds.CORN:
        return new CornCard();

      case this.CropIds.CHILLI:
        return new ChilliCard();

      default:
        throw new Error(Errors.INVALID_CARD);
    }
  }

  createDeck(): Card[] {
    const newDeck: Card[] = [];

    Object.keys(this.CropDeckDistribution).forEach((crop) => {
      const cardsToAdd = Array.from(
        Array(this.CropDeckDistribution[crop as keyof typeof Crop]),
        () => this.createCard(Crop[crop as keyof typeof Crop])
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

export default CropDeckCreator;
