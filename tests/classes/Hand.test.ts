import { Hand } from "../../src/classes/Hand";
import { Chilli, Corn } from "../../src/classes/crops";

describe("Hand Class", function () {
  describe("When creating a new hand", function () {
    const sampleHand = [new Corn(), new Chilli(), new Corn()];
    const hand = new Hand(sampleHand);
    test("then initial cards should be consistent", function () {
      expect(JSON.stringify(hand.cards)).toEqual(JSON.stringify(sampleHand));
    });
    test("then taking a card should update hand", function () {
      const sampleNewHand = [new Corn(), new Corn()];
      hand.takeCard(1);
      expect(JSON.stringify(hand.cards)).toEqual(JSON.stringify(sampleNewHand));
    });
  });
});
