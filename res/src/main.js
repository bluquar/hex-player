import {Controller} from 'controller.js';
import {StandaloneDOM} from 'standalone-dom.js';

const _window = window;
const _document = document;

function main(): void {
  const controller = new Controller(); 
  controller.init();
  console.log(controller.log());
  controller.attach_to_dom(
    new StandaloneDOM(_document),
    () => {
      console.log("Attached");
    }
  );
  _window.c = controller;
}

document.addEventListener(
  "DOMContentLoaded", 
  event => main(),
);