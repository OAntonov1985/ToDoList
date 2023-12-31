"use strict";

import saveEditNote from "./saveEditNote.js";
import saveNewNote from "./saveNewNote.js";
import displayNoteForEditing from "./displayNoteForEditing.js";
import clearForm from './clearForm.js';

export let actionType = "create";
export let itemNum = -1;

const openModalBtn = document.querySelector(".button-create-note");
const closeModalBtn = document.querySelector(".close");
export const modal = document.querySelector(".modal__window");
const saveBtn = document.getElementById("saveBtn");

export default function modalWindow(event) {
    itemNum = +event.target.id - 1;
    displayNoteForEditing(itemNum);
    actionType = "edit";
}

export function setItemNum(num) {
    itemNum = num;
}

export function setActionType(string) {
    actionType = string;
}

openModalBtn.addEventListener("click", () => {
    actionType = "create";
    modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    // console.log("create");
    setActionType("create");
    clearForm();
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        setActionType("create");
        modal.style.display = 'none';
        clearForm();
    }
});

saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (actionType === "create") {
        saveNewNote(event);
    } else if (actionType === "edit") {
        saveEditNote(itemNum);
    }
});

// Встановлення поточної дати
document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date().toISOString().split("T")[0];
    document.getElementById("created").value = currentDate;
});
