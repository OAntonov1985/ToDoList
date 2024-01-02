"use strict";
import { renderCurrentToDoLost } from "./renderMainList.js";
import renderArchiveToDo from "./renderArchiveList.js";
import deleteItem from "./deleteItem.js";

export default function relocateItem(itemId, arrArgument) {
    const arrToDo = JSON.parse(sessionStorage.getItem("arrToDo"));
    const archiveToDo = JSON.parse(sessionStorage.getItem("archiveToDo"));
    let index;
    let array;

    if (arrArgument === "relocateToArchive") {
        index = arrToDo.findIndex(item => item.id === +itemId.target.id);
        array = arrToDo[index];
        archiveToDo.push(array);
        sessionStorage.setItem("archiveToDo", JSON.stringify(archiveToDo));
        deleteItem(itemId, "arrToDo");
        renderArchiveToDo();
    } else if (arrArgument === "relocateToMain") {
        index = archiveToDo.findIndex(item => item.id === +itemId.target.id);
        array = archiveToDo[index];
        arrToDo.push(array);
        sessionStorage.setItem("arrToDo", JSON.stringify(arrToDo));
        deleteItem(itemId, "archiveToDo");
        renderCurrentToDoLost();
    }
}
