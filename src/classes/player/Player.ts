/* eslint-disable no-underscore-dangle */

import Board from "../board/Board";

class Player {
  private _points = 0;

  private _board: Board = new Board();

  private _connected = true;

  public isYourTurn = false;

  constructor(public readonly id: string, public readonly nickname: string) {}

  get points() {
    return this._points;
  }

  addPoints(points: number) {
    this._points += points;
  }

  get board() {
    return this._board;
  }

  get connected() {
    return this._connected;
  }

  set connected(connected) {
    this._connected = connected;
  }
}

export default Player;
