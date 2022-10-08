const root = document.getElementById("root");

const backgroundContainer = document.createElement("div");
backgroundContainer.classList.add("container-fluid", "bg-info", "background");
backgroundContainer.style.height = "50vh";
backgroundContainer.style.marginTop = "100px"

const row = document.createElement("div");
row.classList.add("row", "justify-content-center", "align-items-center", "text-center");
row.style.height = "100%";

const leftColumn = document.createElement("div");
leftColumn.classList.add("col-8");
leftColumn.style.height = "100%"
leftColumn.style.padding = "10px"
row.append(leftColumn)

const leftBox = document.createElement("div");
leftBox.classList.add("bg-light")
leftBox.style.height = "100%"
leftColumn.append(leftBox);

// const rightRow = document.createElement("div");
// rightRow.classList.add("row");
const rightColumn = document.createElement("div");
rightColumn.classList.add("col-4");
rightColumn.style.height = "100%";
// rightColumn.style.width = "50%"
// rightRow.append(rightColumn);
row.append(rightColumn);

const rightUpperRow = document.createElement("div");
rightUpperRow.classList.add("row", "bg-light");
rightUpperRow.style.height = "40%"
rightColumn.append(rightUpperRow);

const rightUpperColumn = document.createElement("div");
rightUpperColumn.classList.add("col");
rightUpperRow.append(rightUpperColumn);

const rightLowerRow = document.createElement("div");
rightLowerRow.classList.add("row", "bg-secondary");
rightLowerRow.style.height = "60%"
rightColumn.append(rightLowerRow);

const rightLowerColumn = document.createElement("div");
rightLowerColumn.classList.add("col");
rightLowerRow.append(rightLowerColumn);



// rightRow.append(rightUpperRow);
// rightRow.append(rightLowerRow);

// backgroundContainer.append(leftRow);
backgroundContainer.append(row);

root.append(backgroundContainer);


