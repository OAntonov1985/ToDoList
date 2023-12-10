'use ctrict';
import deleteItem from './deleteItem.js';
import { arrToDo } from './main.js';
import { archiveToDo } from './main.js';
import renderArchiveToDo from './renderArchiveList.js';
import { renderCurrentToDoLost } from './renderMainList.js';
import renderTotalListItem from './renderTotalList.js';

export default function relocateToMainList(event) {
    const num = +event.target.id - 1;
    const index = archiveToDo.findIndex(item => item.id === +event.target.id);
    const array = archiveToDo[index];
    arrToDo.push(array);
    deleteItem(event, archiveToDo);
    renderCurrentToDoLost(arrToDo);
    renderArchiveToDo(archiveToDo);
    renderTotalListItem();
}