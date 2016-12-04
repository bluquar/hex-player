import {randomItemInNonEmptyArray}
  from 'random-item-in-non-empty-array.js';

import {Piece} from 'piece.js';
import {Offset} from 'offset.js';

type PieceColor =
  | 'green'
  | 'orange'
  | 'pink'
  | 'purple'
  | 'yellow'
  | 'yellowgreen';

export type {PieceColor};

const _pieceDefinitions: Piece[][] = [
  // -------------- GREEN -------------- //
  [
    new Piece([
      new Offset(0, 0), // ⬣ ⬣ ⬣ ⬣
      new Offset(0, 1),
      new Offset(0, 2),
      new Offset(0, 3),
    ], 'green', 'line-horiz', '1'),

    new Piece([
      new Offset(0, 0), // ⬣
      new Offset(1, 1), //  ⬣
      new Offset(2, 2), //   ⬣
      new Offset(3, 3), //    ⬣
    ], 'green', 'line-diag-down', '2'),

    new Piece([
      new Offset(0, 0), //     ⬣
      new Offset(1, 0), //    ⬣
      new Offset(2, 0), //   ⬣
      new Offset(3, 0), //  ⬣
    ], 'green', 'line-diag-up', '3'),
  ],

  // -------------- PURPLE -------------- //

  [
    new Piece([
      new Offset(0, 0),  //   ⬣
      new Offset(1, 0),  //  ⬣ ⬣
      new Offset(1, 1),  //   ⬣
      new Offset(2, 1),  //       
    ], 'purple', 'rhombus-vert', '4'),

    new Piece([
      new Offset(0, 0),  //   ⬣ ⬣
      new Offset(0, 1),  //  ⬣ ⬣
      new Offset(1, 0),  //   
      new Offset(1, 1),  //       
    ], 'purple', 'rhombus-diag-up', '5'),

    new Piece([
      new Offset(0, 0),  //   ⬣ ⬣
      new Offset(0, 1),  //    ⬣ ⬣
      new Offset(1, 1), //   
      new Offset(1, 2),  //       
    ], 'purple', 'rhombus-diag-down', '6'),
  ],

  // -------------- YELLOW -------------- //

  [
    new Piece([
      new Offset(0, 0),  //   ⬣ ⬣
      new Offset(0, 1),  //  ⬣   ⬣
      new Offset(1, 0), //   
      new Offset(1, 2),  //       
    ], 'yellow', 'dome-d', '7'),

    new Piece([
      new Offset(0, 0),  //  ⬣   ⬣
      new Offset(0, 2),  //   ⬣ ⬣
      new Offset(1, 1), //   
      new Offset(1, 2),  //       
    ], 'yellow', 'dome-l', '8'),

    new Piece([
      new Offset(0, 0),  //    ⬣
      new Offset(1, 1),  //     ⬣
      new Offset(2, 0),  // ⬣ ⬣
      new Offset(2, 1),  //       
    ], 'yellow', 'dome-ul', '9'),

    new Piece([
      new Offset(0, 0),  //  ⬣
      new Offset(1, 0),  // ⬣
      new Offset(2, 1),  //  ⬣ ⬣
      new Offset(2, 2),  //       
    ], 'yellow', 'dome-ur', 'a'),

    new Piece([
      new Offset(0, 0),  //  ⬣ ⬣
      new Offset(0, 1),  //      ⬣
      new Offset(1, 2),  //     ⬣
      new Offset(2, 2),  //       
    ], 'yellow', 'dome-dl', 'b'),

    new Piece([
      new Offset(0, 0),  //  ⬣ ⬣
      new Offset(0, 1),  // ⬣
      new Offset(1, 0),  //. ⬣
      new Offset(2, 1),  //       
    ], 'yellow', 'dome-dr', 'c'),
  ],

  // ------------ YELLOWGREEN ----------- //

  [
    new Piece([
      new Offset(0, 0), // ⬣
    ], 'yellowgreen', 'singleton', 'd'),
  ],

  // -------------- ORANGE -------------- //

  [
    new Piece([
      new Offset(0, 0),  //  ⬣
      new Offset(1, 0),  // ⬣ ⬣ ⬣
      new Offset(1, 1),  //   
      new Offset(1, 2),  //       
    ], 'orange', 'elbow-cc-r', 'e'),

    new Piece([
      new Offset(0, 0),  // ⬣ ⬣ ⬣
      new Offset(0, 1),  //     ⬣
      new Offset(0, 2),  //   
      new Offset(1, 2),  //       
    ], 'orange', 'elbow-cc-l', 'f'),

    new Piece([
      new Offset(0, 1),  //     ⬣
      new Offset(1, 0),  // ⬣ ⬣
      new Offset(1, 1),  //  ⬣ 
      new Offset(2, 1),  //       
    ], 'orange', 'elbow-cc-ur', 'g'),

    new Piece([
      new Offset(0, 0),  // ⬣
      new Offset(1, 1),  //  ⬣
      new Offset(2, 1),  // ⬣ ⬣ 
      new Offset(2, 2),  //       
    ], 'orange', 'elbow-cc-ul', 'h'),

    new Piece([
      new Offset(0, 0),  //  ⬣ ⬣
      new Offset(0, 1),  //   ⬣
      new Offset(1, 1),  //    ⬣
      new Offset(2, 2),  //       
    ], 'orange', 'elbow-cc-dr', 'i'),

    new Piece([
      new Offset(0, 0),  //   ⬣
      new Offset(1, 0),  //  ⬣ ⬣
      new Offset(1, 1),  // ⬣
      new Offset(2, 0),  //       
    ], 'orange', 'elbow-cc-dl', 'j'),
  ],

  // --------------- PINK --------------- //

  [
    new Piece([
      new Offset(0, 0),  //  ⬣ ⬣ ⬣
      new Offset(0, 1),  //   ⬣
      new Offset(0, 2),  //
      new Offset(1, 1),  //       
    ], 'pink', 'elbow-cw-r', 'k'),

    new Piece([
      new Offset(0, 1),  //      ⬣
      new Offset(1, 0),  //  ⬣ ⬣ ⬣
      new Offset(1, 1),  //
      new Offset(1, 2),  //       
    ], 'pink', 'elbow-cw-l', 'l'),

    new Piece([
      new Offset(0, 0),  //   ⬣
      new Offset(1, 0),  //  ⬣
      new Offset(2, 0),  // ⬣ ⬣
      new Offset(2, 1),  //       
    ], 'pink', 'elbow-cw-ur', 'm'),

    new Piece([
      new Offset(0, 0),  // ⬣
      new Offset(1, 1),  //  ⬣ ⬣
      new Offset(1, 2),  //   ⬣
      new Offset(2, 2),  //       
    ], 'pink', 'elbow-cw-ul', 'n'),

    new Piece([
      new Offset(0, 0),  //   ⬣
      new Offset(1, 0),  //  ⬣ ⬣
      new Offset(1, 1),  //      ⬣
      new Offset(2, 2),  //       
    ], 'pink', 'elbow-cw-dr', 'o'),

    new Piece([
      new Offset(0, 0),  //  ⬣ ⬣
      new Offset(0, 1),  //   ⬣
      new Offset(1, 1),  //  ⬣
      new Offset(2, 1),  //       
    ], 'pink', 'elbow-cw-dl', 'p'),
  ],
];

export class PieceDefinitions {
  static randomPiece(): Piece {
    const pieceSet: Piece[] = 
      randomItemInNonEmptyArray(_pieceDefinitions)
    const piece: Piece =
      randomItemInNonEmptyArray(pieceSet);
    return piece;
  }

  static forEachDefinition(
    callback: (Piece, number) => void
  ): void {
    const pieceSetCount = _pieceDefinitions.length;
    _pieceDefinitions.forEach((pieceSet: Piece[]) => {
      const setSize = pieceSet.length;
      const probability = 1 / (pieceSetCount * setSize);
      pieceSet.forEach((piece: Piece) => {
        callback(piece, probability);
      });
    });
  }
}