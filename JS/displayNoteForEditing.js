"use strict"
import { arrToDo } from './main.js';
import { modal } from './modalWindow.js';

let editingNote = {};

export default function displayNoteForEditing(num) {
    const index = arrToDo.findIndex(item => item.id === num + 1);
    editingNote = arrToDo[index];
    modal.style.display = "block";
    document.querySelector('.input__name').value = editingNote.Name;
    document.querySelector('.input__created').value = editingNote.Created;
    document.querySelector('.input__select').value = editingNote.Category;
    document.querySelector('.input__textarea').value = editingNote.Content;
    document.getElementById('dates').value = editingNote.Dates;
};