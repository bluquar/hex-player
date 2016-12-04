import {Cell} from 'cell.js';
import {Offset} from 'offset.js';
import {PiecePlacement} from 'pieceplacement.js';
import {Point} from 'point.js';
import {Renderable} from 'renderable.js';

import {graphicPointOnBoard} from 'hexgraphicutils.js';

import type {Loggable} from 'renderable.js';
import type {PieceColor} from 'piecedefinitions.js';

const ORIGIN: Point = new Point(0, 0);

export class Piece extends Renderable {
  _offsets: Offset[];
  _color: PieceColor;
  _alias: string;
  _code: string;

  constructor(
    offsets: Offset[], 
    color: PieceColor, 
    alias: string,
    code: string,
  ) {
    super();
    this._offsets = offsets;
    this._color = color;
    this._alias = alias;
    this._code = code;

    for (let offset of this._offsets) {
      // const pointOnBoard = ORIGIN.plus(offset);
      const row = offset.row;
      const col = offset.col;
      const point = new Point(row, col);
      const graphicPoint = graphicPointOnBoard(point);
      const cell = new Cell(graphicPoint);
      cell.placeTile(this._color);
      this.addChild(cell);
    }
  }

  get color(): PieceColor {
    return this._color;
  }

  get code(): string {
    return this._code;
  }

  *offsets(): Iterator<Offset> {
    for (let offset of this._offsets) {
      yield offset;
    }
  }

  getPlacement(anchor: Point): PiecePlacement {
    return new PiecePlacement(this, anchor);
  }

  render(): HTMLElement {
    let node = document.createElement('div');
    node.className = 'piece';
    for (let child of this.children()) {
      node.appendChild(child.render());
    }
    return node;
  }

  log(): Loggable {
    return this._alias;
  }
}

