"use strict";

const arhiveDivs = document.querySelectorAll(".arhive-div");

export default function selectItem() {
    arhiveDivs.forEach(item => {
        item.addEventListener("click", event => {
            showList(event.target.textContent.replace(/\s/g, ""));
        });
    });
}
selectItem();

function showList(event) {
    const itemName = document.querySelector(`.${event}`);
    if (itemName.style.maxHeight) {
        itemName.style.maxHeight = null;
    } else {
        itemName.style.maxHeight = itemName.scrollHeight + "px";
    }
}
