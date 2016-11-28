import {Offset} from 'offset.js';

import {addOffset} from 'board.js';

export class Point {

  _row: number;
  _col: number;

  constructor(row: number, col: number) {
    this._row = row;
    this._col = col;
  }

  get row(): number {
    return this._row;
  }

  get col(): number {
    return this._col;
  }

  plus(delta: Offset): Point {
    // return addOffset(this, delta);
    return new Point(
      this.row + delta.row,
      this.col + delta.col,
    );
  }

  log(): string {
    return `(${this.row}, ${this.col})`;
  }
}