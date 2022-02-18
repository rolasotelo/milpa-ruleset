/* eslint-disable no-underscore-dangle */
import { AllCards, Errors, ObjectWithKeyValueTypes, Turn } from "../common";
import Card from "./cards/Card";
import DeckCreator from "./decks/DeckCreator";
import Board from "./board/Board";
import CropDeckCreator from "./decks/CropDeckCreator";
import GoodDeckCreator from "./decks/GoodDeckCreator";
import ScoreCalculator from "./scoring/ScoreCalculator";
import CactusScoreCalculator from "./cards/goods/cactus/CactusScoreCalculator";
import MagueyScoreCalculator from "./cards/goods/maguey/MagueyScoreCalculator";
import CornScoreCalculator from "./cards/crops/corn/CornScoreCalculator";
import ChilliScoreCalculator from "./cards/crops/chilli/ChilliScoreCalculator";

export default class Match {
  private _turn: number = Turn.GAME_START;

  private _cropDeck: Card[] = [];

  private _cropHand: Card[] = [];

  private _goodDeck: Card[] = [];

  private _goodHand: Card[] = [];

  private scorers: ObjectWithKeyValueTypes<typeof AllCards, ScoreCalculator>;

  public cropDeckCreator: DeckCreator;

  public goodDeckCreator: DeckCreator;

  public boards: [Board, Board];

  constructor() {
    this.cropDeckCreator = new CropDeckCreator();
    this.goodDeckCreator = new GoodDeckCreator();
    this.boards = [new Board(), new Board()];
    this.scorers = Match.generateScoreCalculators();
  }

  get turn() {
    if (Turn.GAME_START <= this._turn && this._turn <= Turn.LAST_TURN)
      return this._turn;
    throw new Error("Invalid turn");
  }

  set turn(nextTurn) {
    if (Turn.FIRST_TURN <= nextTurn && nextTurn <= Turn.LAST_TURN)
      this._turn = nextTurn;
    else throw new Error(Errors.INVALID_START);
  }

  get cropDeck() {
    return this._cropDeck.slice();
  }

  get cropHand() {
    return this._cropHand.slice();
  }

  get goodDeck() {
    return this._goodDeck.slice();
  }

  get goodHand() {
    return this._goodHand.slice();
  }

  public startGame() {
    this.turn = Turn.FIRST_TURN;

    this._cropDeck = this.cropDeckCreator.createDeck();
    this._goodDeck = this.goodDeckCreator.createDeck();

    this.drawAllHands();
  }

  public nextTurn() {
    if (this.turn === 0) throw new Error(Errors.INVALID_START);
    this.turn += 1;
    this.drawAllHands();
  }

  private drawAllHands() {
    const [initialCropHand, initialCropDeck] = this.cropDeckCreator.dealHand(
      this.cropDeck
    );
    this._cropDeck = initialCropDeck;
    this._cropHand = initialCropHand;

    const [initialGoodHand, initialGoodDeck] = this.goodDeckCreator.dealHand(
      this.goodDeck
    );
    this._goodDeck = initialGoodDeck;
    this._goodHand = initialGoodHand;
  }

  static generateScoreCalculators(): ObjectWithKeyValueTypes<
    typeof AllCards,
    ScoreCalculator
  > {
    const cactusScoreCalculator: ScoreCalculator = new CactusScoreCalculator();
    const magueyScoreCalculator: ScoreCalculator = new MagueyScoreCalculator();
    const cornScoreCalculator: ScoreCalculator = new CornScoreCalculator();
    const chilliScoreCalculator: ScoreCalculator = new ChilliScoreCalculator();

    return {
      CACTUS: cactusScoreCalculator,
      MAGUEY: magueyScoreCalculator,
      CORN: cornScoreCalculator,
      CHILLI: chilliScoreCalculator,
    };
  }
}
