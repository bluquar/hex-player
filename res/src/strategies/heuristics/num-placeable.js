import {GameView} from 'gameview.js';
import {HeuristicStrategy} 
  from 'strategies/heuristics/heuristicstrategy.js';
import {Move} from 'move.js';
import {Piece} from 'piece.js';

export class NumPlaceable extends HeuristicStrategy {

  canPlaceBoth(view: GameView, known: Piece[]) {
    return view.canSequenceBePlaced(
      [known[0], known[1]]
    ) || view.canSequenceBePlaced(
      [known[1], known[0]]
    );
  }

  canPlaceOne(view: GameView, known: Piece[]) {
    return view.canSequenceBePlaced(
      [known[0]]
    ) || view.canSequenceBePlaced(
      [known[1]]
    );
  }

  heuristic(view: GameView, move: Move): number {
    let known = [];
    view.forEachKnownTrayPiece(piece => {
      known.push(piece);
    });

    if (!this.canPlaceOne(view, known)) {
      return 0;
    } else if (!this.canPlaceBoth(view, known)) {
      return 1;
    } else {
      return 2;
    }


  }
}