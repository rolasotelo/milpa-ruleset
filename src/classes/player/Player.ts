/* eslint-disable no-underscore-dangle */

import Board from "../board/Board";

class Player {
  private _points = 0;

  private _board: Board = new Board();

  constructor(public readonly nickname: string) {}

  get points() {
    return this._points;
  }

  addPoints(points: number) {
    this._points += points;
  }

  get board() {
    return this._board;
  }
}

export default Player;
