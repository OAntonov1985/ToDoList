'use strict';
import { renderCurrentToDoLost } from './render.js'



export let arrToDo = [];
function getDataFromJson() {
    fetch('../data.json')
        .then((response) => response.json())
        .then((json) => arrToDo = json.actualList)
        .then(() => renderCurrentToDoLost(arrToDo))

}
getDataFromJson()




document.querySelector('.button2').addEventListener('click', reRenderCurrentToDoLost);


function reRenderCurrentToDoLost() {
    delete arrToDo[5];
    console.log(arrToDo.length)
    renderCurrentToDoLost(arrToDo)
}