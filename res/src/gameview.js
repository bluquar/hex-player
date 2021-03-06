import {Move} from 'move.js';
import {Piece} from 'piece.js';

export interface GameView {

  gameIsOver: () => boolean;
  
  hasUnknowns: () => boolean;
  
  withEachUnknownResolved: (
    callback: (probability: number) => void
  ) => void;

  withEachValidMoveApplied: (
    callback: (move: Move) => void
  ) => void;

  withMoveApplied: (
    move: Move, 
    callback: () => void
  ) => void;

  commitMove: (move: Move) => boolean;

  forEachPieceInTray: (
    callback: (piece: Piece) => void,
  ) => void;

  render: () => HTMLElement;

  encode: () => string;

  getScore: () => number;

  forEachKnownTrayPiece: (
    callback: (piece: Piece) => void,
  ) => void;

  forEachUnknownTrayPiece: (
    callback: (
      piece: Piece,
      probability: number,
    ) => void,
  ) => void;

  placesForPiece: (
    piece: Piece,
  ) => number;

  canPieceBePlaced: (
    piece: Piece,
  ) => boolean;

  canSequenceBePlaced: (
    sequence: Piece[],
  ) => boolean;
}