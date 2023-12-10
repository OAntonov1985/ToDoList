'use strict'
import { renderCurrentToDoLost } from './renderMainList.js';
import { arrToDo } from './main.js';
import { modal } from './modalWindow.js';
import renderTotalListItem from './renderTotalList.js';
import { setActionType } from './modalWindow.js';
import clearForm from './clearForm.js';
import selectItem from './selected.js';

export default function saveEditNote(event) {
    const index = arrToDo.findIndex(item => item.id === event + 1);
    const formData = new FormData(noteForm);
    const note = {};
    formData.forEach((value, key) => {
        note[key] = value;
    });
    if (note.Name.length >= 5 && note.Content.length >= 5) {
        let newObj = {};
        newObj = Object.assign({ "id": index }, note);
        arrToDo[index] = newObj;

        renderCurrentToDoLost(arrToDo);

        modal.style.display = 'none';
    };

    setActionType('edit');
    renderCurrentToDoLost(arrToDo);
    renderTotalListItem();
    clearForm();
};

