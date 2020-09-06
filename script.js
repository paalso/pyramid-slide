const DEFAULT_PYRAMID_HEIGHT = 8;
const DEFAULT_PYRAMID_SYMBOL = "#";

const generatePyramidLine = (row, height, symblol=DEFAULT_PYRAMID_SYMBOL) => {
    const paraElement = document.createElement("p");
    paraElement.appendChild(
        document.createTextNode("\xa0".repeat(height - row) + symblol.repeat(row + 1)));
    return paraElement;
}

const printPyramid = (element, height, symbol) => {
    element.innerHTML = "";
    const pyramidContainerElement = document.createElement("div");
    pyramidContainerElement.setAttribute("class", "pyramid-container");
    for (let i = 1; i <= height; ++i)
        pyramidContainerElement.appendChild(generatePyramidLine(i, height, symbol));
    element.appendChild(pyramidContainerElement);
}

const heightElement = document.getElementById("pyramyd-height");
const heightValueElement = document.getElementById("height-value");
const symbolElement = document.getElementById("pyramid-symbol");
const pyramidAreaElement = document.querySelector(".pyramid-area");

heightElement.setAttribute("value", DEFAULT_PYRAMID_HEIGHT);
heightValueElement.textContent = DEFAULT_PYRAMID_HEIGHT;

heightElement.addEventListener(
    "input", e => {
        heightValueElement.textContent = heightElement.value;
        printPyramid(pyramidAreaElement, heightElement.value, symbolElement.value);
    }
);

symbolElement.addEventListener(
    "change", e =>
        printPyramid(pyramidAreaElement, heightElement.value, symbolElement.value)
);

printPyramid(pyramidAreaElement, DEFAULT_PYRAMID_HEIGHT, DEFAULT_PYRAMID_SYMBOL);