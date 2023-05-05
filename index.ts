import { upgradeSquareListeners } from "./utils/squareListeners.js";
import { seasonUnfold, year } from "./utils/seasonUnfold.js";
import { reconstruct } from "./utils/reconstruct.js";


const grid = document.getElementById("grid") as HTMLDivElement | null;
const resources = document.getElementById("resources") as HTMLParagraphElement | null;
const date = document.getElementById('year') as HTMLParagraphElement | null;
const attackBtn = document.getElementById('attack-btn') as HTMLButtonElement | null;
let squares: HTMLDivElement[] = [];

let gridWidth: number = 7;
let gridHeight: number = 12;
let coin: string = "🪙";
let money: string[] = [coin, coin, coin];

let ocean: string = "🌊";
let tree: string = "🌳";
let beach: string = "🏖️";
let house: string = "🏠";
let wall: string = "🧱";
let crane: string = "🏗️";

const layout = [
  0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 3, 1,
  0, 1, 1, 1, 1, 1, 1,
  0, 0, 2, 1, 1, 1, 1,
  0, 0, 2, 2, 1, 1, 1,
  0, 0, 0, 0, 1, 1, 1,
  0, 0, 0, 0, 1, 1, 1,
  0, 0, 0, 1, 1, 1, 1,
  0, 0, 2, 1, 1, 1, 1,
  0, 2, 1, 1, 1, 1, 1,
  2, 1, 1, 1, 1, 3, 1,
  0, 0, 1, 1, 1, 1, 1,
]

function createBoard() {
  resources.textContent = money.join(" ");
  date.textContent = String(year);

  //set up grid
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', String(i));
    square.setAttribute('class', "square");
    grid.appendChild(square);
    squares.push(square);
    if (layout[i] === 0) {
      square.classList.add('ocean');
      square.textContent = ocean;
    } else if (layout[i] === 1) {
      square.classList.add('tree');
      square.textContent = tree;
    } else if (layout[i] === 2) {
      square.classList.add('beach');
      square.textContent = beach;
    } else if (layout[i] === 3) {
      square.classList.add('house');
      square.textContent = house;
    } else {
      square.classList.add('empty');
    }
  }
}
createBoard();
upgradeSquareListeners(squares, money, wall, tree, crane, resources, coin);

/*
attackBtn.addEventListener("click", () => seasonUnfold(
  squares,
  money,
  coin,
  tree,
  beach,
  ocean,
  wall,
  gridWidth,
  gridHeight,
  date,
  resources
));
*/

attackBtn.addEventListener('click', () => {
  attackBtn?.setAttribute('disabled', '');
  // ✅ Remove the disabled attribute
// btn?.removeAttribute('disabled');
  reconstruct(squares, beach, gridWidth, gridHeight);
  setTimeout(seasonUnfold, 1000, 
    squares,
    money,
    coin,
    tree,
    beach,
    ocean,
    wall,
    gridWidth,
    gridHeight,
    date,
    resources,
    attackBtn);
  /*seasonUnfold(
    squares,
    money,
    coin,
    tree,
    beach,
    ocean,
    wall,
    gridWidth,
    gridHeight,
    date,
    resources
  );*/
})