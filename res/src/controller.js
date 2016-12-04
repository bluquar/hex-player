import {AIController} from 'aicontroller.js';
import {GameState} from 'gamestate.js';
import {GameStateViewer} from 'gamestateviewer.js';
import {HexDOM} from 'hexdom.js';
import {Renderable} from 'renderable.js';
import {StatusBar} from 'statusbar.js';

import {makeDiv} from 'domutils.js';

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
    this._aiController = new AIController(
      new GameStateViewer(this._gameState),
    );
  }

  attach_to_dom(dom: HexDOM, attached: TNoArgsNoRet): void {
    this._dom = dom;
    this.render();
    attached();
  }

  refresh(): void {
    this.render();
  }

  render(): HTMLElement {
    let elem = makeDiv(null, 'controller');
    let gshook = makeDiv(null, 'gshook');
    let aihook = makeDiv(null, 'aihook');
    gshook.appendChild(this._gameState.render(gshook));
    aihook.appendChild(this._aiController.render(aihook));
    elem.appendChild(gshook);
    elem.appendChild(aihook);
    this._dom.setNode(elem);
    return elem;
  }

  log(): Loggable {
    return {
      'Game State': this.game ? this.game.log() : 'uninitialized',
      'AI Controller': this.ai ? this.ai.log() : 'uninitialized',
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

