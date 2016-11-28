import {Board} from 'board.js';
import {Renderable} from 'renderable.js';
import {Tray} from 'tray.js';

import type {Loggable} from 'renderable.js';

export class GameState extends Renderable {

  _board: Board;
  _tray: Tray;

  constructor() {
    super();
    this._board = new Board();
    this._tray = new Tray();
  }

  getNode(): Node {
    const board = this._board.render();
    const tray = this._tray.render();
    
    let gamestate = document.createElement("div");
    gamestate.className = "GameState";
    gamestate.appendChild(board);
    gamestate.appendChild(tray);
    return gamestate;
  }

  getKey(): ?Loggable {
    return this.log();
  }

  log(): Loggable {
    return (this._board && this._tray)
      ? {
        'Board': this._board.log(),
        'Tray': this._tray.log(),
        }
      : 'uninitialized';
  }
}


