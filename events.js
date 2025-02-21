// Ticket 3: Advanced DOM Manipulation with Events

// 1. Hide the heading when the "Hide Heading" button is clicked.

// 1. setup: access elements
const hiddeButton = document.getElementById('hide-btn');
//const h3Events    = document.querySelectorAll('h3');
const h3Heading    = document.getElementById('event-heading');

// 2. work : manipulation
function hideHeading(){    
    h3Heading.style.display = 'none';    
};

// 3. event
hiddeButton.addEventListener('click', hideHeading);

// 2. Show the heading when the "Show Heading" button is clicked.

// 1. setup: access elements
const showButton = document.getElementById('show-btn');

// 2. work : manipulation
function showHeading(){
    h3Heading.style.display = 'block';
};

// 3. event
showButton.addEventListener('click', showHeading);

// 3. Change the color of the heading when the "Change Heading Color" button is clicked.

// 1. setup: access elements
const colorButton = document.getElementById('change-color-btn');
const headingElement = document.getElementById('demo-heading');

// 2. work : manipulation
function changeHeadingColor(){
    headingElement.style.color ='red'
};

// 3. event
colorButton.addEventListener('click', changeHeadingColor);

// 4. Toggle the visibility of the heading with a single button (combine hide and show functionality).

// 1. setup: access elements
const toggleButton = document.getElementById('toggle-btn');


// 2. work : manipulation
function showHideHeading(){  
    if (h3Heading.style.display == 'none'){
        h3Heading.style.display = 'block';
    }else{
        h3Heading.style.display = 'none';
    }    
};

// 3. event
toggleButton.addEventListener('click', showHideHeading);

// 5. Automatically change the heading color every second (use setInterval).

// 1. setup
const colors = ['red', 'blue', 'green', 'orange', 'purple'];
let colorIndex = 0;

// 2. work : manipulation
function changeColorHeader(){
    h3Heading.style.color = colors[colorIndex];
    colorIndex = (colorIndex +1) % colors.length;
}

// 3. event
setInterval(changeColorHeader, 10); // in ms




