import {load, save} from './storage.js';
let state = load();
export const getState = () => state;
export const setState = s => {state = s; save(state);};