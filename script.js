
const inputNumber = document.querySelector("#grid-size");
function createDivs(num){
    let calNum = num * num;
for(let i = 0; i < calNum; i++){
    const gridContainer = document.querySelector(".grid-container");
    const grid = document.createElement("div");
    grid.classList.add("grids");
    gridContainer.appendChild(grid);


}
}

createDivs(16)