'use strict';
import renderTotalListItem from './renderTotalList.js';
import { renderCurrentToDoLost } from './renderMainList.js';
import renderArchiveToDo from './renderArchiveList.js';

export let archiveToDo = [];
export let arrToDo = [];

async function readJsonFile() {
    try {
        const response = await fetch('./data.json');
        if (!response.ok) {
            throw new Error(`Помилка при завантаженні файлу: ${response.status}`);
        }
        const json = await response.json();

        sessionStorage.setItem('arrToDo', JSON.stringify(json.arrToDo));
        sessionStorage.setItem('archiveToDo', JSON.stringify(json.archiveToDo));
        sessionStorage.setItem('totalTodo', JSON.stringify(json.totalTodo));

        renderCurrentToDoLost(JSON.parse(sessionStorage.getItem('arrToDo')));
        renderTotalListItem(JSON.parse(sessionStorage.getItem('totalTodo')));
        renderArchiveToDo(JSON.parse(sessionStorage.getItem('archiveToDo')));

    } catch (error) {
        console.error('Помилка:', error.message);
    }
}
readJsonFile();



// export let arrToDo = [
//     {
//         "id": 1,
//         "Name": "Shopping list",
//         "Created": "2023-01-01",
//         "Category": "Task",
//         "Content": "Some food",
//         "Dates": "",
//         "IMG": "путь/к/изображению1.jpg"
//     },
//     {
//         "id": 2,
//         "Name": "The teory of evolution",
//         "Created": "2023-02-01",
//         "Category": "Random thing",
//         "Content": "The evolution",
//         "Dates": "2023-10-17",
//         "IMG": "путь/к/изображению2.jpg"
//     },
//     {
//         "id": 3,
//         "Name": "New feature",
//         "Created": "2023-03-01",
//         "Category": "Random thing",
//         "Content": "Work smart not hard",
//         "Dates": "",
//         "IMG": "путь/к/изображению3.jpg"
//     },
//     {
//         "id": 4,
//         "Name": "Random thing",
//         "Created": "2023-04-01",
//         "Category": "Random thing",
//         "Content": "Work smart not hard",
//         "Dates": "",
//         "IMG": "путь/к/изображению4.jpg"
//     },
//     {
//         "id": 5,
//         "Name": "Drunk",
//         "Created": "2023-05-01",
//         "Category": "Idea",
//         "Content": "drink with friends",
//         "Dates": "",
//         "IMG": "путь/к/изображению5.jpg"
//     },
//     {
//         "id": 6,
//         "Name": "Plan for the future",
//         "Created": "2023-10-17",
//         "Category": "Task",
//         "Content": "Get an offer",
//         "Dates": "2024-06-10",
//         "IMG": "путь/к/изображению6.jpg"
//     },
//     {
//         "id": 7,
//         "Name": "Celebrating",
//         "Created": "2023-10-17",
//         "Category": "Task",
//         "Content": "celebrate with family",
//         "Dates": "2024-07-20",
//         "IMG": "путь/к/изображению7.jpg"
//     }
// ];
// export let archiveToDo = [
//     {
//         "id": 8,
//         "Name": "Shopping list",
//         "Created": "2023-01-01",
//         "Category": "Task",
//         "Content": "Some food",
//         "Dates": ""
//     },
//     {
//         "id": 9,
//         "Name": "The teory of evolution",
//         "Created": "2023-02-01",
//         "Category": "Random thing",
//         "Content": "The evolution",
//         "Dates": "2023-10-17"
//     },
//     {
//         "id": 10,
//         "Name": "New feature",
//         "Created": "2023-03-01",
//         "Category": "Random thing",
//         "Content": "Work smart not hard",
//         "Dates": ""
//     },
//     {
//         "id": 11,
//         "Name": "Random thing",
//         "Created": "2023-04-01",
//         "Category": "Random thing",
//         "Content": "Work smart not hard",
//         "Dates": ""
//     },
//     {
//         "id": 12,
//         "Name": "Drunk",
//         "Created": "2023-05-01",
//         "Category": "Idea",
//         "Content": "drink with friends",
//         "Dates": ""
//     },
//     {
//         "id": 13,
//         "Name": "Plan for the future",
//         "Created": "2023-10-17",
//         "Category": "Task",
//         "Content": "Get an offer",
//         "Dates": "2024-06-10"
//     },
//     {
//         "id": 14,
//         "Name": "Celebrating",
//         "Created": "2023-10-17",
//         "Category": "Task",
//         "Content": "celebrate with family",
//         "Dates": "2024-07-20"
//     },
//     {
//         "id": 15,
//         "Name": "Idea",
//         "Created": "2023-08-15",
//         "Category": "Idea",
//         "Content": "Some idea",
//         "Dates": ""
//     },
//     {
//         "id": 16,
//         "Name": "Idea",
//         "Created": "2023-09-20",
//         "Category": "Idea",
//         "Content": "Another idea",
//         "Dates": ""
//     },
//     {
//         "id": 17,
//         "Name": "Idea",
//         "Created": "2023-11-05",
//         "Category": "Idea",
//         "Content": "More ideas",
//         "Dates": ""
//     },
//     {
//         "id": 18,
//         "Name": "Idea",
//         "Created": "2023-12-10",
//         "Category": "Idea",
//         "Content": "Creative idea",
//         "Dates": ""
//     },
//     {
//         "id": 19,
//         "Name": "Idea",
//         "Created": "2024-01-15",
//         "Category": "Idea",
//         "Content": "Innovative idea",
//         "Dates": ""
//     },
//     {
//         "id": 20,
//         "Name": "Idea",
//         "Created": "2024-02-20",
//         "Category": "Idea",
//         "Content": "Brilliant idea",
//         "Dates": ""
//     },
//     {
//         "id": 21,
//         "Name": "Idea",
//         "Created": "2024-03-05",
//         "Category": "Idea",
//         "Content": "Great idea",
//         "Dates": ""
//     },
//     {
//         "id": 22,
//         "Name": "Idea",
//         "Created": "2024-04-10",
//         "Category": "Idea",
//         "Content": "Awesome idea",
//         "Dates": ""
//     },
//     {
//         "id": 23,
//         "Name": "Idea",
//         "Created": "2024-05-15",
//         "Category": "Idea",
//         "Content": "Fantastic idea",
//         "Dates": ""
//     },
//     {
//         "id": 24,
//         "Name": "Random thing",
//         "Created": "2024-06-20",
//         "Category": "Random thing",
//         "Content": "Something random",
//         "Dates": ""
//     },
//     {
//         "id": 25,
//         "Name": "Random thing",
//         "Created": "2024-07-05",
//         "Category": "Random thing",
//         "Content": "Another random thing",
//         "Dates": ""
//     },
//     {
//         "id": 26,
//         "Name": "Random thing",
//         "Created": "2024-08-10",
//         "Category": "Random thing",
//         "Content": "Yet another random thing",
//         "Dates": ""
//     }
// ];
// export let totalTodo = [
//     {
//         "id": 1,
//         "NoteCategory": "Task",
//         "Active": "14",
//         "Arhived": "6"
//     },
//     {
//         "id": 2,
//         "NoteCategory": "Idea",
//         "Active": "2",
//         "Arhived": "14"
//     },
//     {
//         "id": 3,
//         "NoteCategory": "Random thing",
//         "Active": "17",
//         "Arhived": "17"
//     }
// ];


// function getDataFromJson() {
//     // renderCurrentToDoLost(arrToDo);
//     renderTotalListItem(totalTodo);
//     renderArchiveToDo(archiveToDo);
// }



// getDataFromJson();




