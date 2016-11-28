import {randomItemInNonEmptyArray}
  from 'random-item-in-non-empty-array.js';

import {Piece} from 'piece.js';
import {Offset} from 'offset.js';

type PieceColor =
  | "green"
  | "yellow"
  | "purple";

export type {PieceColor};

const _pieceDefinitions: Piece[] = [
  // -------------- GREEN -------------- //
  new Piece([
    new Offset(0, 0), // ⬣ ⬣ ⬣ ⬣
    new Offset(0, 1),
    new Offset(0, 2),
    new Offset(0, 3),
  ], 'green', "line-horiz"),

  new Piece([
    new Offset(0, 0), // ⬣
    new Offset(1, 1), //  ⬣
    new Offset(2, 2), //   ⬣
    new Offset(3, 3), //    ⬣
  ], 'green', "line-diag-down"),

  new Piece([
    new Offset(0, 0), //     ⬣
    new Offset(1, 0), //    ⬣
    new Offset(2, 0), //   ⬣
    new Offset(3, 0), //  ⬣
  ], 'green', "line-diag-up"),

  // -------------- PURPLE -------------- //

  new Piece([
    new Offset(0, 0),  //   ⬣
    new Offset(1, 0),  //  ⬣ ⬣
    new Offset(1, 1),  //   ⬣
    new Offset(2, 1),  //       
  ], 'purple', 'rhombus-vert'),

  new Piece([
    new Offset(0, 0),  //   ⬣ ⬣
    new Offset(0, 1),  //  ⬣ ⬣
    new Offset(1, 0),  //   
    new Offset(1, 1),  //       
  ], 'purple', 'rhombus-diag-up'),

  new Piece([
    new Offset(0, 0),  //   ⬣ ⬣
    new Offset(0, 1),  //    ⬣ ⬣
    new Offset(1, 1), //   
    new Offset(1, 2),  //       
  ], 'purple', 'rhombus-diag-down'),

  // -------------- YELLOW -------------- //

  new Piece([
    new Offset(0, 0),  //   ⬣ ⬣
    new Offset(0, 1),  //  ⬣   ⬣
    new Offset(1, 0), //   
    new Offset(1, 2),  //       
  ], 'yellow', 'dome-d'),

  new Piece([
    new Offset(0, 0),  //  ⬣   ⬣
    new Offset(0, 2),  //   ⬣ ⬣
    new Offset(1, 1), //   
    new Offset(1, 2),  //       
  ], 'yellow', 'dome-l'),

  new Piece([
    new Offset(0, 0),  //    ⬣
    new Offset(1, 1),  //     ⬣
    new Offset(2, 0),  // ⬣ ⬣
    new Offset(2, 1),  //       
  ], 'yellow', 'dome-ul'),

  new Piece([
    new Offset(0, 0),  //  ⬣
    new Offset(1, 0),  // ⬣
    new Offset(2, 1),  //  ⬣ ⬣
    new Offset(2, 2),  //       
  ], 'yellow', 'dome-ur'),

  new Piece([
    new Offset(0, 0),  //  ⬣ ⬣
    new Offset(0, 1),  //      ⬣
    new Offset(1, 2),  //     ⬣
    new Offset(2, 2),  //       
  ], 'yellow', 'dome-dl'),

  // new Piece([
  //   new Offset(0, 0),  //  ⬣ ⬣
  //   new Offset(0, 1),  // ⬣
  //   new Offset(1, 0),  //   ⬣
  //   new Offset(2, 1),  //       
  // ], 'yellow', 'dome-dr'),

  // ------------ YELLOWGREEN ----------- //

  new Piece([
    new Offset(0, 0), // ⬣
  ], 'yellowgreen', 'singleton'),

  // -------------- ORANGE -------------- //

  new Piece([
    new Offset(0, 0),  //  ⬣
    new Offset(1, 0),  // ⬣ ⬣ ⬣
    new Offset(1, 1),  //   
    new Offset(1, 2),  //       
  ], 'orange', 'elbow-cc-r'),

  new Piece([
    new Offset(0, 0),  // ⬣ ⬣ ⬣
    new Offset(0, 1),  //     ⬣
    new Offset(0, 2),  //   
    new Offset(1, 2),  //       
  ], 'orange', 'elbow-cc-l'),

  new Piece([
    new Offset(0, 2),  //     ⬣
    new Offset(1, 0),  // ⬣ ⬣
    new Offset(1, 1),  //  ⬣ 
    new Offset(2, 1),  //       
  ], 'orange', 'elbow-cc-ur'),

  new Piece([
    new Offset(0, 0),  // ⬣
    new Offset(1, 1),  //  ⬣
    new Offset(2, 1),  // ⬣ ⬣ 
    new Offset(2, 2),  //       
  ], 'orange', 'elbow-cc-ul'),

  new Piece([
    new Offset(0, 0),  //  ⬣ ⬣
    new Offset(0, 1),  //   ⬣
    new Offset(1, 1),  //    ⬣
    new Offset(2, 2),  //       
  ], 'orange', 'elbow-cc-dr'),

  new Piece([
    new Offset(0, 0),  //   ⬣
    new Offset(1, 0),  //  ⬣ ⬣
    new Offset(1, 1),  // ⬣
    new Offset(2, 0),  //       
  ], 'orange', 'elbow-cc-dl'),

  // --------------- PINK --------------- //

  new Piece([
    new Offset(0, 0),  //  ⬣ ⬣ ⬣
    new Offset(0, 1),  //   ⬣
    new Offset(0, 2),  //
    new Offset(1, 1),  //       
  ], 'pink', 'elbow-cw-r'),

  new Piece([
    new Offset(0, 1),  //      ⬣
    new Offset(1, 0),  //  ⬣ ⬣ ⬣
    new Offset(1, 1),  //
    new Offset(1, 2),  //       
  ], 'pink', 'elbow-cw-l'),

  new Piece([
    new Offset(0, 0),  //   ⬣
    new Offset(1, 0),  //  ⬣
    new Offset(2, 0),  // ⬣ ⬣
    new Offset(2, 1),  //       
  ], 'pink', 'elbow-cw-ur'),

  // new Piece([
  //   new Offset(0, 0),  // ⬣
  //   new Offset(1, 1),  //  ⬣ ⬣
  //   new Offset(1, 2),  //   ⬣
  //   new Offset(2, 2),  //       
  // ], 'pink', 'elbow-cw-ul'),

  new Piece([
    new Offset(0, 0),  //   ⬣
    new Offset(1, 0),  //  ⬣ ⬣
    new Offset(1, 1),  //      ⬣
    new Offset(2, 2),  //       
  ], 'pink', 'elbow-cw-dr'),

  new Piece([
    new Offset(0, 0),  //  ⬣ ⬣
    new Offset(0, 1),  //   ⬣
    new Offset(1, 1),  //  ⬣
    new Offset(2, 1),  //       
  ], 'pink', 'elbow-cw-dl'),


];

export class PieceDefinitions {
  static randomPiece(): Piece {
    return randomItemInNonEmptyArray(_pieceDefinitions);
  }

  static forEachDefinition(callback: Piece => void): void {
    _pieceDefinitions.forEach((piece) => {
      callback(piece);
    });
  }
};