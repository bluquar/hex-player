import {Assert} from 'debug.js';
import {GraphicPoint} from 'graphicpoint.js';
import {Renderable} from 'renderable.js';

import type {Loggable} from 'renderable.js';
import type {PieceColor} from 'piecedefinitions.js';

const CellStateTypes = {
  UNOCCUPIED: 'UNOCCUPIED',
  OCCUPIED: 'OCCUPIED',
};

type CellState = $Keys<typeof CellStateTypes>;

export class Cell extends Renderable {
  _graphicPoint: GraphicPoint;
  _state: CellState;
  _color: ?PieceColor;

  constructor(graphicPoint: GraphicPoint) {
    super();
    this._state = CellStateTypes.UNOCCUPIED;
    this._color = null;
    this._graphicPoint = graphicPoint;
  }

  get isOccupied(): boolean {
    return (this._state === CellStateTypes.OCCUPIED);
  }

  placeTile(color: PieceColor) {
    Assert(
      !this.isOccupied, 
      'Attempt to place tile on occupied cell',
      () => this.toConsoleOutput()
    );
    this._state = CellStateTypes.OCCUPIED;
    this._color = color;
  }

  removeTile() {
    Assert(
      this.isOccupied,
      'Attempt to remove tile from unoccupied cell',
      () => this.toConsoleOutput()
    );
    this._state = CellStateTypes.UNOCCUPIED;
    this._color = null;
  }

  getNode(): Node {
    let div = document.createElement('div');
    div.className = "hex ";
    if (this.isOccupied) {
      div.className += "occupied ";
      if (this._color) {
        div.className += this._color;  
      }
    } else {
      div.className += "unoccupied ";
    }
    div.style.top = `${this._graphicPoint.row}px`;
    div.style.left = `${this._graphicPoint.col}px`;
    return div;
  }

  getKey(): ?Loggable {
    return this.log();
  }

  log(): Loggable {
    return [this._state, this._color];
  }

  toConsoleOutput(): any {
    return 
  }
}