'use strict'
import { renderCurrentToDoLost } from './renderMainList.js';
import { modal } from './modalWindow.js';
import renderTotalListItem from './renderTotalList.js';
import { setActionType } from './modalWindow.js';
import clearForm from './clearForm.js';


export default function saveEditNote(itemId) {
    const operatingArray = JSON.parse(sessionStorage.getItem('arrToDo'));
    const index = operatingArray.findIndex(item => item.id === itemId + 1);
    const formData = new FormData(noteForm);
    const note = {};
    formData.forEach((value, key) => {
        note[key] = value;
    });
    if (note.Name.length >= 5 && note.Content.length >= 5) {
        let newObj = {};
        newObj = Object.assign({ "id": index }, note);
        operatingArray[index] = newObj;
        sessionStorage.setItem('arrToDo', JSON.stringify(operatingArray));
        renderCurrentToDoLost();
        modal.style.display = 'none';
    };

    setActionType('edit');
    renderCurrentToDoLost();
    renderTotalListItem();
    clearForm();
};

