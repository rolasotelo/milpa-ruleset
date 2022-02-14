import { CARD_TYPE, ERROR, TURN } from "../common";
import { Deck } from "./Deck";
import { Hand } from "./Hand";

export class Match {
  private _turn: number = TURN.GAME_START;
  private _cropDeck: Deck = new Deck(CARD_TYPE.CROP);
  private _cropHand: Hand = new Hand([]);

  get turn() {
    if (TURN.GAME_START <= this._turn && this._turn <= TURN.LAST_TURN)
      return this._turn;
    else throw new Error("Invalid turn");
  }

  set turn(nextTurn) {
    if (TURN.FIRST_TURN <= nextTurn && nextTurn <= TURN.LAST_TURN)
      this._turn = nextTurn;
    else throw new Error("Invalid turn");
  }

  get cropDeck() {
    return this._cropDeck.cards;
  }

  get cropHand() {
    return this._cropHand.cards;
  }

  public startGame() {
    this.turn = TURN.FIRST_TURN;
    this._cropHand = this._cropDeck.drawHand();
  }

  public nextTurn() {
    if (this.turn == 0) throw new Error(ERROR.INVALID_START);
    this.turn++;
    this._cropHand = this._cropDeck.drawHand();
  }
}
