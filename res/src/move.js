import {Assert} from 'debug.js';
import {Board} from 'board.js';
import {PiecePlacement} from 'pieceplacement.js';
import {Line} from 'line.js';

import type {LineClearHistory} from 'line.js';
import type {PieceColor} from 'piecedefinitions.js';

import {
  checkAllLines,
  clearLines,
  unclearLines,
} from 'line.js';

export class Move {
  _piecePlacement: PiecePlacement;
  _applied: boolean;
  _linesCalculated: boolean;
  _linesAreCleared: boolean;
  _lines: LineClearHistory[];
  _scoreIncrease: number;
  _trayIndex: number;

  constructor(piecePlacement: PiecePlacement) {
    this._piecePlacement = piecePlacement;
    this._applied = false;
    this._linesCalculated = false;
    this._linesAreCleared = false;
    this._lines = [];
    this._scoreIncrease = -1;
    this._trayIndex = -1;
  }

  get piecePlacement(): PiecePlacement {
    return this._piecePlacement;
  }

  clearLines(board: Board): void {
    Assert(
      !this._linesAreCleared,
      'clearLines called on move with lines already cleared',
      () => this.log(),
    );
    if (!this._linesCalculated) {
      this._lines = checkAllLines(board);
      this._linesCalculated = true;
    }
    clearLines(this._lines, board);
    this._linesAreCleared = true;
  }

  unclearLines(board: Board): void {
    Assert(
      this._linesAreCleared,
      'unclearLines called on move with lines not cleared',
      () => this.log(),
    );
    unclearLines(this._lines, board);
    this._linesAreCleared = false;
  }

  getScoreIncrease(): number {
    Assert(
      this._linesCalculated,
      'getScoreIncrease called before clearLines',
      () => this.log(),
    );
    if (this._scoreIncrease !== -1) {
      return this._scoreIncrease;
    }
    let scoreIncrease = 0;
    let lineLengths = this._lines.map(
      line => line.colors.length
    ).sort();
    let lineCount = lineLengths.length;
    
    lineLengths.forEach((len, i) => {
      scoreIncrease += 10 * len * (lineCount + 1) *
        Math.max(1, Math.pow(i, 1.2))
    });
    this._scoreIncrease = Math.floor(scoreIncrease);
    return this._scoreIncrease;
  }

  setApplied(applied: boolean): void {
    this._applied = applied;
  }

  setTrayIndex(i: number): void {
    this._trayIndex = i;
  }

  get trayIndex(): number {
    return this._trayIndex;
  }

  get applied(): boolean {
    return this._applied;
  }

  log(): any {
    return this._piecePlacement.log();
  }
}