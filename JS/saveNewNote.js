'use struct'
import { arrToDo } from './main.js';
import { archiveToDo } from './main.js';
import clearForm from './clearForm.js';
import { renderCurrentToDoLost } from './renderMainList.js';

const modal = document.querySelector('.modal__window');

export default function saveNewNote(event) {
    event.preventDefault()
    const formData = new FormData(noteForm);
    const note = {};
    formData.forEach((value, key) => {
        note[key] = value;
    });
    if (note.Name.length < 4) {
        alert('Name is too short');
    }
    else if (note.Content.length < 4) {
        alert('Not enough content!!! Add more please');
    }
    else if (note.Name.length >= 5 && note.Content.length >= 5) {
        let num = String(archiveToDo[archiveToDo.length - 1].id + 1);
        // console.log(archiveToDo[archiveToDo.length - 1].id + 2)
        let newObj = {};
        newObj = Object.assign({ "id": num }, note);
        console.log(newObj)
        arrToDo.push(newObj);
        renderCurrentToDoLost(arrToDo);
        modal.style.display = 'none';
    };
    clearForm();
}


