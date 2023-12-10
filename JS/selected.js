'use strict'

const arhiveDivs = document.querySelectorAll('.arhive__div');

export default function selectItem() {
    arhiveDivs.forEach(item => {
        item.addEventListener('click', (event) => {
            showList(event.target.textContent.replace(/\s/g, ""))
        })
    })
}
selectItem();

function showList(event) {
    const res = document.querySelector(`.${event}`);
    const isOpen = res.style.display === 'block';
    res.style.display = isOpen ? 'none' : 'block';
}