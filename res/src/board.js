import {Assert} from 'debug.js';
import {Cell} from 'cell.js';
import {GraphicPoint} from 'graphicpoint.js';
import {Move} from 'move.js';
import {MoveStack} from 'movestack.js';
import {Offset} from 'offset.js';
import {Point} from 'point.js';
import {Renderable} from 'renderable.js';

import {graphicPointOnBoard} from 'hexgraphicutils.js';

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
  const dstRow = srcRow + offset.row;
  const rowWidthDelta = ROW_WIDTHS[dstRow] - ROW_WIDTHS[srcRow];
  const colOffset = offset.col;

  let dstCol: number = 0;
  if (srcRow === dstRow) {
    dstCol = srcCol + colOffset;
  } else if (srcRow <= MID_ROW && dstRow <= MID_ROW) {
    if (colOffset <= 0) {
      dstCol = srcCol + (colOffset + rowWidthDelta);
    } else {
      dstCol = srcCol + colOffset;
    }
  } else if (srcRow >= MID_ROW && dstRow >= MID_ROW) {
    if (colOffset >= 0) {
      dstCol = srcCol + (colOffset - 1);
    } else {
      dstCol = srcCol + colOffset;
    }
  }

  return new Point(dstRow, dstCol);
}

function _pointInBounds(point: Point): boolean {
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

  _getCellAt(point: Point): Cell {
    Assert(_pointInBounds(point), 'Invalid point for _getCellAt',
      () => point.log());
    return this._cells[point.row][point.col];
  }

  _cellOccupiedAt(point: Point): boolean {
    const cell = this._getCellAt(point);
    return cell.isOccupied;
  }

  _canPlaceTileAt(point: Point): boolean {
    if (!_pointInBounds(point)) {
      return false;
    }
    if (this._cellOccupiedAt(point)) {
      return false;
    }
    return true;
  }

  isValidMove(move: Move): boolean {
    return move.piecePlacement.allPointsPass(
      point => this._canPlaceTileAt(point)
    );
  }

  isValidUnmove(move: Move): boolean {
    // TODO - do more thorough checking here
    return true;
  }

  applyMove(move: Move): void {
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

    move.piecePlacement.placeOnCells(
      point => this._getCellAt(point)
    );

    move.clearLines(this);
    move.setApplied(true);
    this._movestack.push(move);
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
      point => this._getCellAt(point)
    );
  }

  getNode(): Node {
    if (!this._cells) {
      return document.createTextNode("board");  
    }
    let node = document.createElement("div");
    node.className = "board";

    this._cells.map(row => {
      row.map(cell => {
        node.appendChild(
          cell.render()
        );
      });
    });

    node.style.position = 'absolute';
    node.style.top = '50px';
    node.style.left = '50px';

    return node;
  }

  getKey(): ?Loggable {
    return this.log();
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
}
