

// 1. Change the text of the main heading when the "Change Heading Text" button is clicked.
const buttonApp = document.getElementById('change-text');
function changeText(){
    document.getElementById('main-heading').innerHTML =
    "Button clicked (#change-text)!!";
   }

buttonApp.onclick = changeText; 

// 2. Add a new list item when the "Add List Item" button is clicked.

// 1. setup: access elements
const button2 = document.getElementById('add-item');
const ulApp = document.getElementById('item-list');

// 2. work : manipulation
function addItem(){
    const liApp = document.createElement('li');
    liApp.textContent= 'item 4 (added)'
    ulApp.appendChild(liApp);
}

// 3. mouse event
button2.onclick = addItem;

// 3. Change the color of all list items to blue when you hover over the "Change Heading Text" button.

// 1. setup: access elements
const button3 = document.getElementById('change-text');
const allItemsApp  = document.querySelectorAll('#todo-list li');

// 2. work : manipulation
function changeColor(){
    for (const q1Key in allItemsApp) {
        allItemsApp[q1Key].style.color = "blue";
        console.log(allItemsApp[q1Key]);
      }
}

// 3. mouse event
button3.addEventListener('mouseover', changeColor);


// 4. Remove the last list item when you double-click anywhere on the page.

const ulElement = document.getElementById('item-list');

function removeChildApp(){
    ulElement.removeChild(ulElement.lastElementChild);
}

document.addEventListener('dblclick', removeChildApp);


// 5. Update the paragraph text when the mouse moves over the heading.

// 1. setup: access elements
const paragrpahs = document.getElementsByClassName('description');
const heading    = document.getElementById('main-heading');

// 2. work : manipulation
function changePText(){

    for(let i = 0; i < paragrpahs.length; i++){
        paragrpahs[i].innerText = "Updated text!!!";
    }
    console.log('inside');
}

// 3. mouse event
heading.addEventListener('mouseover', changePText);