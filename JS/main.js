'use strict';
// import { render } from './render.js'
// import data from '../data.json'



let arrToDo = [];
function one() {
    fetch('../data.json')
        .then((response) => response.json())
        .then((json) => arrToDo = json.actualList)
    // .then(() => render(arrToDo))
    console.log(arrToDo)


}
one()
console.log(arrToDo.length === 0 ? null : 'yes')

function render(arr) {
    const todoListElement = document.getElementById('todoList');
    todoListElement.innerHTML = ''
    console.log(777)
    arr.map((task) => {
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
document.querySelector('.button').addEventListener('click', function () {
    render(arrToDo);
});
document.querySelector('.button2').addEventListener('click', treee);
function treee() {
    console.log(arrToDo.length)
    delete arrToDo[5]
    // arrToDo = arrToDo.splice(5, 1);
    console.log(arrToDo.length)
    render(arrToDo)
    // return arrToDo;
}