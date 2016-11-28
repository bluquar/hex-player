import {AIController} from 'aicontroller.js';
import {GameState} from 'gamestate.js';
import {HexDOM} from 'hexdom.js';
import {Renderable} from 'renderable.js';
import {StatusBar} from 'statusbar.js';

import type {Loggable} from 'renderable.js';

type TNoArgsNoRet = () => void;

export class Controller extends Renderable {

  _gameState: GameState;
  _statusBar: StatusBar;
  _aiController: AIController;

  _dom: HexDOM;

  init(): void {
    this._statusBar = new StatusBar();
    this._gameState = new GameState();
    this._aiController = new AIController();
  }

  attach_to_dom(dom: HexDOM, attached: TNoArgsNoRet): void {
    this._dom = dom;
    this.render();
    attached();
  }

  refresh(): void {
    this.render();
  }

  render(): Node {
    const node = super.render();
    this._dom.setNode(node);
    return node;
  }

  getNode(): Node {
    let div = document.createElement('div');
    div.className = "controller";
    if (this._gameState) {
      div.appendChild(this._gameState.render());
    }
    return div;
  }

  getKey(): Loggable {
    return this.log();
  }

  log(): Loggable {
    return {
      'Game State': this.game ? this.game.log() : 'uninitialized',
    };
  }

  get game(): GameState {
    return this._gameState;
  }

  get status(): StatusBar {
    return this._statusBar;
  }

  get ai(): AIController {
    return this._aiController;
  }
}

