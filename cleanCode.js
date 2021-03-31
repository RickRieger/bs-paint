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


/***********
* QUERIES *
***********/








//add eventListeners to the colors that exist
//replaces the 'current color' with the one thats clicked(paint brush) 

const brushColors = document.querySelectorAll('.palette-color');
const paintBrush = document.querySelector('.current-brush');
let currentColor = 'color-2';

for(const brushColor of brushColors){
  
  brushColor.addEventListener('click', function(){
    console.log(brushColor.classList);
    const color = brushColor.classList[1];
    paintBrush.className = 'current-brush ' + color;
    currentColor = color;
  });
}





// adding event listener for all squares on canvas
// for when clicked
const canvasSquares = document.querySelectorAll('.square');
for (const square of canvasSquares){
  square.addEventListener('click', squareClicked);

}
function squareClicked(event){
  const square = event.target;
  square.className = 'square ' + currentColor;
}


//for when mouse enters

let mouseDown = false;

document.addEventListener('mousedown', function(){
  mouseDown = true;
});

document.addEventListener('mouseup', function(){
  mouseDown = false;
});

for (const square of canvasSquares){
  square.addEventListener('mouseenter', squareMouseOver);
}

function squareMouseOver(event){
  if(mouseDown === true){
  const square = event.target;
  square.className = 'square ' + currentColor;
  }
}


//toggle button code to switch css
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('h3').style.color = 'black';
      document.querySelector('.container').style.boxShadow = '0px -20px 10em rgb(255 255 0';



    } else {
      
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('h3').style.color = '#e6e6e6';
      document.querySelector('.container').style.boxShadow = '0px -20px 10em rgb(3 241 241';

    }
  });
});

