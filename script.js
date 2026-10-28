// adds the memorie of the slider to js
const inputNumber = document.querySelector(".grid-size").value = "16";
//adds the memorie of the grid container to js
const gridContainer = document.querySelector(".grid-container");
//running the div generator function to start with generating default amount of divs
createDivs(inputNumber)
//generates the grid divs inside the grid container when clicking the resize button
const resizeButton = document.querySelector(".resize-btn");
resizeButton.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    resizeBtn()
})
//function that actually generates the grid divs inside the grid container
function resizeBtn() {
  let x = document.querySelector(".grid-size").value;
 createDivs(x);
 }
 //function that returns the current value of the color picker
 function changeColor() {
     const picker = document.querySelector(".color-picker").value;
   return picker;
 }
 //function that generates the divs in the grid container
 //and also changes its color when pointer is down
 //color that is set is based on the color picker's value
function createDivs(num){
    let totalDivs = num * num; 
    let divSize = 960 / num;  
    const gridContainer = document.querySelector(".grid-container");
    for(let i = 0; i < totalDivs; i++){
    const grid = document.createElement("div");
    grid.classList.add("grids");
    gridContainer.appendChild(grid)
    grid.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    grid.style.width = `${divSize}px`
     grid.style.height = `${divSize}px`
    let isMouseDown = false;
     window.addEventListener('pointerdown', () => {
    isMouseDown = true;
});
    grid.addEventListener('pointerenter', () => {
    if (isMouseDown) {
        grid.style.backgroundColor = changeColor();
 }});
    window.addEventListener('pointerup', () => {
    isMouseDown = false;
});
    grid.addEventListener("click", () => {
    grid.style.backgroundColor = changeColor();
})
    const clearAll = document.querySelector(".clear-btn");
    clearAll.addEventListener("click", () => {
    grid.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
})
}
}

