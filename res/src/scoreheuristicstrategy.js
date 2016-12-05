import {GameView} from 'gameview.js';
import {HeuristicStrategy} from 'heuristicstrategy.js';
import {Move} from 'move.js';

export class ScoreHeuristicStrategy extends HeuristicStrategy {

  _baselineScore: ?number;

  baseline(view: GameView) {
    this._baselineScore = view.getScore();    
  }

  _scoreDelta(view: GameView, baselineScore: number) {
    return view.getScore() - baselineScore;
  }

  heuristic(view: GameView, move: Move): number {
    if (this._baselineScore == null) {
      throw 'uninitialized';
    } else {
      return this._scoreDelta(view, this._baselineScore);
    }
  }
}