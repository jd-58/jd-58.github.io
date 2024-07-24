const gridContainer = document.getElementById("gridContainer");
const clearButton = document.getElementById("resize")
let gridPercentageWidth = 0.25



function createGrid(gridAmount) {
    let id = 1;
    let newGridWidth = Math.sqrt(gridAmount)
    console.log(newGridWidth)
    gridPercentageWidth = (1/ newGridWidth) * 100
    String(gridPercentageWidth)
    gridPercentageWidth = gridPercentageWidth + "%"
    String(gridPercentageWidth)
    for (let i=1; i<= gridAmount; i++) {
        let gridDiv = document.createElement("div");
        gridDiv.setAttribute("id", "gridNum" + id);
        gridDiv.setAttribute("class", "grid");
        gridDiv.style.color = "black";
        gridDiv.style.width = gridPercentageWidth
        gridDiv.addEventListener('mouseover', findCurrentColor)
        gridContainer.appendChild(gridDiv);
        id++;
}
}

function resizeGrid() {
    let currentGrid = document.getElementsByClassName("grid")
    let currentGridSize = currentGrid.length
    let newGridSize = prompt("What size would you like the grid to be? (1-100)")
    if(newGridSize == null) {
        return
    }
    else if (newGridSize < 1) {
        console.log(newGridSize)
        newGridSize = 1
        clearGrid()
        createGrid(newGridSize)
    }
    else if (newGridSize > 100) {
        newGridSize = 10000
        clearGrid()
        createGrid(newGridSize)
    }
    else if (newGridSize >= 1 && newGridSize <= 100) {
        newGridSize = newGridSize * newGridSize
        clearGrid()
        createGrid(newGridSize)
    }
    else {

        return
    }


}

function clearGrid() {
    let oldGrid = document.getElementsByClassName("grid")
    let oldGridSize = oldGrid.length
    for (let i=1; i < (oldGridSize + 1); i++) {
        let currentGridNum = String(i)
        currentGridNum = "gridNum" + i
        String(currentGridNum)
        let currentGrid = document.getElementById(currentGridNum)
        currentGrid.remove()
    }
}

function recolorGrid() {
    let oldGrid = document.getElementsByClassName("grid")
    let oldGridSize = oldGrid.length
    for (let i=1; i < (oldGridSize + 1); i++) {
        let currentGridNum = String(i)
        currentGridNum = "gridNum" + i
        String(currentGridNum)
        let currentGrid = document.getElementById(currentGridNum)
        currentGrid.style.backgroundColor = "rgb(88, 88, 88)"
    } 
}
let currentColor = ''
let colorPicker = document.getElementById("colorPicker")
colorPicker.addEventListener('input', function() {  
    currentColor = colorPicker.value;
    let grid = document.getElementsByClassName("grid")
    let gridSize = grid.length
    for (let i=0; i < gridSize; i++) {
        let currentGridNum = i + 1
        String(currentGridNum)
        currentGridNum = "gridNum" + currentGridNum
        let currentGrid = document.getElementById(currentGridNum)
        currentGrid.removeEventListener('mouseover', randomGridColor)
        currentGrid.addEventListener('mouseover', findCurrentColor)
   }
}
)

function useRandomColor() {
    let grid = document.getElementsByClassName("grid")
    let gridSize = grid.length
    for (let i=0; i < gridSize; i++) {
        let currentGridNum = i + 1
        console.log("test")
        String(currentGridNum)
        currentGridNum = "gridNum" + currentGridNum
        let currentGrid = document.getElementById(currentGridNum)
        currentGrid.removeEventListener('mouseover', findCurrentColor)
        currentGrid.addEventListener('mouseover', randomGridColor)
   }
}

function findCurrentColor(e) {
    currentColor = colorPicker.value
    String(currentColor)
    Object.assign(e.target.style, {
        backgroundColor : currentColor});

}


function randomGridColor(e) {
    let r = Math.random() * 256
    let g = Math.random() * 256
    let b = Math.random() * 256
    var randomColor = "rgba(" + r + "," + g + "," + b + "1" + ")"; 
    String(randomColor)
    Object.assign(e.target.style, {
        backgroundColor : randomColor });
}

function useSelectedColor() {
    let grid = document.getElementsByClassName("grid")
    let gridSize = grid.length
    console.log(gridSize)
    for (let i=0; i < gridSize; i++) {
        let currentGridNum = String(i + 1)
        currentGridNum = "gridNum" + i
        String(currentGridNum)
        console.log(currentGridNum)
        let currentGrid = document.getElementById(currentGridNum)
        currentGrid.removeEventListener('mouseover', randomGridColor)
        currentGrid.addEventListener('mouseover', )
    }
}

createGrid(256);