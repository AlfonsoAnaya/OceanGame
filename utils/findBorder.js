let border = [];
function findBorder(squares, gridWidth, gridHeight) {
    for (let square of border) {
        square.classList.remove('border');
    }
    ;
    border = [];
    for (let square of squares) {
        let id = parseInt(square.id);
        if (square.classList.contains('ocean')) {
            //top 
            if (id >= 0 && id < gridWidth) {
                if (!squares[id + 1].classList.contains('ocean')
                    || !squares[id + gridWidth].classList.contains('ocean')) {
                    border.push(square);
                }
            }
            //check for land 
            //bottom      
            if (id >= (gridWidth * gridHeight) - gridWidth && id < (gridWidth * gridHeight)) {
                //check for land 
                if (!squares[id + 1].classList.contains('ocean')
                    || !squares[id - gridWidth].classList.contains('ocean'))
                    border.push(square);
            }
            //center
            if (id >= gridWidth && id < gridWidth * gridHeight - gridWidth) {
                //check for land 
                if (!squares[id + 1].classList.contains('ocean')
                    || !squares[id - gridWidth].classList.contains('ocean')
                    || !squares[id + gridWidth].classList.contains('ocean'))
                    border.push(square);
            }
        }
    }
    for (let square of border) {
        square.classList.add('border');
    }
}
export { border, findBorder };
//# sourceMappingURL=findBorder.js.map