import {GameView} from 'gameview.js';
import {HeuristicStrategy} 
  from 'strategies/heuristics/heuristicstrategy.js';
import {Move} from 'move.js';
import {Piece} from 'piece.js';

export class ExpectedPlaceablePieces extends HeuristicStrategy {

  heuristic(view: GameView, move: Move): number {
    let E = 0;
    view.forEachKnownTrayPiece((piece: Piece) => {
      if (view.placesForPiece(piece) > 0) {
        E++;
      }
    });
    view.forEachUnknownTrayPiece((
      piece: Piece,
      probability: number
    ) => {
      if (view.placesForPiece(piece) > 0) {
        E += probability;
      }
    });
    return E;
  }
}