import {Assert} from 'debug.js';
import {Cell} from 'cell.js';
import {GraphicPoint} from 'graphicpoint.js';
import {Move} from 'move.js';
import {MoveStack} from 'movestack.js';
import {Offset} from 'offset.js';
import {Piece} from 'piece.js';
import {PiecePlacement} from 'pieceplacement.js';
import {Point} from 'point.js';
import {Renderable} from 'renderable.js';

import {graphicPointOnBoard} from 'hexgraphicutils.js';
import {makeDiv} from 'domutils.js';

import type {Loggable} from 'renderable.js';

export const ROW_WIDTHS: number[] = [
  5, //      ⬣ ⬣ ⬣ ⬣ ⬣
  6, //     ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
  7, //    ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
  8, //   ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
  9, //  ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
  8, //   ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
  7, //    ⬣ ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
  6, //     ⬣ ⬣ ⬣ ⬣ ⬣ ⬣
  5, //      ⬣ ⬣ ⬣ ⬣ ⬣
];

const MID_ROW = 4;

export function addOffset(point: Point, offset: Offset): Point {
  const srcRow = point.row;
  const srcCol = point.col;
  const deltaRow = offset.row;

  const destRow = srcRow + deltaRow;
  const rowsBeyondMid = deltaRow >= 0
    ? Math.max(0, 
        destRow - Math.max(srcRow, MID_ROW)
      )
    : Math.min(0,
        Math.max(destRow, MID_ROW) - srcRow
      );

  const deltaCol = offset.col - rowsBeyondMid;
  const destCol = srcCol + deltaCol;

  return new Point(destRow, destCol);
}

function *_allPlacements(): Iterator<Point> {
  const rows = ROW_WIDTHS.length;
  for (let row = 0; row < rows; row++) {
    const cols = ROW_WIDTHS[row];
    for (let col = 0; col < cols; col++) {
      yield new Point(row, col);
    }
  }
}

export function pointInBounds(point: Point): boolean {
  const row = point.row;
  const col = point.col;
  if (row < 0 || row >= ROW_WIDTHS.length)
    return false;
  const row_width = ROW_WIDTHS[row];
  if (col < 0 || col >= row_width)
    return false;
  return true;
}

export class Board extends Renderable {
  _cells: Cell[][];
  _movestack: MoveStack;

  constructor() {
    super();
    this._cells = ROW_WIDTHS.map(
      (width, row) => (new Array(width)).fill().map(
        (_, col) => {
          const point = new Point(row, col);
          const graphicPoint = graphicPointOnBoard(point);
          return new Cell(graphicPoint);
        }
      ),
    );
    this._movestack = new MoveStack();
  }

  getCellAt(point: Point): Cell {
    Assert(pointInBounds(point), 'Invalid point for getCellAt',
      () => point.log());
    return this._cells[point.row][point.col];
  }

  cellOccupiedAt(point: Point): boolean {
    const cell = this.getCellAt(point);
    return cell.isOccupied;
  }

  _canPlaceTileAt(point: Point): boolean {
    if (!pointInBounds(point)) {
      return false;
    }
    if (this.cellOccupiedAt(point)) {
      return false;
    }
    return true;
  }

  isValidMove(move: Move): boolean {
    return move.piecePlacement.allPointsPass(
      point => this._canPlaceTileAt(point)
    );
  }

  isValidCommit(move: Move): boolean {
    return this.isValidMove(move)
      && this._movestack.isEmpty();
  }

  isValidUnmove(move: Move): boolean {
    // TODO - do more thorough checking here
    return true;
  }

  applyMove(move: Move): number {
    Assert(
      this.isValidMove(move), 
      'Cannot apply invalid move',
      () => move.log(),
    );
    Assert(
      !move.applied,
      'Cannot apply already applied move',
      () => move.log(),
    );

    let scoreIncrease = 40;

    move.piecePlacement.placeOnCells(
      point => this.getCellAt(point)
    );

    move.setApplied(true);
    move.clearLines(this);
    scoreIncrease += move.getScoreIncrease();
    this._movestack.push(move);
    return scoreIncrease;
  }

  unApplyMove(move: Move) {
    Assert(
      this.isValidUnmove(move),
      'Cannot unapply invalid move',
      () => move.log()
    );
    Assert(
      move.applied,
      'Cannot unapply unapplied move',
      () => move.log(),
    );

    this._movestack.pop(move);
    move.setApplied(false);
    move.unclearLines(this);

    move.piecePlacement.removeFromCells(
      point => this.getCellAt(point)
    );
  }

  commitMove(move: Move): number {
    Assert(
      this.isValidCommit(move),
      'Cannot commit invalid move to board',
      () => this.log()
    );
    const scoreIncrease = this.applyMove(move);
    this._movestack.flush();
    return scoreIncrease;
  }

  *allValidMoves(
    piece: Piece,
  ): Iterator<Move> {
    for (let placement: Point of _allPlacements()) {
      const piecePlacement = new PiecePlacement(piece, placement);
      const move = new Move(piecePlacement);
      if (this.isValidMove(move)) {
        yield move;
      }
    }
  }

  placesForPiece(
    piece: Piece,
  ): number {
    let count = 0;
    for (let validMove of this.allValidMoves(piece)) {
      count++;
    }
    return count;
  }

  canSequenceBePlaced(
    sequence: Piece[],
  ): boolean {
    if (sequence.length === 0) {
      return true;
    }
    const firstPiece = sequence[0];
    const remainingPieces = sequence.slice(1);
    let canSubsequenceBePlaced = false;
    for (let move of this.allValidMoves(firstPiece)) {
      this.withMoveApplied(move, (m, _) => {
        if (this.canSequenceBePlaced(remainingPieces)) {
          canSubsequenceBePlaced = true;
        }
      });
      if (canSubsequenceBePlaced) {
        break;
      }
    }
    return canSubsequenceBePlaced;
  }

  withMoveApplied(
    move: Move,
    callback: (
      move: Move,
      scoreIncrease: number,
    ) => void,
  ): void {
    
    const scoreIncrease = this.applyMove(move);
    callback(move, scoreIncrease);
    this.unApplyMove(move);
  }

  withEachValidMoveApplied(
    callback: (
      move: Move,
      scoreIncrease: number,
    ) => void,
    piece: Piece,
  ): void {
    for (let move of this.allValidMoves(piece)) {
      this.withMoveApplied(move, callback);
    }
  }

  render(): HTMLElement {
    if (!this._cells) {
      return makeDiv(['board'], null, 'uninitialized'); 
    }
    let node = makeDiv(['board']);

    this._cells.map(row => {
      row.map(cell => {
        node.appendChild(
          cell.render()
        );
      });
    });

    return node;
  }

  log(): Loggable {
    if (!this._cells) {
      return 'uninitialized';
    }
    return this._cells.map(
      (row, i) =>
        // todo fix the spacing (zero pad, etc)
        row.map(cell =>
          cell.isOccupied ? 'x' : '.'
        ).join('')
    );
  }

  encode(): string {
    return this._cells.map(
      row =>
        row.map(cell =>
          cell.isOccupied ? 'x' : '.'
        ).join('')
      ).join('');
  }
}
