import Hand from "../../src/classes/Hand";
import Corn from "../../src/classes/crops/Corn";
import Chilli from "../../src/classes/crops/Chilli";

describe("Hand Class", () => {
  describe("When creating a new hand", () => {
    const sampleHand = [new Corn(), new Chilli(), new Corn()];
    const hand = new Hand(sampleHand);
    test("then initial cards should be consistent", () => {
      expect(JSON.stringify(hand.cards)).toEqual(JSON.stringify(sampleHand));
    });
    test("then taking a card should update hand", () => {
      const sampleNewHand = [new Corn(), new Corn()];
      hand.takeCard(1);
      expect(JSON.stringify(hand.cards)).toEqual(JSON.stringify(sampleNewHand));
    });
  });
});
