// 1. Add a new task to the list when the "Add Task" button is clicked.

// 1. setup: access elements
const button = document.getElementById('add-task');
const ul     = document.getElementById('todo-list');

// 2. work : manipulation
function createItem(){
    const li = document.createElement('li');
    li.textContent = 'Task 3';
    ulApp.appendChild(li);
}

// 3. mouse event
button.addEventListener('click', createItem);

// 2. Remove the last task from the list when the "Remove Task" button is clicked.

// 1. setup: access elements
const removeButton = document.getElementById('remove-task');

// 2. work : manipulation
function removeItem(){
    ulApp.removeChild(ulApp.lastElementChild);
}

// 3. mouse event
removeButton.addEventListener('click', removeItem);

// 3. Clear all tasks when the "Clear List" button is clicked.

// 1. setup: access elements
const clearButton = document.getElementById('clear-list');
const allItems = document.querySelectorAll('li');

// 2. work : manipulation
function clearList(){
    // for (let i = 0; i< allItems.length; i++){
    //     allItems[i].remove();
    // }
    ulApp.innerHTML='';
}

// 3. mouse event
clearButton.addEventListener('click', clearList);

// 4. Toggle a 'completed' class on the list items when clicked.