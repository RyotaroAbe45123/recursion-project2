// const imgs = require("images.js")
// import imgs from 'images'
// const root = document.getElementById("root");

// container
const backgroundContainer = document.createElement("div");
backgroundContainer.classList.add("container-fluid", "bg-info", "background");
backgroundContainer.style.height = "50vh";
backgroundContainer.style.marginTop = "100px"
// root.append(backgroundContainer);

// row
const row = document.createElement("div");
row.classList.add("row", "justify-content-center", "align-items-center", "text-center");
row.style.height = "100%";
backgroundContainer.append(row);

// left container
const leftColumn = document.createElement("div");
leftColumn.classList.add("col-8");
leftColumn.style.height = "100%"
leftColumn.style.padding = "10px"
row.append(leftColumn)

const leftBox = document.createElement("div");
leftBox.classList.add("bg-light")
leftBox.style.height = "100%"
leftColumn.append(leftBox);

// right container
const rightColumn = document.createElement("div");
rightColumn.classList.add("col-4");
rightColumn.style.height = "100%";
row.append(rightColumn);

// right upper
const rightUpperRow = document.createElement("div");
rightUpperRow.classList.add("row");
rightUpperRow.style.height = "40%"
rightColumn.append(rightUpperRow);

const rightUpperColumn = document.createElement("div");
rightUpperColumn.classList.add("col");
rightUpperColumn.style.padding = "10px";
rightUpperRow.append(rightUpperColumn);

const rightUpperBox = document.createElement("div");
rightUpperBox.classList.add("bg-light");
rightUpperBox.style.height = "100%";
rightUpperColumn.append(rightUpperBox);

// right lower
const rightLowerRow = document.createElement("div");
rightLowerRow.classList.add("row");
rightLowerRow.style.height = "60%"
rightColumn.append(rightLowerRow);

const rightLowerColumn = document.createElement("div");
rightLowerColumn.classList.add("col");
rightLowerColumn.style.padding = "10px";
rightLowerRow.append(rightLowerColumn);

const rightLowerBox = document.createElement("div");
rightLowerBox.classList.add("bg-light");
rightLowerBox.style.height = "100%";
rightLowerColumn.append(rightLowerBox);

// buttons container
const buttonContainer = document.createElement("div")
buttonContainer.classList.add("container")
buttonContainer.style.display = "flex"
buttonContainer.style.flexDirection = "column"
buttonContainer.style.justifyContent = "space-evenly"
buttonContainer.style.height = "100%"
rightLowerBox.append(buttonContainer)

// button numbers array
// const numbers = [...Array(3)].map((_, i) => i+1);
// numbers.forEach((i) => {
//     // buttons row
//     const buttonRow = document.createElement("div");
//     buttonRow.classList.add("row")
//     buttonContainer.append(buttonRow);
//     numbers.forEach((j) => {
//         // buttons column
//         const buttonColumn = document.createElement("div");
//         buttonColumn.classList.add("col-4");
//         // buttons
//         const button = document.createElement("button");
//         button.classList.add("btn", "btn-primary")
//         button.style.height = "50px"
//         button.style.width = "50px"
//         const buttonValue = i * j;
//         button.innerHTML = buttonValue;
//         button.addEventListener("click", () => onClickButton(buttonValue))
//         buttonColumn.append(button);
//         buttonRow.append(buttonColumn);
//     })
// })

const onClickButton = (value) => {
    console.log(value)
}

const initialize = () => {
    const root = document.getElementById("root");
    
    root.innerHTML = `
        <div class="d-flex vh-100 justify-content-center align-items-center">
            <div class="d-flex bg-info flex-wrap col-8">
                <div id="sliderContainer" class="d-flex col-7 p-2 justify-content-center align-items-center">
                </div>
                <div class="col-5 p-2">
                    <div id="infoContainer"></div>
                    <div id="buttonContainer"></div>
                </div>
            </div>
        </div>
    `
}

const createButtons = () => {
    const buttonContainer = document.getElementById("buttonContainer");
    const numbers = [...Array(12)].map((_, i) => i + 1);
    let htmlString = "";
    numbers.forEach((number) => {
        htmlString += `
            <div class="col-3 text-center p-2">
                <button class="btn btn-light col-12">${number}</button>
            </div>
        `
    })
    buttonContainer.innerHTML = `
        <div class="d-flex flex-wrap col-12 px-0 py-2">
            ${htmlString}
        </div>    
    `
}


initialize();
createButtons();

// imgs = [
//     {
//         name: "img1",
//         path: "img1.jpg"
//     },
//     {
//         name: "img2",
//         path: "img2.jpg"
//     },
// ];

