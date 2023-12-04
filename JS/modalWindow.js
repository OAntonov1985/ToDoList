'use strict'

import saveEditNote from './saveEditNote.js';
import saveNewNote from './saveNewNote.js';
import displayNoteForEditing from './displayNoteForEditing.js'


export let actionType = 'create';
export let itemNum = -1;


const openModalBtn = document.querySelector('.button__create__note');
const closeModalBtn = document.querySelector('.close');
export const modal = document.querySelector('.modal__window');
// const noteForm = document.getElementById('noteForm');
const saveBtn = document.getElementById('saveBtn');


export default function modalWindow(event) {
    itemNum = +event.target.id - 1
    displayNoteForEditing(itemNum);
    actionType = 'edit';
}

export function setItemNum(num) {
    itemNum = num;
}

export function setActionType(string) {
    actionType = string;
}



openModalBtn.addEventListener('click', () => {
    actionType = 'create';
    modal.style.display = 'block';
    console.log(actionType)
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

saveBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // saveEditNote(event);
    if (actionType === 'create') {
        saveNewNote(event);
        console.log(actionType)
    } else if (actionType === 'edit') {
        saveEditNote(event);
    }

});



// Зміна кольору полів input
document.getElementById('textInput').addEventListener('input', function () {
    const inputValue = this.value;
    const minLength = 5;

    if (inputValue.length < minLength) {
        this.setCustomValidity(`Text must be at least ${minLength} characters`);
    } else {
        this.setCustomValidity('');
    }
});

// Встановлення поточної дати
document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date().toISOString().split('T')[0];
    document.getElementById('created').value = currentDate;
});


