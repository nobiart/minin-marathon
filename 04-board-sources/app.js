const board = document.querySelector('#board');
const colors = [
    '#e2d810',
    '#d9138a',
    '#12a4d9',
    '#f5f0e1',
    '#ff6e40',
    '#1e847f'
]
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    })

    board.append(square);
}

function setColor(element) {
    let color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #1d1d1d';
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
