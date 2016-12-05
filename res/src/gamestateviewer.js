import {GameState} from 'gamestate.js';
import {GameView} from 'gameview.js';
import {Move} from 'move.js';
import {Piece} from 'piece.js';

export class GameStateViewer {
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

  constructor(state: GameState) {
    this.gameIsOver = () => {
      return state.gameIsOver();
    };

    this.hasUnknowns = () => {
      return state.hasUnknowns();
    };

    this.withEachUnknownResolved = (callback) => {
      return state.withEachUnknownResolved(callback);
    };

    this.withEachValidMoveApplied = (callback) => {
      return state.withEachValidMoveApplied(callback);
    };

    this.withMoveApplied = (move, callback) => {
      return state.withMoveApplied(move, callback);
    };

    this.commitMove = (move) => {
      return state.commitMove(move);
    };

    this.forEachPieceInTray = (callback) => {
      return state.forEachPieceInTray(callback);
    };

    this.render = () => {
      return state.render();
    };

    this.encode = () => {
      return state.encode();
    };

    this.getScore = () => {
      return state.score;
    }
  }
}