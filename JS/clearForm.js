"use strict"

export default function clearForm() {
    document.getElementById('textInput').value = '';
    document.getElementById('category').value = 'Task';
    document.getElementById('content').value = '';
    document.getElementById('dates').value = '';
};