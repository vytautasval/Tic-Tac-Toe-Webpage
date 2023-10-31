document.addEventListener('DOMContentLoaded', function() {

    const cells = document.querySelectorAll('td') // Creates an array of all available cells.
    let isUserTurn = true
    addX(cells, isUserTurn)
})

function addX(cells, isUserTurn) {
    cells.forEach(function(cell) {
        // Loops through each cell and adds an event listener to that specific cell.
        cell.addEventListener('click', function() {
            if (cell.innerHTML === '' && isUserTurn === true) {
                cell.innerHTML = 'X'
                isUserTurn = false
                setTimeout(function() {
                    addO(cells)
                    isUserTurn = true
                }, 1000)
            }
        })
    })
}

function addO(cells) {
    const emptyCells = Array.from(cells).filter(cell => cell.innerHTML === '') //Array with unused cells
    if (emptyCells.length > 0) {
        //If there are empty cells a random location is chosen and O placed.
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        randomCell.innerHTML = 'O'
    }
}