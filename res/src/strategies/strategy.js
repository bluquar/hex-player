import {GameView} from 'gameview.js';
import {Move} from 'move.js';

export class Strategy {
  _hook: HTMLElement;
  _debug: boolean;
  _shownElement: ?HTMLElement;

  constructor(hook: HTMLElement, debug: boolean) {
    this._hook = hook;
    this._debug = debug;
  }

  chooseMove(view: GameView): Move {
    throw 'abstract';
  }

  explain(view: GameView): HTMLElement {
    throw 'abstract';
  }

  show(view: GameView): void {
    if (this._shownElement != null) {
      this._shownElement.remove();
    }
    const elem = this.explain(view);
    this._hook.appendChild(elem);
    this._shownElement = elem;
  }
}

export class StrategyConfig {
  _name: string;
  _strategyConstructor: (hook: HTMLElement, debug: boolean) => Strategy;

  constructor(
    name: string,
    strategyConstructor: (hook: HTMLElement, debug: boolean) => Strategy,
  ) {
    this._name = name;
    this._strategyConstructor = strategyConstructor;
  }

  get name(): string {
    return this._name;
  }

  getStrategy(hook: HTMLElement, debug: boolean): Strategy {
    return this._strategyConstructor(hook, debug);
  }
}