const DEFAULT_PYRAMID_HEIGHT = 8;
const DEFAULT_PYRAMID_SYMBOL = "#";

const generatePyramidLine = (row, height, symblol = "#") => {
    const paraElement = document.createElement("p");
    paraElement.appendChild(
        document.createTextNode(" ".repeat(height - row) + symblol.repeat(row + 1)));
    return paraElement;
}

const printPyramid = (element, height, symbol) => {
    element.innerHTML = "";
    for (let i = 1; i <= height; ++i)
        element.appendChild(generatePyramidLine(i, height, symbol));
}

const heightElement = document.getElementById("pyramyd-height");
const heightValueElement = document.getElementById("height-value");
const symbolElement = document.getElementById("pyramid-symbol");
const pyramidContainerElement = document.querySelector(".pyramid-container");

heightElement.setAttribute("value", DEFAULT_PYRAMID_HEIGHT);
heightValueElement.textContent = DEFAULT_PYRAMID_HEIGHT;

heightElement.addEventListener(
    "change", e => {
        heightValueElement.textContent = heightElement.value;
        printPyramid(pyramidContainerElement, heightElement.value, symbolElement.value);
    }
);

symbolElement.addEventListener(
    "change", e =>
        printPyramid(pyramidContainerElement, heightElement.value, symbolElement.value)
);

printPyramid(pyramidContainerElement, DEFAULT_PYRAMID_HEIGHT, DEFAULT_PYRAMID_SYMBOL);