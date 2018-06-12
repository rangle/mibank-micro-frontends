// mycomponent: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './mycomponent.core.js';
import {
  MyComponent
} from './mycomponent.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MyComponent
  ], opts);
}