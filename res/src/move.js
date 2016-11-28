import {Board} from 'board.js';
import {PiecePlacement} from 'pieceplacement.js';

export class Move {
  _piecePlacement: PiecePlacement;
  _applied: boolean;

  constructor(piecePlacement: PiecePlacement) {
    this._piecePlacement = piecePlacement;
    this._applied = false;
  }

  get piecePlacement(): PiecePlacement {
    return this._piecePlacement;
  }

  clearLines(board: Board): void {
    // TODO
  }

  unclearLines(board: Board): void {
    // TODO
  }

  setApplied(applied: boolean): void {
    this._applied = applied;
  }

  get applied(): boolean {
    return this._applied;
  }

  log(): any {
    return this._piecePlacement.log();
  }
}