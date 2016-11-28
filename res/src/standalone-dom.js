import {HexDOM} from 'hexdom.js';

export class StandaloneDOM extends HexDOM {
  getNode(nodeName: string): Node {
    return this._document.getElementById(nodeName);
  }
}