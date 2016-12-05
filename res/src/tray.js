import {Assert} from 'debug.js';
import {Move} from 'move.js';
import {PieceDefinitions} from 'piecedefinitions.js';
import {Piece} from 'piece.js';
import {Renderable} from 'renderable.js';

import type {Loggable} from 'renderable.js';

const _TRAY_SIZE = 3;

export class Tray extends Renderable {

  _pieces: Piece[];
  _known: boolean[];

  constructor() {
    super();
    this._pieces = (new Array(_TRAY_SIZE)).fill()
      .map((_, ii) => this._getNextPiece(ii));
    this._known = (new Array(_TRAY_SIZE)).fill()
      .map(_ => true);
  }

  _getNextPiece(ii: number): Piece {
    return PieceDefinitions.randomPiece();
  }

  forEachPiece(
    callback: (piece: Piece) => void,
  ): void {
    this._pieces.forEach(callback);
  }

  isValidCommit(move: Move) {
    const movePiece = move.piecePlacement.piece;
    for (let trayPiece of this._pieces) {
      if (trayPiece === movePiece) {
        return true;
      }
    }
    return false;
  }

  _replacePiece(i: number): void {
    this._pieces[i] = this._getNextPiece(i);
  }

  withMoveApplied(
    move: Move,
    callback: () => void,
  ): void {
    this.applyMove(move);
    callback();
    this.unapplyMove(move);
  }

  applyMove(move: Move): void {
    const ii = this.getMoveIndex(move);
    this._known[ii] = false;
  }

  unapplyMove(move: Move): void {
    const ii = this.getMoveIndex(move);
    this._known[ii] = true;
  }

  commitMove(move: Move): void {
    this._replacePiece(this.getMoveIndex(move));
  }

  forEachPieceApplied(
    callback: (piece: Piece) => void,
  ): void {
    this._pieces.forEach((piece, i) => {
      this._known[i] = false;
      callback(piece);
      this._known[i] = true;
    });
  }

  forEachKnownPiece(
    callback: (piece: Piece) => void,
  ): void {
    this._pieces.forEach((piece, i) => {
      if (this._known[i]) {
        callback(piece);
      }
    });
  }

  forEachUnknownTrayPiece(
    callback: (
      piece: Piece,
      probability: number,
    ) => void,
  ): void {
    this._pieces.forEach((piece, i) => {
      if (!this._known[i]) {
        PieceDefinitions.forEachDefinition(callback);
      }
    });
  }

  getMoveIndex(move: Move): number {
    if (move.trayIndex !== -1) {
      return move.trayIndex;
    }
    const movePiece = move.piecePlacement.piece;
    let ii = -1;
    this._pieces.forEach((trayPiece: Piece, i: number) => {
      if (movePiece === trayPiece) {
        ii = i;
      }
    });
    Assert(
      ii !== -1,
      'Invalid move for tray',
      () => [this.log(), move.log()],
    );
    move.setTrayIndex(ii);
    return move.trayIndex;
  }

  render(): HTMLElement {
    let node = document.createElement('div');
    node.className = 'tray';

    this._pieces.map((piece, ii) => {
      let pieceNode = piece.render();
      pieceNode.style.left = `${135 * ii}px`;
      node.appendChild(pieceNode);
    });
    return node;
  }

  log(): Loggable {
    if (!this._pieces) {
      return 'uninitialized';
    }
    return this._pieces.map(
      piece => piece.log()
    );
  }

  encode(): string {
    return this._pieces.map(piece =>
      piece.code
    ).join('');
  }
};