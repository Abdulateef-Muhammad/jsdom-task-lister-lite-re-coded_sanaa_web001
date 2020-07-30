document.addEventListener("DOMContentLoaded", () => {
    let createButton = document.getElementById('createButton');
    let textInput = document.getElementById('new-task-description');
    createButton.addEventListener('click', function(e) {
        e.preventDefault();
        addTask(getValue(textInput));
        textInput.value = "";

        let inputArray = document.getElementsByClassName('delete-input');
        // console.log(inputArray);
        addEventListenerToArray(inputArray);
    });

    let inputArray = document.getElementsByClassName('delete-input');
    // console.log(inputArray);
    addEventListenerToArray(inputArray);

});

function addTask(eventValue) {
    let tasksContainer = document.getElementById('tasks');
    let appendedChild = addTaskElement(tasksContainer, eventValue);
}

function addTaskElement(parentElement, eventValue) {
    let taskId = generateId(6);
    appendedChild = parentElement;
    appendedChild.innerHTML += `
        <li id='${taskId}'>
            <span>${eventValue} </span>
            <input id='${taskId}' type='submit' value='delete' class='delete-input'>
        </li>
    `;
    return appendedChild;
}

function getValue(element) {
    return element.value;
}

function addEventListenerToArray(elementArray) {
    // console.log(elementArray)
    for (let i = 0; i < elementArray.length; i++) {
        elementArray[i].addEventListener('click', function(e) {
            document.getElementById(e.target.id).remove();
            // document.querySelector(`#${e.target.id}`).parentNode.removeChild(e.target.id);
        });
    }
}

function generateId(length) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charsLength = chars.length;
    let id = '';
    for (let i = 0; i < length; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
