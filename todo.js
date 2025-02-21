// 1. Add a new task to the list when the "Add Task" button is clicked.

// 1. setup: access elements
const buttonToDo = document.getElementById('add-task');
const ulTodo     = document.getElementById('todo-list');

// 2. work : manipulation
function createItem(){
    const liTodo = document.createElement('li');
    liTodo.textContent = 'Task 3';
    ulTodo.appendChild(liTodo);
}

// 3. mouse event
buttonToDo.addEventListener('click', createItem);

// 2. Remove the last task from the list when the "Remove Task" button is clicked.

// 1. setup: access elements
const removeButton = document.getElementById('remove-task');

// 2. work : manipulation
function removeItem(){
    ulTodo.removeChild(ulTodo.lastElementChild);
}

// 3. mouse event
removeButton.addEventListener('click', removeItem);

// 3. Clear all tasks when the "Clear List" button is clicked.

// 1. setup: access elements
const clearButton = document.getElementById('clear-list');
const allItems = document.querySelectorAll('#todo-list li');

// 2. work : manipulation
function clearList(){
    // for (let i = 0; i< allItems.length; i++){
    //     allItems[i].remove();
    // }
    ulTodo.innerHTML='';
}

// 3. mouse event
clearButton.addEventListener('click', clearList);

// 4. Toggle a 'completed' class on the list items when clicked.

// 1. setup: access elements
const allItems4 = document.querySelectorAll('#todo-list li');

// 2. work : manipulation
function toggleClass() {
    this.classList.toggle('completed'); // Toggle the 'completed' class on click
}

allItems4.forEach(item => {
    item.addEventListener('click', toggleClass);
});

// 5. Style the completed tasks to have a different background color.

// Modify the .completed class in the <style> section to change the background color.