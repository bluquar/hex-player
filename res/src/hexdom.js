export class HexDOM {
  _document: Document;
  _oldChild: ?Node;

  static get hookname(): string {
    return 'HexDOM';
  }

  constructor(document: Document) {
    this._document = document;
  }

  getNode(nodeName: string): Node {
    throw "abstract";
  }

  setNode(node: Node): void {
    const cls = this.constructor;
    const hookname = cls.hookname;
    const hook = document.getElementById(hookname);
    if (this._oldChild) {
      hook.removeChild(this._oldChild);
    }
    hook.appendChild(node);
    this._oldChild = node;
  }
}