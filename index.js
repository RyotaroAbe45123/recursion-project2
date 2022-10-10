const images = [
    {
        name: "mercury",
        path: "assets/mercury.jpg",
    },
    {
        name: "venus",
        path: "assets/venus.jpg"
    },
    {
        name: "earth",
        path: "assets/earth.jpg"
    },
    {
        name: "mars",
        path: "assets/mars.jpg"
    },
    {
        name: "jupiter",
        path: "assets/jupiter.jpg"
    },
    {
        name: "saturn",
        path: "assets/saturn.jpg"
    },
    {
        name: "uranus",
        path: "assets/uranus.jpg"
    },
];
images.forEach((image) => {
    image.component = `
        <img class="col-10 image" width=100% src=${image.path} alt=${image.name}  />
    `
})

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
    const numbers = [...Array(images.length)].map((_, i) => i + 1);
    let htmlString = "";
    numbers.forEach((number) => {
        htmlString += `
            <div class="col-4 text-center p-2">
                <button class="btn btn-light col-12">${number}</button>
            </div>
        `
    })
    buttonContainer.innerHTML = `
        <div class="d-flex flex-wrap col-12 px-0 py-2">
            ${htmlString}
        </div>    
    `
    numbers.forEach((number) => {
        const button = buttonContainer.querySelectorAll(".btn")[number-1]
        button.addEventListener("click", () => buttonClick(number))
    })
}

const createSlider = () => {
    const sliderContainer = document.getElementById("sliderContainer")
    sliderContainer.innerHTML = `
        <div id="sliderShow" class="d-flex col-12">
            <div id="main" class="main full-width" data-index=0></div>
            <div id="extra" class="extra full-width"></div>
        </div>
    `
}

const buttonClick = (number) => {
    const index = parseInt(number);
    slideJump(index, "left")
}

const slideJump = (steps, animationType) => {
    const main = document.getElementById("main");
    const extra = document.getElementById("extra");
    const i = parseInt(main.getAttribute("data-index"))
    const currentElement = document.createElement("div");
    currentElement.classList.add("d-flex", "justify-content-center")
    currentElement.innerHTML = `${images[i].component}`

    const nextElement = document.createElement("div");
    nextElement.classList.add("d-flex", "justify-content-center")
    nextElement.innerHTML = `${images[steps].component}`

    main.innerHTML = ""
    main.append(nextElement);
    main.classList.add("expand-animation", "full-width");

    extra.innerHTML = "";
    extra.append(currentElement);
    extra.classList.add("deplete-animation", "full-width");

    const ss = document.getElementById("sliderShow");
    ss.innerHTML = ""
    ss.append(extra);
    ss.append(main);

    main.setAttribute("data-index", steps.toString())

}

const animateMain = (currentElement, nextElement, animationType) => {

}

initialize();
createButtons();
createSlider();
