function spawnGrid(size){
    for (i=0; i<size; i++){
        row = document.createElement("div")
        row.classList.add("grid-row")
        for (j=0; j<size; j++){
            square = document.createElement("div")
            square.classList.add("grid-square")
            square.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "#AAAAAA"
            })
            row.appendChild(square)
        }
        gridContainer.appendChild(row)
    }
}

function removeGrid() {
    gridContainer.innerHTML = ""
}

function getGridInput(e) {
    newSize = inputField.value
    if (newSize > 0 && newSize <= 100){
        removeGrid()
        spawnGrid(newSize)
    }
}

mainContainer = document.getElementById("main-container")

inputField = document.createElement("input")
newGridBtn = document.createElement("button")
newGridBtn.textContent = "New Grid"
newGridBtn.addEventListener("click", getGridInput)
mainContainer.appendChild(inputField)
mainContainer.appendChild(newGridBtn)

gridContainer = document.createElement("div")
gridContainer.classList.add("grid-container")
mainContainer.appendChild(gridContainer)

spawnGrid(16)