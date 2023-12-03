'use strict'
import { arrToDo } from './main.js';
import { renderCurrentToDoLost } from './renderMainList.js';
import clearForm from './clearForm.js'

export default function modalWindow(event) {

}



const openModalBtn = document.querySelector('.button__create__note');
const closeModalBtn = document.querySelector('.close');
const modal = document.querySelector('.modal__window');
const noteForm = document.getElementById('noteForm');
const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', modalWindow)

let editingNote = null;

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});




saveBtn.addEventListener('click', () => {
    event.preventDefault()
    const formData = new FormData(noteForm);
    const note = {};
    formData.forEach((value, key) => {
        note[key] = value;
    });


    if (editingNote) {
        // Редактирование существующей заметки
        // Здесь вы можете добавить логику обновления существующей заметки в хранилище данных
        console.log('Updating existing note:', note);
    } else {
        if (note.Name.length < 10) {
            alert('Name is too short');
        }
        else if (note.Content.length < 10) {
            alert('Not enough content!!! Add more please');
        }
        else if (note.Name.length >= 10 && note.Content.length >= 10) {
            let num = String(arrToDo.length + 1);
            let newObj = {};
            newObj = Object.assign({ "id": num }, note);
            arrToDo.push(newObj);
            renderCurrentToDoLost(arrToDo);
            modal.style.display = 'none';
        }
    }
    clearForm();
});



// Зміна кольору полів input
document.getElementById('textInput').addEventListener('input', function () {
    const inputValue = this.value;
    const minLength = 10;

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



