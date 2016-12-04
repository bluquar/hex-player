import {GraphicPoint} from 'graphicpoint.js';

export function makeDiv(
  classNames: ?string[],
  id: ?string,
  textContents: ?string,
  at: ?GraphicPoint,
): HTMLElement {
  let elem = document.createElement('div');
  if (id) {
    elem.id = id;
  }

  classNames = classNames || [];
  if (at) {
    classNames.push('abs');
  }

  if (classNames.length > 0) {
    elem.className = classNames.join(' ');
  }

  if (textContents) {
    elem.appendChild(
      document.createTextNode(textContents),
    );
  }

  if (at) {
    elem.style.top = `${at.row}px`;
    elem.style.left = `${at.col}px`;
  }

  return elem;
}