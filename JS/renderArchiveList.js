'use strict';
import { visibility } from './renderMainList.js';
import relocateToMainList from './relocateToMainList.js';
import { archiveToDo } from './main.js';
import { arrToDo } from './main.js';
import { renderCurrentToDoLost } from './renderMainList.js';
import deleteItem from './deleteItem.js';


export default function renderArchiveToDo(archiveToDo) {

    const taskList = archiveToDo.filter(item => item.Category == 'Task');
    const todoListElement = document.querySelector('.ul_task');
    todoListElement.innerHTML = '';
    taskList.map(task => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
        <li class="cat__name">${task.Name}</li>
        <li> ${task.Created}</li>
        <li> ${task.Category}</li>
        <li> ${task.Content}</li>
        <li class=${task.id}>${task.Dates ? `<input id=${task.id} class="input__date  input__date${task.id}" type="date" value="${task.Dates}" >` : `<input id=${task.id} class="input__date input__date${task.id}" type="date" value="" style="opacity: ${visibility}">`}</li>
        <li class="btn">           
            <button id=${task.id} class="button__active__list button__delete__2" value=delete_archive>                
            </button>
            <button id=${task.id} class="button__active__list button__arh__2">                
            </button>                          
        </li>    
        `;
        todoListElement.appendChild(taskElement);
        taskElement.classList.add('cat__listitem');
    });

    ////////////////////

    const ideaList = archiveToDo.filter(item => {
        return item.Category === 'Idea'
    });
    const ideaListElement = document.querySelector('.ul_idea');
    ideaListElement.innerHTML = '';
    ideaList.map(task => {
        const ideaElement = document.createElement('li');
        ideaElement.innerHTML = `
        <li class="cat__name">${task.Name}</li>
        <li> ${task.Created}</li>
        <li> ${task.Category}</li>
        <li> ${task.Content}</li>
        <li class=${task.id}>${task.Dates ? `<input id=${task.id} class="input__date  input__date${task.id}" type="date" value="${task.Dates}" >` : `<input id=${task.id} class="input__date input__date${task.id}" type="date" value="" style="opacity: ${visibility}">`}</li>
        <li class="btn">            
            <button id=${task.id} class="button__active__list button__delete__2" value=delete_archive>                
            </button>
            <button id=${task.id} class="button__active__list button__arh__2">                  
            </button>                          
        </li>    
        `;
        ideaListElement.appendChild(ideaElement);
        ideaElement.classList.add('cat__listitem');
    });

    ////////////////////

    const randomList = archiveToDo.filter(item => {
        return item.Category === 'Random thing'
    })
    const randomListElement = document.querySelector('.ul_random');
    randomListElement.innerHTML = '';
    randomList.map(task => {
        const randomElement = document.createElement('li');
        randomElement.innerHTML = `
        <li class="cat__name">${task.Name}</li>
        <li> ${task.Created}</li>
        <li> ${task.Category}</li>
        <li> ${task.Content}</li>
        <li class=${task.id}>${task.Dates ? `<input id=${task.id} class="input__date  input__date${task.id}" type="date" value="${task.Dates}" >` : `<input id=${task.id} class="input__date input__date${task.id}" type="date" value="" style="opacity: ${visibility}">`}</li>
        <li class="btn">            
            <button id=${task.id} class="button__active__list button__delete__2" value=delete_archive>                
            </button>
            <button id=${task.id} class="button__active__list button__arh__2">                
            </button>                          
        </li>    
        `;
        randomListElement.appendChild(randomElement);
        randomElement.classList.add('cat__listitem');
    });

    const arrButtonsDelete = document.querySelectorAll('.button__delete__2');
    arrButtonsDelete.forEach(function (button) {
        button.addEventListener('click', event => {
            deleteItem(event, archiveToDo);
        });
    });
    const arrButtonsRelocateToActualList = document.querySelectorAll('.button__arh__2');
    arrButtonsRelocateToActualList.forEach(function (button) {
        button.addEventListener('click', relocateToMainList);
    });
}


