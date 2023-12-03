"use strict";
import relocateItemToArhive from './relocateToArhive.js';
import deleteItem from './deleteItem.js';
import modalWindow from './modalWindow.js';

let visibility = "0";

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
                <img id=${task.id} class="img__logo" src="../img/editMod.png" alt="edit" value=edit>
            </button>
            <button id=${task.id} class="button__active__list button__delete">
                <img id=${task.id} class="img__logo" src="./img/garbageMod.png" alt="delete" value=delete> 
            </button>
            <button id=${task.id} class="button__active__list button__arh">
                <img id=${task.id} class="img__logo img__main" src="./img/arhMod.png" alt="arhive" value=arhive>   
            </button>                          
        </li>    
        `;
        todoListElement.appendChild(taskElement);
        taskElement.classList.add('cat__listitem');


        const arrButtonsDelete = document.querySelectorAll('.button__delete');
        arrButtonsDelete.forEach(function (button) {
            button.addEventListener('click', deleteItem);
        });


        const arrButtonsRelocate = document.querySelectorAll('.button__arh');
        arrButtonsRelocate.forEach(function (button) {
            button.addEventListener('click', relocateItemToArhive);
        });
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

