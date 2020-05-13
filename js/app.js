const cells = document.querySelectorAll(`td`);
let lastRotated = null;

function rotate(cell) {
    cell.classList.add('rotated');

    if (lastRotated) {
        lastRotated.classList.remove('rotated');
    }

    if (lastRotated === cell) {
        lastRotated = null;
    } else {
        lastRotated = cell;
    }

}

cells.forEach((cell) => {
    cell.onclick = () => rotate(cell);
});
