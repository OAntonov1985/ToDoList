"use strict";

function render(arrToDo) {
    const todoListElement = document.getElementById('todoList');
    arrToDo.map((task) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
        <div>${task.Name}</div>
        <div> ${task.Category}</div>
        <div> ${task.Created}</div>
        <div> ${task.Content}</div>
        <div> ${task.Dates}</div>        
    `;
        todoListElement.appendChild(taskElement);
        taskElement.classList.add('cat__listitem');

    });
}

export { render };

