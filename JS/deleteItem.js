'use strict'
import { renderCurrentToDoLost } from './renderMainList.js';
import renderArchiveToDo from './renderArchiveList.js';
import renderTotalListItem from './renderTotalList.js';


export default function deleteItem(event, array) {
    console.log(event.target.value)
    const index = array.findIndex(item => item.id === +event.target.id);
    if (index !== -1) {
        array.splice(index, 1);
        if (event.target.value === "delete_main" || event.target.value === "archive_main") {
            renderCurrentToDoLost(array);
        } else if (event.target.value === "delete_archive") {
            renderArchiveToDo(array);
        }
    }
    renderTotalListItem();
};
