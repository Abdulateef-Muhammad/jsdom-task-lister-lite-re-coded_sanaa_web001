document.addEventListener("DOMContentLoaded", () => {
    let createButton = document.getElementById('createButton');
    let textInput = document.getElementById('new-task-description');
    createButton.addEventListener('click', function(e) {
        e.preventDefault();
        addTask(getValue(textInput));
        textInput.value = "";
    });
});

function addTask(eventValue) {
    let tasksContainer = document.getElementById('tasks');
    let appendedChild = addListItem(tasksContainer);
    appendedChild.innerHTML = eventValue;
}

function addListItem(parentElement) {
    let li = document.createElement('li');
    let appendedChild = parentElement.appendChild(li);
    return appendedChild;
}

function getValue(element) {
    return element.value;
}
