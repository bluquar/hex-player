import {Assert} from 'debug.js';
import {Move} from 'move.js';

export class MoveStack {
  _moves: Move[];

  constructor() {
    this._moves = [];
  }

  push(move: Move): void {
    this._moves.push(move);
  }

  pop(move: Move): void {
    const popped = this._moves.pop();
    Assert(
      popped === move,
      'Unexpected popped value from MoveStack: ' +
      '[expected, actual]',
      () => [move, popped],
    );
  }

  isEmpty(): boolean {
    return this._moves.length === 0;
  }

  flush(): void {
    this._moves = [];
  }
};