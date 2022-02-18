import SlotInteractor from "../../../slots/SlotInteractor";
import {
  MAX_CARDS_PER_EDGE_SLOT,
  MAX_CARDS_PER_MILPA_SLOT,
  SlotType,
} from "../../../../common";
import Slot from "../../../slots/Slot";
import Card from "../../Card";

import MilpaSlot from "../../../slots/MilpaSlot";
import MagueyCard from "./MagueyCard";

class MagueyMilpaSlotInteractor implements SlotInteractor {
  private maxCardsPerMilpaSlotModifier = MAX_CARDS_PER_MILPA_SLOT;

  private maxCardsPerEdgeSlotModifier = MAX_CARDS_PER_EDGE_SLOT;

  private listOfCardsWithInteraction = ["EMPTY", "BEANS"];

  canInteractWithSlot(slot: Slot): boolean {
    return slot.cards.length <= this.maxCardsPerMilpaSlotModifier;
  }

  pushToSlot(slot: Slot): Slot {
    const newCards: Card[] = [];
    // TODO Implement Card Creator Singleton
    if (slot.type === SlotType.MILPA && this.canInteractWithSlot(slot))
      newCards.push(new MagueyCard());
    // TODO Create right slot
    return new MilpaSlot(newCards);
  }
}

export default MagueyMilpaSlotInteractor;
