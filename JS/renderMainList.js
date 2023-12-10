"use strict";
import relocateItemToArhive from './relocateToArchive.js';
import deleteItem from './deleteItem.js';
import modalWindow from './modalWindow.js';
import { arrToDo } from './main.js';


export let visibility = "0";

function renderCurrentToDoLost(arr) {
    const todoListElement = document.getElementById('todoList');
    todoListElement.innerHTML = '';
    arr.map((task) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
        <li class="cat__name">${task.Name}</li>
        <li> ${task.Created}</li>
        <li> ${task.Category}</li>
        <li> ${task.Content}</li>
        <li class=${task.id}>${task.Dates ? `<input id=${task.id} class="input__date  input__date${task.id}" type="date" value="${task.Dates}" >` : `<input id=${task.id} class="input__date input__date${task.id}" type="date" value="" style="opacity: ${visibility}">`}</li>
        <li class="btn">
            <button id=${task.id} class="button__active__list button__edit">                
            </button>
            <button id=${task.id} class="button__active__list button__delete" value= delete_main>   
            </button>
        <button id=${task.id} class="button__active__list button__arh" value=archive_main>               
            </button>                          
        </li>    
        `;
        todoListElement.appendChild(taskElement);
        taskElement.classList.add('cat__listitem');
    });


    const arrButtonsEdir = document.querySelectorAll('.button__edit');
    arrButtonsEdir.forEach(function (button) {
        button.addEventListener('click', modalWindow);
    });

    const arrButtonsDelete = document.querySelectorAll('.button__delete');
    arrButtonsDelete.forEach(function (button) {
        button.addEventListener('click', event => {
            deleteItem(event, arrToDo);
        });
    });


    const arrButtonsRelocate = document.querySelectorAll('.button__arh');
    arrButtonsRelocate.forEach(function (button) {
        button.addEventListener('click', relocateItemToArhive);
    });
}



// Встановлення прозорості
document.addEventListener('click', function (e) {
    const dateInputs = document.querySelectorAll('.input__date');
    dateInputs.forEach(item => {
        item.addEventListener('click', function () {
            item.style.opacity = '1';
        });
    });
});


export { renderCurrentToDoLost };

// <img id=${task.id} class="img__logo" src="./img/garbageMod.png" alt="delete" value= delete_main title="Delete"> 