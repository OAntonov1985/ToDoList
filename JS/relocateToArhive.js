"use strict";
import { arrToDo } from './main.js';
import { archiveTodo } from './main.js';
import deleteItem from './deleteItem.js';
import renderArhiveListItem from './renderArhiveList.js';

export default function relocateItemToArhive(event) {
    const num = +event.target.id - 1;
    let filter = archiveTodo.filter(item => item.NoteCategory == arrToDo[num].Category);
    filter[0].Arhived = String(+filter[0].Arhived + 1);
    deleteItem(num)
    renderArhiveListItem(archiveTodo);
};