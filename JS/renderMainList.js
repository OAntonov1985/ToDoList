"use strict";
import deleteItem from "./deleteItem.js";
import modalWindow from "./modalWindow.js";
import relocateItem from "./relocateItem.js";
export let visibility = "0";

function renderCurrentToDoLost() {
    const arr = JSON.parse(sessionStorage.getItem("arrToDo"));
    const todoListElement = document.querySelector(".main__toDo__list");
    todoListElement.innerHTML = "";
    arr.map(task => {
        const taskElement = document.createElement("li");
        taskElement.innerHTML = `
        <div class="cat-name">${task.Name}</div>
        <div class="cat-craeted"> ${task.Created}</div>
        <div class="cat-category">${task.Category}</div>
        <div class="cat-content"> ${task.Content}</div>
        <div class="cat-date">${task.Dates
                ? `<input  class="input-date  input-date${task.id}" type="date" value="${task.Dates}" >`
                : `<input  class="input-date input-date${task.id}" type="date" value="" style="opacity: ${visibility}">`
            }</div>
        <div class="btn">
            <button id=${task.id
            } class="button-active-list button-edit">               
            </button>
            <button id=${task.id
            } class="button-active-list button-delete" value= delete_main>   
            </button>
        <button id=${task.id
            } class="button-active-list button-arh" value=archive_main>           
            </button>                          
        </div>    
        `;
        todoListElement.appendChild(taskElement);
        taskElement.classList.add("cat-listitem");
    });

    const arrButtonsEdir = document.querySelectorAll(".button-edit");
    arrButtonsEdir.forEach(function (button) {
        button.addEventListener("click", modalWindow);
    });

    const arrButtonsDelete = document.querySelectorAll(".button-delete");
    arrButtonsDelete.forEach(function (button) {
        button.addEventListener("click", event => {
            deleteItem(event, "arrToDo");
        });
    });

    const arrButtonsRelocate = document.querySelectorAll(".button-arh");
    arrButtonsRelocate.forEach(function (button) {
        button.addEventListener("click", event => {
            relocateItem(event, "relocateToArchive");
        });
    });
}

// Встановлення прозорості
document.addEventListener("click", function (e) {
    const dateInputs = document.querySelectorAll(".input-date");
    dateInputs.forEach(item => {
        item.addEventListener("click", function (event) {
            console.log(event.target.value)
            if (event.target.value === '') item.style.opacity = "1";
            else item.style.opacity = "1";
        });
    });
});

export { renderCurrentToDoLost };
