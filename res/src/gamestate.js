import {Board} from 'board.js';
import {GraphicPoint} from 'graphicpoint.js';
import {Move} from 'move.js';
import {Piece} from 'piece.js';
import {Renderable} from 'renderable.js';
import {Tray} from 'tray.js';

import {makeDiv} from 'domutils.js';

import type {Loggable} from 'renderable.js';

export class GameState extends Renderable {

  _score: number;
  _board: Board;
  _tray: Tray;
  _hook: ?HTMLElement;
  _elem: ?HTMLElement;

  constructor() {
    super();
    this._score = 0;
    this._board = new Board();
    this._tray = new Tray();
  }

  get tray(): Tray {
    return this._tray;
  }

  get board(): Board {
    return this._board;
  }

  get score(): number {
    return this._score;
  }

  gameIsOver(): boolean {
    // todo
    return false;
  }

  hasUnknowns(): boolean {
    // todo
    return false;
  }

  withEachUnknownResolved(
    callback: (probability: number) => void,
  ): void {
    // todo
    return;
  }

  withEachValidMoveApplied(
    callback: (move: Move) => void,
  ): void {
    this.forEachPieceInTray((piece: Piece) => {
      this._board.withEachValidMoveApplied((
        move: Move,
        scoreIncrease: number,
      ) => {
        this._score += scoreIncrease;
        callback(move);
        this._score -= scoreIncrease;
      }, piece);
    });
  }

  withMoveApplied(
    move: Move,
    callback: () => void,
  ): void {
    this.board.withMoveApplied(
      move, (
        move: Move,
        scoreIncrease: number,
      ) => {
        this._score += scoreIncrease;
        callback();
        this._score -= scoreIncrease;
      },
    );
  }

  isValidCommit(move: Move): boolean {
    return this.tray.isValidCommit(move)
      && this.board.isValidCommit(move);
  }

  commitMove(move: Move): boolean {
    if (!this.isValidCommit(move)) {
      return false;
    }
    this.tray.commitMove(move);
    this._score += this.board.commitMove(move);
    this.refresh();
    return true;
  }

  forEachPieceInTray(
    callback: (piece: Piece) => void,
  ): void {
    this.tray.forEachPiece(callback);
  }

  refresh(): void {
    console.log('refreshing gamestate');
    console.log(this.log());
    if (this._hook != null) {
      if (this._elem != null) {
        this._hook.removeChild(this._elem);
      }
      const elem = this.render();
      this._elem = elem;
      if (this._hook != null) {
        this._hook.appendChild(elem);  
      }
    }
  }

  render(hook: ?HTMLElement): HTMLElement {
    const score = makeDiv(
      ['score'],
      null,
      this.score.toString(),
    );
    const board = this._board.render();
    const tray = this._tray.render();
    
    let gamestate = document.createElement('div');
    gamestate.className = 'GameState';
    gamestate.appendChild(score);
    gamestate.appendChild(board);
    gamestate.appendChild(tray);
    if (hook != null) {
      this._hook = hook;
      this._elem = gamestate;
    }
    return gamestate;
  }

  log(): Loggable {
    return (this._board && this._tray)
      ? {
          'Board': this.board.log(),
          'Tray': this.tray.log(),
          'Score': this.score,
        }
      : 'uninitialized';
  }

  encode(): string {
    return [
      this.board.encode(),
      this.tray.encode(),
    ].join('');
  }
}


