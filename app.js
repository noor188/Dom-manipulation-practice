

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

// 3. event
button2.onclick = addItem;

// 3. Change the color of all list items to blue when you hover over the "Change Heading Text" button.

// 1. setup: access elements
const button3 = document.getElementById('change-text');
const ulChange = document.getElementById('item-list');
const allItemsApp  = ulChange.getElementsByTagName('li');
    
// 2. work : manipulation
function changeColor(){
    for (let i= 0; i < allItemsApp.length; i++){
        allItemsApp[i].style.color= 'blue'
    }
}

// 3. event
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
}

// 3. event
heading.addEventListener('mouseover', changePText);