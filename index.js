const root = document.getElementById("root");

const backgroundContainer = document.createElement("div");
backgroundContainer.classList.add("container-fluid", "bg-info", "text-center", "background");
backgroundContainer.style.height = "50vh";

const leftRow = document.createElement("div");
leftRow.classList.add("row");
const leftColumn = document.createElement("div");
leftColumn.classList.add("col-8", "bg-secondary");
leftRow.append(leftColumn);

const rightRow = document.createElement("div");
rightRow.classList.add("row");
const rightColumn = document.createElement("div");
rightColumn.classList.add("col-4", "bg-secondary");
rightRow.append(rightColumn);

const rightUpperRow = document.createElement("div");

const rightLowerRow = document.createElement("div");

const rightUpperColumn = document.createElement("div");

const rightLowerColumn = document.createElement("div");

rightUpperRow.classList.add("row");
rightLowerRow.classList.add("row");
rightUpperColumn.classList.add("col");
rightLowerColumn.classList.add("col");

rightUpperRow.append(rightUpperColumn);
rightLowerRow.append(rightLowerColumn);

rightRow.append(rightUpperRow);
rightRow.append(rightLowerRow);

backgroundContainer.append(leftRow);
backgroundContainer.append(rightRow);

root.append(backgroundContainer);


