import {HexDOM} from 'hexdom.js';

export class StandaloneDOM extends HexDOM {
  getNode(nodeName: string): HTMLElement {
    return this._document.getElementById(nodeName);
  }
}