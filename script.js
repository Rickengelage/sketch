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
 
 function playSound(){
    const audioFile = document.getElementById('audio')
    audioFile.play();
 }
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
        playSound()
        if(clickedOn == true){
         grid.style.backgroundColor = "rgba(0, 0, 0, 0.1)";}
     }});

    window.addEventListener('pointerup', () => {
    isMouseDown = false;
});
    grid.addEventListener("click", () => {
    grid.style.backgroundColor = changeColor();
    playSound()
    if(clickedOn == true){
    grid.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    

    }
})
    const clearAll = document.querySelector(".clear-btn");
    clearAll.addEventListener("click", () => {
    grid.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
})
}
}
// code that makes the background color of div grids be set to default when button is active
const eraserButton= document.querySelector(".eraser-btn");
let clickedOn = false;
let clickCount = 0;
    eraserButton.addEventListener("click",() => {
    clickCount++
    if(clickCount == 1){
    eraserButton.style.border = "2px solid red";
    eraserButton.style.backgroundColor = "rgba(255, 0, 0, 0.52)";
    clickedOn = true;
        console.log(clickCount)  
    }else if (clickCount == 2){
        clickCount = 0;
    eraserButton.style.backgroundColor = "bisque";
    eraserButton.style.border = "2px solid rgb(146, 120, 87)";

    clickedOn = false;
        console.log(clickCount)
    }
}
);
