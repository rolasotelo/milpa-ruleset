import { Chilli } from "../../../src/classes/crops";
import { Card } from "../../../src/classes/Card";
import { CHILLI } from "../../../src/common";

describe("Chilli Class", function () {
  describe("When scoreWhenPlayed is called", function () {
    const card = new Chilli();

    test(`then it should return ${CHILLI.pointsWhenPlayed}`, function () {
      expect(card).toBeInstanceOf(Card);
      expect(card.scoreWhenPlayed()).toEqual(CHILLI.pointsWhenPlayed);
    });
  });
});
