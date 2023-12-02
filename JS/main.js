'use strict';
import renderArhiveListItem from './renderArhiveList.js';
import { renderCurrentToDoLost } from './renderMainList.js';

export let arrToDo = [];
export let archiveTodo = [];
async function getDataFromJson() {
    try {
        const response = await fetch('../data.json');
        if (!response.ok) {
            throw new Error(`Ошибка при загрузке: ${response.status}`);
        }
        const jsonData = await response.json();
        arrToDo = jsonData.actualList;
        archiveTodo = jsonData.archive;

        renderCurrentToDoLost(arrToDo);
        renderArhiveListItem(archiveTodo);
    } catch (error) {
        console.error('Упс... Щось пішло не так', error);
        alert('Упс... Щось пішло не так', error);
    }
}

getDataFromJson();




