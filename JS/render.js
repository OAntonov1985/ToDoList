"use strict";
import { arrToDo } from './main.js';

function renderCurrentToDoLost(arr) {
    const todoListElement = document.getElementById('todoList');
    todoListElement.innerHTML = '';
    arr.map((task) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
        <li>${task.Name}</li>
        <li> ${task.Category}</li>
        <li> ${task.Created}</li>
        <li> ${task.Content}</li>
        <li> ${task.Dates}</li> 
        <li >
            <button class="button__active__list button__edit">
                <img id=${task.id} class="img__garbage img__header" src="../img/edit.png" alt="garbage" value=edit>
            </button>
            <button class="button__active__list button__delete">
                <img id=${task.id} class="img__garbage img__header" src="./img/garbage.png" alt="garbage" value=delete> 
            </button>
            <button class="button__active__list button__arh">
                <img id=${task.id} class="img__garbage img__header" src="./img/arh.png" alt="garbage" value=arhive>   
            </button>                          
        </li>    
        `;
        todoListElement.appendChild(taskElement);
        taskElement.classList.add('cat__listitem');
        const arrButtons = document.querySelectorAll('.button__delete');
        arrButtons.forEach(function (button) {
            button.addEventListener('click', deleteItem);
        });

    });
}



function deleteItem(event) {
    delete arrToDo[+event.target.id - 1];
    renderCurrentToDoLost(arrToDo)
    console.log(+event.target.id - 1)
}

export { renderCurrentToDoLost };

