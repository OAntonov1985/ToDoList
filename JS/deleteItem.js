'use strict'
import { renderCurrentToDoLost } from './renderMainList.js';
import { arrToDo } from './main.js';


export default function deleteItem(num) {
    delete arrToDo[num];
    renderCurrentToDoLost(arrToDo);
};