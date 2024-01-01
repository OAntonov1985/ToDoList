'use struct'
import clearForm from './clearForm.js';
import { renderCurrentToDoLost } from './renderMainList.js';
import renderTotalListItem from './renderTotalList.js';
const modal = document.querySelector('.modal__window');



export default function saveNewNote(event) {
    event.preventDefault();
    const operatingArray = JSON.parse(sessionStorage.getItem('arrToDo'));
    let itemId = JSON.parse(sessionStorage.getItem('itemId'));
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
        let newObj = {};
        newObj = Object.assign({ "id": itemId + 1 }, note);
        itemId = itemId + 1;
        operatingArray.push(newObj);
        sessionStorage.setItem('itemId', JSON.stringify(itemId + 1));
        sessionStorage.setItem('arrToDo', JSON.stringify(operatingArray));
        renderCurrentToDoLost();
        modal.style.display = 'none';
    };

    clearForm();
    renderTotalListItem();
}


