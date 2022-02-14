import { Corn } from "../../../src/classes/crops";
import { Card } from "../../../src/classes/Card";
import { CORN } from "../../../src/common";

describe("Corn Class", () => {
  describe("When scoreWhenPlayed is called", () => {
    const card = new Corn();

    test(`then it should return ${CORN.pointsWhenPlayed}`, () => {
      expect(card).toBeInstanceOf(Card);
      expect(card.scoreWhenPlayed()).toEqual(CORN.pointsWhenPlayed);
    });
  });
});
