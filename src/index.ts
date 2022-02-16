import Match from "./classes/Match";
import CropDeckCreator from "./classes/decks/CropDeckCreator";
import GoodDeckCreator from "./classes/decks/GoodDeckCreator";

export default function createMatch() {
  return new Match(new CropDeckCreator(), new GoodDeckCreator());
}
