"use strict";
import renderTotalListItem from "./renderTotalList.js";
import { renderCurrentToDoLost } from "./renderMainList.js";
import renderArchiveToDo from "./renderArchiveList.js";
import selectItem from "./selected.js";

async function readJsonFile() {
    try {
        const response = await fetch("./data.json");
        if (!response.ok) {
            throw new Error(`Помилка при завантаженні файлу: ${response.status}`);
        }
        const json = await response.json();

        sessionStorage.setItem("arrToDo", JSON.stringify(json.arrToDo));
        sessionStorage.setItem("archiveToDo", JSON.stringify(json.archiveToDo));
        sessionStorage.setItem("totalTodo", JSON.stringify(json.totalTodo));

        const archiveToDo1 = JSON.parse(sessionStorage.getItem("archiveToDo"));
        sessionStorage.setItem(
            "itemId",
            JSON.stringify(archiveToDo1[archiveToDo1.length - 1].id),
        );

        renderCurrentToDoLost();
        renderTotalListItem();
        renderArchiveToDo();
    } catch (error) {
        console.error("Помилка:", error.message);
    }
}
readJsonFile();
