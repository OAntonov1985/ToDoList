"use strict";

export default function renderArhiveListItem(archiveTodo) {
    const arhiveTodoListElement = document.querySelector('.toDo__list__arhive');
    arhiveTodoListElement.innerHTML = '';
    archiveTodo.map(item => {
        const arhiveTaskElement = document.createElement('li');
        arhiveTaskElement.classList.add('arhive__li__item');
        arhiveTaskElement.innerHTML = `
        <li class="cat__name">${item.NoteCategory}</li>
        <li> ${item.Active}</li>
        <li> ${item.Arhived}</li>      
         `;
        arhiveTodoListElement.appendChild(arhiveTaskElement);
    })
    console.log(archiveTodo)
};

