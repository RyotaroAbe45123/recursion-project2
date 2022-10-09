const root = document.getElementById("root");

// container
const backgroundContainer = document.createElement("div");
backgroundContainer.classList.add("container-fluid", "bg-info", "background");
backgroundContainer.style.height = "50vh";
backgroundContainer.style.marginTop = "100px"
root.append(backgroundContainer);

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
const numbers = [...Array(3)].map((_, i) => i+1);
numbers.forEach((i) => {
    const r = document.createElement("div");
    // r.classList.add("row", "row-cols-3")
    r.classList.add("row", "justify-content-center", "align-items-center", "text-center");
    // r.style.height = "auto"
    // r.style.minHeight = "33%"
    c.append(r);
    numbers.forEach((j) => {
        const d = document.createElement("div");
        d.classList.add("col-4");
        // d.innerHTML = `${i}-${j}`;
        const button = document.createElement("button");
        button.classList.add("btn", "btn-primary", `btn-${i}`)
        button.innerHTML = `${i * j}`
        // button.style.minHeight = "75%"
        d.append(button);
        r.append(d);
    })
})
// numbers.forEach((i) => {
//     const button = document.createElement("div");
//     button.classList.add("col-4")
//     button.innerHTML = i;
//     r.append(button)
// })

// button
// const numbers = [...Array(9)].map((_, i) => i+1);
// numbers.forEach((i) => {
//     const button = document.createElement("button");
//     button.classList.add("btn", "btn-primary", `btn-${i}`)
//     button.innerHTML = i;
//     rightLowerBox.append(button)
// })


