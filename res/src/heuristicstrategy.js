import {GameView} from 'gameview.js';
import {Move} from 'move.js';
import {Strategy} from 'strategy.js';

import {makeDiv} from 'domutils.js';

import type {Loggable} from 'renderable.js';

type MoveAndScore = {
  move: Move,
  score: number,
};

const ROWS_EXPANDED_BY_DEFAULT = 3;
const TOGGLE_ARROW_EXPANDED = '▼';
const TOGGLE_ARROW_COLLAPSED = '▶';

export class HeuristicStrategy extends Strategy {
  _cachedHeuristicsCode: ?string;
  _cachedHeuristics: ?MoveAndScore[];

  baseline(view: GameView): void { }

  heuristic(view: GameView, move: Move): number {
    throw 'abstract';
  }

  explain(view: GameView): HTMLElement {
    const scoredMoves = this._getScoredMoves(view);
    let explainDiv = makeDiv(['ai-heuristic-explain']);
    let table = document.createElement('table');

    let headTR = document.createElement('tr');
    let emptyTH = document.createElement('th');
    let scoreTH = document.createElement('th');
    scoreTH.appendChild(makeDiv(
      null, null, 'Score',
    ));
    let boardTH = document.createElement('th');
    boardTH.appendChild(makeDiv(
      null, null, 'Board',
    ));
    headTR.appendChild(emptyTH);
    headTR.appendChild(scoreTH);
    headTR.appendChild(boardTH);
    table.appendChild(headTR);

    scoredMoves.forEach((scoredMove, i) => {
      let expanded = i < ROWS_EXPANDED_BY_DEFAULT;

      let tr = document.createElement('tr');
      tr.className = expanded ? 'expanded' : 'collapsed';

      const score = scoredMove.score;
      const move = scoredMove.move;

      let toggleTD = document.createElement('td');
      let toggleA = document.createElement('a');
      let toggleDiv = makeDiv(
        ['toggle'],
        null,
        expanded ? TOGGLE_ARROW_EXPANDED : TOGGLE_ARROW_COLLAPSED
      );
      toggleA.appendChild(toggleDiv);
      toggleA.href = '#';
      toggleA.onclick = () => {
        expanded = !expanded;
        toggleA.removeChild(toggleDiv);
        toggleDiv = makeDiv(
          ['toggle'],
          null,
          expanded ? TOGGLE_ARROW_EXPANDED : TOGGLE_ARROW_COLLAPSED
        );
        toggleA.appendChild(toggleDiv);
        tr.className = expanded ? 'expanded' : 'collapsed';
      };
      toggleTD.appendChild(toggleA);

      let scoreTD = document.createElement('td');
      scoreTD.appendChild(makeDiv(
        ['ai-heuristic-explain-score-div'],
        null,
        score.toFixed(2),
      ));

      let moveTD = document.createElement('td');
      let moveDiv = makeDiv(
        ['move'],
      );
      moveDiv.appendChild(
        this._getGameElementWithMoveApplied(view, move),
      );
      moveTD.appendChild(moveDiv);

      tr.appendChild(toggleTD);
      tr.appendChild(scoreTD);
      tr.appendChild(moveTD);
      table.appendChild(tr);
    });
    explainDiv.appendChild(table);
    return explainDiv;
  }

  _getGameElementWithMoveApplied(
    view: GameView, 
    move: Move
  ): HTMLElement {
    let elem = makeDiv();
    view.withMoveApplied(move, () => {
      elem = view.render();
    });
    return elem;
  }

  chooseMove(view: GameView): Move {
    const scoredMoves = this._getScoredMoves(view);
    return scoredMoves[0].move;
  }

  _getScoredMoves(view: GameView): MoveAndScore[] {
    const encoded = view.encode();
    if (this._cachedHeuristicsCode != null &&
        this._cachedHeuristicsCode === encoded &&
        this._cachedHeuristics != null) {
      return this._cachedHeuristics;
    }

    this.baseline(view);
    let scoredMoves: MoveAndScore[] = [];
    view.withEachValidMoveApplied((move: Move) => {
      const score = this.heuristic(view, move);
      scoredMoves.push({move, score});
    });
    scoredMoves.sort((a: MoveAndScore, b: MoveAndScore) =>
      a.score > b.score ? -1 : 1
    );
    
    this._cachedHeuristicsCode = encoded;
    this._cachedHeuristics = scoredMoves;
    return this._cachedHeuristics;
  }

  _logScoredMove(scoredMove: MoveAndScore): Loggable {
    const score = scoredMove.score;
    const move = scoredMove.move;
    const piecePlacement = move.piecePlacement;
    const piece = piecePlacement.piece;
    const placement = piecePlacement.placement;
    return [score, piece.log(), placement.log()];
  }

  _logScoredMoves(scoredMoves: MoveAndScore[]): void {
    console.log('Scored', scoredMoves.map((scoredMove: MoveAndScore) =>
      this._logScoredMove(scoredMove),
    ));
  }
}