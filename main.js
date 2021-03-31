/*******************
* OUR HELPER CODE *
*******************/

/*
* Here we add the squares to the canvas dynamically.
* You can mostly leave this section alone!
* But if you want to change how wide the canvas is,
* there are just two steps:
* 
* 1. Change the `gridWidth` value below.
* 2. Change the `grid-template-rows` and
* `grid-template-columns` to match.
*
* To make the second one happen, the number to change
* is the first argument to `repeat`, currently set at 10.
*/

const gridWidth = 62;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
* QUERIES *
***********/

const brushColors = document.querySelectorAll('.palette-color');
const paintBrush = document.querySelector('.current-brush');
const canvasSquares = document.querySelectorAll('.square');
let currentColor = 'color-2';
let mouseDown = false;

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)



/****************************
* EVENT LISTENER FUNCTIONS *
****************************/

document.addEventListener('mousedown', function(){
  mouseDown = true;
});

document.addEventListener('mouseup', function(){
  mouseDown = false;
});

for(const brushColor of brushColors){
  
  brushColor.addEventListener('click', function(){
    
    const color = brushColor.classList[1];
    paintBrush.className = 'current-brush ' + color;
    currentColor = color;
  });
}



for (const square of canvasSquares){
  square.addEventListener('click', squareClicked);

}
for (const square of canvasSquares){
  square.addEventListener('mouseenter', squareMouseOver);

}
function squareClicked(event){
  const square = event.target;
  square.className = 'square ' + currentColor;
}

function squareMouseOver(event){
  if(mouseDown === true){
  const square = event.target;
  square.className = 'square ' + currentColor;
  }
}

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.



/**************************
* WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('h3').style.color = 'black';
      document.querySelector('.container').style.boxShadow = '0px -20px 10em rgb(255 255 0';



    } else {
      // do that
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('h3').style.color = '#e6e6e6';
      document.querySelector('.container').style.boxShadow = '0px -20px 10em rgb(3 241 241';

    }
  });
});
