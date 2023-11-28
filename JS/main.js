'use strict'

// import data from '../data.json'


document.querySelector('.button').addEventListener('click', one);
function one() {
    fetch('../data.json')
        .then((response) => response.json())
        .then((json) => console.log(json.actualList));
}