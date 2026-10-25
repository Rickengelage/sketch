const inputNumber = document.querySelector(".grid-size").value = "16";
const gridContainer = document.querySelector(".grid-container");


console.log(inputNumber)
const resizeButton = document.querySelector(".resize-btn");
resizeButton.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    resizeBtn()


})
function resizeBtn() {
  let x = document.querySelector(".grid-size").value;
 createDivs(x);
 }

function createDivs(num){
    let totalDivs = num * num; 
    let divSize = 960 / num;  
    const gridContainer = document.querySelector(".grid-container");
    for(let i = 0; i < totalDivs; i++){
    const grid = document.createElement("div");
    grid.classList.add("grids");
    gridContainer.appendChild(grid);
    grid.style.width = `${divSize}px`
     grid.style.height = `${divSize}px`

}
}

