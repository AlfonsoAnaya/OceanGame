export function upgradeSquareListeners(
    squares: HTMLDivElement[], 
    money: string[], 
    wall: string, 
    tree: string, 
    crane: string, 
    resources: HTMLParagraphElement, 
    coin: string) {
    for (let square of squares) {
        square.addEventListener("click", function (e) {
            if (square.classList.contains("crane")) {
                money.push(coin);
                resources.textContent = money.join(" ");
                square.classList.remove('crane');
                square.classList.add('tree');
                square.textContent = tree;
                return;
            }
            if (money.length === 0) {
                return;
            }
            if (square.classList.contains('beach')) {
                money.pop();
                resources.textContent = money.join(" ");
                square.classList.remove('beach');
                square.classList.add('tree');
                square.textContent = tree;
                return;
            }  
            if (square.classList.contains('tree')) {
                money.pop();
                resources.textContent = money.join(" ");
                square.classList.remove('tree');
                square.classList.add('wall');
                square.textContent = wall;
                return;
            } 
            if (square.classList.contains('wall')) {
                money.pop();
                resources.textContent = money.join(" ");
                square.classList.remove('wall');
                square.classList.add('crane');
                square.textContent = crane;
                return
            }
        });
    }
}


