export class Offset {

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

  log(): string {
    return `(${this.row}, ${this.col})`;
  }
};