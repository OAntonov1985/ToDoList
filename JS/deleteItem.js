'use strict'
import { renderCurrentToDoLost } from './renderMainList.js';
import renderArchiveToDo from './renderArchiveList.js';
import renderTotalListItem from './renderTotalList.js';


export default function deleteItem(itemId, arrArgument) {
    let index;
    let operatingArray;

    if (arrArgument === 'arrToDo') {
        operatingArray = JSON.parse(sessionStorage.getItem('arrToDo'));
        index = operatingArray.findIndex(item => item.id === +itemId.target.id);
    }
    else if (arrArgument === 'archiveToDo') {
        operatingArray = JSON.parse(sessionStorage.getItem('archiveToDo'));
        index = operatingArray.findIndex(item => item.id === +itemId.target.id);
    }

    if (index !== -1) {
        operatingArray.splice(index, 1);

        if (arrArgument === 'arrToDo') {
            sessionStorage.setItem('arrToDo', JSON.stringify(operatingArray));
            renderCurrentToDoLost()
        } else if (arrArgument === 'archiveToDo') {
            sessionStorage.setItem('archiveToDo', JSON.stringify(operatingArray));
            renderArchiveToDo()
        }
    };
    renderTotalListItem()
};
