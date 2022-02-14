import { Corn } from "../../../src/classes/crops";
import { Card } from "../../../src/classes/Card";
import { CORN } from "../../../src/common";

describe("Corn Class", function () {
  describe("When scoreWhenPlayed is called", function () {
    const card = new Corn();

    test(`then it should return ${CORN.pointsWhenPlayed}`, function () {
      expect(card).toBeInstanceOf(Card);
      expect(card.scoreWhenPlayed()).toEqual(CORN.pointsWhenPlayed);
    });
  });
});
