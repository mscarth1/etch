
const container = document.querySelector('#container');


let grid = document.createElement('div');
grid.className = 'grid';

grid.addEventListener("mouseover", function( event ) {   
    event.target.style.backgroundColor = "blue";
})
    

   
function makeGrid (x) {
    grid.replaceChildren();
    
    for (i = 0; i < x; ++i) {
        let column = document.createElement('div');
        column.className = 'column';
        grid.appendChild(column);
        
        for (j = 0; j < x; ++j) {
            let row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);
        }
        
    }
    container.appendChild(grid)
}


function newGrid() {
    let input = parseInt(prompt("Enter a number between 0 and 100:"));
    if (input > 0 && input <= 100) {
        makeGrid(input);
    }  else if (input > 100 || input < 0) {
        alert("Not a vaild input. \nPlease try again.");
        newGrid();
    }
    
}


window.onload = function () {
    makeGrid(16);
}


