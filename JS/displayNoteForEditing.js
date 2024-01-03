"use strict";
import { modal } from "./modalWindow.js";

let editingNote = {};

export default function displayNoteForEditing(itemId) {
    const operatingArray = JSON.parse(sessionStorage.getItem("arrToDo"));
    const index = operatingArray.findIndex(item => item.id === itemId + 1);
    editingNote = operatingArray[index];
    modal.style.display = "block";
    document.querySelector(".input__name").value = editingNote.Name;
    document.querySelector(".input__created").value = editingNote.Created;
    document.querySelector(".input__select").value = editingNote.Category;
    document.querySelector(".input__textarea").value = editingNote.Content;
    document.getElementById("dates").value = editingNote.Dates;
}
