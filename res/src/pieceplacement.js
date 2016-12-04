import {Cell} from 'cell.js';
import {Point} from 'point.js';
import {Piece} from 'piece.js';

export class PiecePlacement {
  _piece: Piece;
  _placement: Point;

  constructor(piece: Piece, placement: Point) {
    this._piece = piece;
    this._placement = placement;
  }

  get piece(): Piece {
    return this._piece;
  }

  get placement(): Point {
    return this._placement;
  }

  *points(): Iterator<Point> {
    for (let offset of this._piece.offsets()) {
      yield this._placement.plus(offset);
    }
  }

  allPointsPass(predicate: Point => boolean): boolean {
    for (let tilePlacement of this.points()) {
      if (!predicate(tilePlacement)) {
        return false;
      }
    }
    return true;
  }

  placeOnCells(getCell: Point => Cell): void {
    const color = this._piece.color;
    this._applyToCells(getCell,
      cell => cell.placeTile(color)
    );
  }

  removeFromCells(getCell: Point => Cell): void {
    this._applyToCells(getCell,
      cell => cell.removeTile()
    );
  }

  _applyToCells(
    getCell: Point => Cell,
    cellMutator: Cell => void,
  ): void {
    for (let point of this.points()) {
      cellMutator(getCell(point));
    }
  }

  log(): any {
    return {
      piece: this._piece.log(),
      placement: this._placement.log(),
    };
  }
};