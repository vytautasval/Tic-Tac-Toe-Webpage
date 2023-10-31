document.addEventListener('DOMContentLoaded', function() {

    const cells = document.querySelectorAll('td') // Creates an array of all available cells.

    addX(cells)
})

function addX(cells) {
    cells.forEach(function(cell) {
        // Loops through each cell and adds an event listener to that specific cell.
        cell.addEventListener('click', function() {
            cell.innerHTML = 'X'
        })
    })
}
