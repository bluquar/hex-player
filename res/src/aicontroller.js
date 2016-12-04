import {GraphicPoint} from 'graphicpoint.js';
import {Renderable} from 'renderable.js';
import {StrategyStore} from 'strategystore.js';

import {makeDiv} from 'domutils.js';

import type {GameView} from 'gameview.js';
import type {Loggable} from 'renderable.js';
import type {Strategy, StrategyConfig} from 'strategy.js';

const DEBUG_MODE = true;

export class AIController extends Renderable {
  _strategyConfig: ?StrategyConfig;
  _strategy: ?Strategy;
  _strategyHook: ?HTMLElement;
  _elem: ?HTMLElement;
  _gameView: GameView;

  constructor(gameView: GameView) {
    super();
    this._gameView = gameView;
  }

  render(): HTMLElement {
    let text = document.createTextNode('AI Controller');
    let header = document.createElement('h1');
    header.appendChild(text);
    let div = makeDiv(
      [], 
      'aicontroller', 
      null, 
      new GraphicPoint(50, 500),
    );
    div.appendChild(header);
    div.appendChild(this._renderStrategySelector());
    div.appendChild(this._renderStrategyControls());
    this._elem = div;

    this._setStrategyConfig(
      StrategyStore.getDefaultStrategyConfig()
    );
    return div;
  }

  _setStrategyConfig(strategyConfig: StrategyConfig) {
    if (this._elem == null) return;
    if (!this._strategyHook) {
      this._strategyHook = document.createElement('div');
      if (this._elem != null) {
        this._elem.appendChild(this._strategyHook);  
      }
    }

    this._strategyConfig = strategyConfig;
    this._strategy = strategyConfig.getStrategy(
      this._strategyHook,
      DEBUG_MODE,
    );
    this._showStrategy();
  }

  _showStrategy(): void {
    if (this._strategy != null) {
      this._strategy.show(this._gameView);
    }
  }

  _makeMove(): void {
    if (this._strategy == null) {
      return;
    }
    const move = this._strategy.chooseMove(this._gameView);
    this._gameView.commitMove(move);
    this._showStrategy();
  }

  _renderStrategyControls(): HTMLElement {
    let controls = makeDiv(
      ['aicontrols'],
      null,
      null,
      null,
    );
    controls.appendChild(
      this._renderMakeMoveControl()
    );
    return controls;
  }

  _renderMakeMoveControl(): HTMLElement {
    let button = document.createElement('button');
    button.type = 'button';
    button.appendChild(document.createTextNode('Make Move'));
    button.onclick = () => this._makeMove();
    return button;
  }

  _renderStrategySelector(): HTMLElement {
    let select = document.createElement('select');
    for (let strategyConfig of StrategyStore.strategyConfigs()) {
      const name = strategyConfig.name;
      let option = document.createElement('option');
      option.value = name;
      option.appendChild(document.createTextNode(name));
      select.appendChild(option);
    };
    select.onchange = () => {
      const strategyConfig = StrategyStore.getByName(select.value);
      if (strategyConfig != null) {
        this._setStrategyConfig(strategyConfig);  
      }
    };
    return select;
  }

  log(): Loggable {
    return {
      strategy: this._strategyConfig == null 
        ? null 
        : this._strategyConfig.name
    };
  }
};