root = document.getElementById("root");

const flexBox = document.createElement("div");
flexBox.classList.add("flex", "background-box");

const leftContainer = document.createElement("div");
const rightCotainer = document.createElement("div");

leftContainer.classList.add("left-container");
rightCotainer.classList.add("right-container");

flexBox.append(leftContainer);
flexBox.append(rightCotainer);

root.append(flexBox);

const leftBox = document.createElement("div");
leftBox.classList.add("left-box");
leftContainer.append(leftBox);

const rightUpperContainer = document.createElement("div");
const rightLowerContainer = document.createElement("div");

rightUpperContainer.classList.add("right-upper-container");
rightLowerContainer.classList.add("right-lower-container");

rightCotainer.append(rightUpperContainer);
rightCotainer.append(rightLowerContainer);

const rightUpperBox = document.createElement("div");
const rightLowerBox = document.createElement("div");

rightUpperBox.classList.add("right-upper-box");
rightLowerBox.classList.add("right-lower-box");

rightUpperContainer.append(rightUpperBox);
rightLowerContainer.append(rightLowerBox);

const numbers = [...Array(9)].map((_, i) => i+1);
console.log(numbers);
numbers.forEach((i) => {
    const button = document.createElement("button");
    button.classList.add("btn", `btn-${i}`)
    button.innerHTML = i;
    rightLowerBox.append(button)
})
