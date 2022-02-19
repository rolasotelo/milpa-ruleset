import Slot from "../../../src/classes/slots/Slot";
import { SlotType } from "../../../src/common";
import CornCard from "../../../src/classes/cards/crops/corn/CornCard";
import ChilliCard from "../../../src/classes/cards/crops/chilli/ChilliCard";

describe("Slot Class...", function () {
  describe("When object extending from Slot is created", function () {
    const milpaSlot = class extends Slot {
      type = SlotType.MILPA;
    };
    const cards = [new CornCard(), new ChilliCard()];
    const slot = new milpaSlot(cards);
    test("then setting new score should update slot properly", function () {
      expect(JSON.stringify(slot.cards)).toEqual(JSON.stringify(cards));
      const newCards = cards.slice();
      newCards.pop();
      slot.cards = newCards;
      expect(JSON.stringify(slot.cards)).toEqual(JSON.stringify(newCards));
    });
  });
});
