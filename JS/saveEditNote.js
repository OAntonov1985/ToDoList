'use strict'
import { renderCurrentToDoLost } from './renderMainList.js';
import { arrToDo } from './main.js';
import { modal } from './modalWindow.js';
import { itemNum } from './modalWindow.js';
import { setItemNum } from './modalWindow.js';
import { setActionType } from './modalWindow.js';
import clearForm from './clearForm.js';

export default function saveEditNote(event) {
    const formData = new FormData(noteForm);
    const note = {};
    formData.forEach((value, key) => {
        note[key] = value;
    });
    if (note.Name.length >= 5 && note.Content.length >= 5) {
        let newObj = {};
        newObj = Object.assign({ "id": itemNum + 1 }, note);
        arrToDo[itemNum] = newObj;

        modal.style.display = 'none';
    };
    setItemNum(-1);
    setActionType('edit');
    renderCurrentToDoLost(arrToDo);
    clearForm();
};

