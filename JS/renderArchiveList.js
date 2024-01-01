'use strict';
import { visibility } from './renderMainList.js';
import deleteItem from './deleteItem.js';
import relocateItem from './relocateItem.js';


export default function renderArchiveToDo() {
    const archiveToDo = JSON.parse(sessionStorage.getItem('archiveToDo'));


    //////////////////  render Task list in archive  ////////////////////
    const taskList = archiveToDo.filter(item => item.Category == 'Task');
    const todoListElement = document.querySelector('.ul-task');
    todoListElement.innerHTML = '';
    taskList.map(task => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
        <div class="cat-name">${task.Name}</div>
        <div class="cat-craeted"> ${task.Created}</div>
        <div class="cat-category">${task.Category}</div>
        <div class="cat-content"> ${task.Content}</div>
        <div class="cat-date">${task.Dates ? `<input  class="input-date  input-date${task.id}" type="date" value="${task.Dates}" >` : `<input  class="input-date input-date${task.id}" type="date" value="" style="opacity: ${visibility}">`}</div>        
        <div class="btn">            
            <button id=${task.id} class="button-active-list button-delete-2">   
            </button>
        <button id=${task.id} class="button-active-list button-arh-2">           
            </button>                          
        </div>    
        `;
        todoListElement.appendChild(taskElement);
        taskElement.classList.add('cat-listarchive');
    });


    //////////////////  render Idea list in archive  ////////////////////
    const ideaList = archiveToDo.filter(item => {
        return item.Category === 'Idea'
    });
    const ideaListElement = document.querySelector('.ul-idea');
    ideaListElement.innerHTML = '';
    ideaList.map(task => {
        const ideaElement = document.createElement('li');
        ideaElement.innerHTML = `
        <div class="cat-name">${task.Name}</div>
        <div class="cat-craeted"> ${task.Created}</div>
        <div class="cat-category">${task.Category}</div>
        <div class="cat-content"> ${task.Content}</div>
        <div class="cat-date">${task.Dates ? `<input  class="input-date  input-date${task.id}" type="date" value="${task.Dates}" >` : `<input  class="input-date input-date${task.id}" type="date" value="" style="opacity: ${visibility}">`}</div>        
        <div class="btn">            
            <button id=${task.id} class="button-active-list button-delete-2">
            </button>
            <button id=${task.id} class="button-active-list button-arh-2">
            </button>
        </div>    
        `;
        ideaListElement.appendChild(ideaElement);
        ideaElement.classList.add('cat-listitem');
    });


    //////////////////  render Random thing list in archive  ////////////////////
    const randomList = archiveToDo.filter(item => {
        return item.Category === 'Random thing'
    })
    const randomListElement = document.querySelector('.ul-random');
    randomListElement.innerHTML = '';
    randomList.map(task => {
        const randomElement = document.createElement('li');
        randomElement.innerHTML = `
        <div class="cat-name">${task.Name}</div>
        <div class="cat-craeted"> ${task.Created}</div>
        <div class="cat-category">${task.Category}</div>
        <div class="cat-content"> ${task.Content}</div>
        <div class="cat-date">${task.Dates ? `<input  class="input-date  input-date${task.id}" type="date" value="${task.Dates}" >` : `<input  class="input-date input-date${task.id}" type="date" value="" style="opacity: ${visibility}">`}</div>        
        <div class="btn">            
            <button id=${task.id} class="button-active-list button-delete-2">   
            </button>
        <button id=${task.id} class="button-active-list button-arh-2">           
            </button>                          
        </div>     
        `;
        randomListElement.appendChild(randomElement);
        randomElement.classList.add('cat-listitem');
    });



    const arrButtonsDelete = document.querySelectorAll('.button-delete-2');
    arrButtonsDelete.forEach(function (button) {
        button.addEventListener('click', event => {
            deleteItem(event, 'archiveToDo');
        });
    });
    const arrButtonsRelocateToActualList = document.querySelectorAll('.button-arh-2');
    arrButtonsRelocateToActualList.forEach(function (button) {
        button.addEventListener('click', event => { relocateItem(event, 'relocateToMain') });
    });
};


