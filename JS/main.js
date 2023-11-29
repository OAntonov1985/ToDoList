'use strict'

// import data from '../data.json'


document.querySelector('.button').addEventListener('click', render);
let arrToDo = [];
async function one() {
    await fetch('../data.json')
        .then((response) => response.json())
        .then((json) => arrToDo = json.actualList)
    console.log(arrToDo)

}
one()

function render() {
    const todoListElement = document.getElementById('todoList');
    arrToDo.map((task) => {
        const taskElement = document.createElement('ul');
        taskElement.innerHTML = `
        <li>${task.Name}</li>
        <li><strong>Category:</strong> ${task.Category}</li>
        <li><strong>Created:</strong> ${task.Created}</li>
        <li><strong>Content:</strong> ${task.Content}</li>
        <li><strong></strong> ${task.Dates}</li>        
        <hr>
    `;
        todoListElement.appendChild(taskElement);
    });
}