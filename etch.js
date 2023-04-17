
const container = document.querySelector('#container');

let grid = document.createElement('div');
grid.className = 'grid';

    let columns = 16;
    let rows = 16;

    for (i = 0; i < columns; ++i) {
        let column = document.createElement('div');
        column.className = 'column';
        grid.appendChild(column);
        
        for (j = 0; j < rows; ++j) {
            let row = document.createElement('div');
            row.className = 'row';
            column.appendChild(row);
        }
        
    }
    
    container.appendChild(grid)


    grid.addEventListener("mouseover", function( event ) {   
        event.target.style.backgroundColor = "blue";
    })