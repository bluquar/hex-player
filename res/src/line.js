import {Board} from 'board.js';
import {Offset} from 'offset.js';
import {Point} from 'point.js';

import {pointInBounds} from 'board.js';

import type {PieceColor} from 'piecedefinitions.js';

type LineDirection =
  | 'Horizontal'
  | 'UpRight'
  | 'DownRight';

const HorizontalOffset = new Offset(0, 1);
const UpRightOffset = new Offset(-1, 0);
const DownRightOffset = new Offset(1, 1);

function getDirectionOffset(
  direction: LineDirection,
): Offset {
  switch (direction) {
    case 'Horizontal':
      return HorizontalOffset;
    case 'UpRight':
      return UpRightOffset;
    case 'DownRight':
      return DownRightOffset;
    default:
      throw 'Invalid';
  }
}

export type LineClearHistory = {
  line: Line,
  colors: PieceColor[],
};

export class Line {
  _start: Point;
  _direction: LineDirection;
  _offset: Offset;

  constructor(
    start: Point,
    direction: LineDirection,
  ) {
    this._start = start;
    this._direction = direction;
    this._offset = getDirectionOffset(direction);
  }

  *_points(): Iterator<Point> {
    let point = this._start;
    while (pointInBounds(point)) {
      yield point;
      point = point.plus(this._offset);
    }
  }

  isComplete(
    board: Board,
  ): boolean {
    for (let point of this._points()) {
      if (!board.cellOccupiedAt(point)) {
        return false;
      }
    }
    return true;
  }

  getClearHistory(
    board: Board,
  ): LineClearHistory {
    let colors = [];
    for (let point of this._points()) {
      const cell = board.getCellAt(point);
      colors.push(cell.color);
    }
    return {
      line: this,
      colors: colors,
    };
  }

  clear(
    board: Board,
  ): void {
    for (let point of this._points()) {
      const cell = board.getCellAt(point);
      if (cell.isOccupied) {
        cell.removeTile();
      }
    }
  }

  unclear(
    board: Board,
    colors: PieceColor[],
  ): void {
    let i = 0;
    for (let point of this._points()) {
      const cell = board.getCellAt(point);
      if (!cell.isOccupied) {
        cell.placeTile(colors[i]);
      }
      i++;
    }
  }
}

export function checkAllLines(
  board: Board,
): LineClearHistory[] {
  let linesCleared = [];
  for (let line of Lines) {
    if (line.isComplete(board)) {
      linesCleared.push(line.getClearHistory(board));
    }
  }
  return linesCleared;
}

export function clearLines(
  lines: LineClearHistory[],
  board: Board,
): void {
  for (let lineClearHistory of lines) {
    const line = lineClearHistory.line;
    line.clear(board);
  }
}

export function unclearLines(
  lines: LineClearHistory[],
  board: Board,
): void {
  for (let lineClearHistory of lines) {
    const line = lineClearHistory.line;
    const colors = lineClearHistory.colors;
    line.unclear(board, colors);
  }
}

const Lines = [
  new Line(new Point(0, 0), 'Horizontal'),
  new Line(new Point(1, 0), 'Horizontal'),
  new Line(new Point(2, 0), 'Horizontal'),
  new Line(new Point(3, 0), 'Horizontal'),
  new Line(new Point(4, 0), 'Horizontal'),
  new Line(new Point(5, 0), 'Horizontal'),
  new Line(new Point(6, 0), 'Horizontal'),
  new Line(new Point(7, 0), 'Horizontal'),
  new Line(new Point(8, 0), 'Horizontal'),

  new Line(new Point(0, 0), 'DownRight'),
  new Line(new Point(1, 0), 'DownRight'),
  new Line(new Point(2, 0), 'DownRight'),
  new Line(new Point(3, 0), 'DownRight'),
  new Line(new Point(4, 0), 'DownRight'),
  new Line(new Point(0, 1), 'DownRight'),
  new Line(new Point(0, 2), 'DownRight'),
  new Line(new Point(0, 3), 'DownRight'),
  new Line(new Point(0, 4), 'DownRight'),

  new Line(new Point(4, 0), 'UpRight'),
  new Line(new Point(5, 0), 'UpRight'),
  new Line(new Point(6, 0), 'UpRight'),
  new Line(new Point(7, 0), 'UpRight'),
  new Line(new Point(8, 0), 'UpRight'),
  new Line(new Point(8, 1), 'UpRight'),
  new Line(new Point(8, 2), 'UpRight'),
  new Line(new Point(8, 3), 'UpRight'),
  new Line(new Point(8, 4), 'UpRight'),
];