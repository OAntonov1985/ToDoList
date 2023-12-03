'use strict'
import { arrToDo } from './main.js';
import { renderCurrentToDoLost } from './renderMainList.js';
import clearForm from './clearForm.js'

let editingNote = {};
let flag = -5;
const openModalBtn = document.querySelector('.button__create__note');
const closeModalBtn = document.querySelector('.close');
const modal = document.querySelector('.modal__window');
const noteForm = document.getElementById('noteForm');
const saveBtn = document.getElementById('saveBtn');


export default function modalWindow(event) {
    flag = +event.target.id - 1;
    // console.log(flag)
    editingNote = arrToDo[+event.target.id - 1];
    modal.style.display = "block";
    document.querySelector('.input__name').value = editingNote.Name;
    document.querySelector('.input__created').value = editingNote.Created;
    document.querySelector('.input__select').value = editingNote.Category;
    document.querySelector('.input__textarea').value = editingNote.Content;
    document.getElementById('dates').value = editingNote.Dates;
}



openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});



saveBtn.addEventListener('click', modalWindow)
saveBtn.addEventListener('click', () => {
    event.preventDefault()
    const formData = new FormData(noteForm);
    const note = {};
    formData.forEach((value, key) => {
        note[key] = value;
    });


    if (flag !== -5) {
        console.log(777)
        console.log(note)
        modal.style.display = 'none';
        clearForm();




    } else {
        if (note.Name.length < 4) {
            alert('Name is too short');
        }
        else if (note.Content.length < 4) {
            alert('Not enough content!!! Add more please');
        }
        else if (note.Name.length >= 5 && note.Content.length >= 5) {
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



