import {GameView} from 'gameview.js';
import {HeuristicStrategy} from 'strategies/heuristics/heuristicstrategy.js';
import {Move} from 'move.js';

export class RandomHeuristicStrategy extends HeuristicStrategy {
  heuristic(view: GameView, move: Move): number {
    return 100 * Math.random();
  }
}