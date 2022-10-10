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
    {
        name: "hoge",
        diameter: "100",
        path: "https://upload.wikimedia.org/wikipedia/commons/3/30/Mercury_in_color_-_Prockter07_centered.jpg"
    }
];
images.forEach((image) => {
    image.component = `
        <img class="col-10 image" src=${image.path} alt=${image.name}  />
    `
});

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
};

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
    slideJump(index)
}

const createInfoContainer = (index) => {
    const infoContainer = document.getElementById("infoContainer");
    infoContainer.innerHTML = `
        <div>
            <div>Name: ${images[index-1].name}</div>
            <div>Diameter: ${images[index-1].diameter} m</div>
        </div>
    `
}

const animateMain = (currentElement, nextElement, animationType) => {
    main.innerHTML = ""
    main.append(nextElement);
    main.classList.add("expand-animation", "full-width");

    extra.innerHTML = "";
    extra.append(currentElement);
    extra.classList.add("deplete-animation", "full-width");

    const sliderShow = document.getElementById("sliderShow");
    if (animationType === "right") {
        sliderShow.innerHTML = ""
        sliderShow.append(extra);
        sliderShow.append(main);
    } else {
        sliderShow.innerHTML = ""
        sliderShow.append(main);
        sliderShow.append(extra);
    }
};

const controlAnimationType = (currentIndex, nextIndex) => {
    const jumps = nextIndex - currentIndex;
    const halfLength = images.length / 2;
    return ((jumps >= 0 && Math.abs(jumps) < halfLength) || (jumps < 0 && Math.abs(jumps) > halfLength))
        ? "right"
        : "left"
}

const slideJump = (nextIndex) => {
    const currentIndex = parseInt(main.getAttribute("data-index"))

    const currentElement = document.createElement("div");
    currentElement.classList.add("d-flex", "justify-content-center");
    currentElement.innerHTML = currentIndex !==0
        ? `${images[currentIndex-1].component}`
        : "";

    const nextElement = document.createElement("div");
    nextElement.classList.add("d-flex", "justify-content-center");
    nextElement.innerHTML = `${images[nextIndex-1].component}`;

    const animationType = controlAnimationType(currentIndex, nextIndex);
    animateMain(currentElement, nextElement, animationType);

    main.setAttribute("data-index", nextIndex.toString())

    createInfoContainer(nextIndex);
}


// execute
initialize();
createButtons();
createSlider();

// global
const main = document.getElementById("main");
const extra = document.getElementById("extra");

