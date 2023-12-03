'use strict'
import { renderCurrentToDoLost } from './renderMainList.js';
import { arrToDo } from './main.js';


export default function deleteItem(num) {
    if (typeof num !== "number") {
        delete arrToDo[+num.target.id - 1];
    }
    delete arrToDo[num];
    renderCurrentToDoLost(arrToDo);
};
