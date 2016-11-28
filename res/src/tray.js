import {PieceDefinitions} from 'piecedefinitions.js';
import {Piece} from 'piece.js';
import {Renderable} from 'renderable.js';

import type {Loggable} from 'renderable.js';

const _TRAY_SIZE = 3;

export class Tray extends Renderable {

  _pieces: Piece[];

  constructor() {
    super();
    this._pieces = (new Array(_TRAY_SIZE)).fill()
      .map((_, ii) => this._getNextPiece(ii));
  }

  _getNextPiece(ii: number): Piece {
    return PieceDefinitions.randomPiece();
  }

  getNode(): Node {
    let node = document.createElement('div');
    node.className = 'tray';

    this._pieces.map((piece, ii) => {
      let pieceNode = piece.render();
      pieceNode.style.left = `${135 * ii}px`;
      node.appendChild(pieceNode);
    });
    return node;
  }

  getKey(): ?Loggable {
    return this.log();
  }

  log(): Loggable {
    if (!this._pieces) {
      return 'uninitialized';
    }
    return this._pieces.map(
      piece => piece.log()
    );
  }
};