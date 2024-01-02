"use strict";

export default function renderTotalListItem() {
    const arrToDo = JSON.parse(sessionStorage.getItem("arrToDo"));
    const archiveToDo = JSON.parse(sessionStorage.getItem("archiveToDo"));

    const totalTodoListElement = document.querySelector(".toDo-list-total");
    totalTodoListElement.innerHTML = "";

    const actualNotesTask = arrToDo.filter(
        item => item.Category === "Task",
    ).length;
    const actualNotesIdea = arrToDo.filter(
        item => item.Category === "Idea",
    ).length;
    const actualNotesRandom = arrToDo.filter(
        item => item.Category === "Random thing",
    ).length;

    const archivelNotesTask = archiveToDo.filter(
        item => item.Category === "Task",
    ).length;
    const archiveNotesIdea = archiveToDo.filter(
        item => item.Category === "Idea",
    ).length;
    const archiveNotesRandom = archiveToDo.filter(
        item => item.Category === "Random thing",
    ).length;
    let totalTodo = [
        {
            NoteCategory: "Task",
            Active: `${actualNotesTask}`,
            Arhived: `${archivelNotesTask}`,
        },
        {
            NoteCategory: "Idea",
            Active: `${actualNotesIdea}`,
            Arhived: `${archiveNotesIdea}`,
        },
        {
            NoteCategory: "Random thing",
            Active: `${actualNotesRandom}`,
            Arhived: `${archiveNotesRandom}`,
        },
    ];

    totalTodo.map(item => {
        const totalTaskElement = document.createElement("li");
        totalTaskElement.classList.add("cat-listtotal");
        totalTaskElement.innerHTML = `
        <li class="cat-name">${item.NoteCategory}</li>
        <li > ${item.Active}</li>
        <li> ${item.Arhived}</li>      
         `;
        totalTodoListElement.appendChild(totalTaskElement);
    });
}
