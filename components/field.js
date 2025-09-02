class Field {
    constructor(cells) {
        this.cells = cells;
    }

    initializeCell() {
        return Math.random() < 0.7 ? { value: 2 } : { value: 4 };
    }

    addRandomTile() {
        const emptyCells = [];
        this.cells.forEach((row, i) => {
            row.forEach((cell, j) => {
                if (!cell) {
                    emptyCells.push({ i, j });
                }
            });
        });

        if (emptyCells.length > 0) {
            const { i, j } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            this.cells[i][j] = this.initializeCell();
        } 
    }

    createEmptyField(rows, cols) {
        const field = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < cols; j++) {
                row.push(null);
            }
            field.push(row);
        }

        this.cells = field;
        
        this.cells.forEach(row => {
            row.forEach( () => this.addRandomTile());
        });
    }

    render() {
        const gameBoard = document.getElementById('game-board');
        if (!gameBoard) {
            throw new Error('No game board element found');
        }
        gameBoard.innerHTML = '';
        this.cells.forEach(row => {
            row.forEach(cell => {
                const cellDiv = document.createElement('div');
                cellDiv.className = 'cell';
                cellDiv.textContent = cell ? cell.value : '';
                gameBoard.appendChild(cellDiv);
            });
        });
    }
}   

export default Field;