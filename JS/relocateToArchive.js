"use strict";
import { arrToDo } from './main.js';
import { archiveToDo } from './main.js';
import renderArchiveToDo from './renderArchiveList.js';
import deleteItem from './deleteItem.js';
import renderTotalListItem from './renderTotalList.js';


export default function relocateItemToArhive(event) {
    const num = +event.target.id - 1;
    const index = arrToDo.findIndex(item => item.id === +event.target.id);
    const array = arrToDo[index];
    archiveToDo.push(array);
    renderTotalListItem();
    deleteItem(event, arrToDo);
    renderArchiveToDo(archiveToDo);
};