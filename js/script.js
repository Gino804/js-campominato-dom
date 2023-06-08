console.log('JS OK');

// Creo una funzione che crei una cella contenente un numero
const createCell = (n) =>
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = n;

    return cell;
}

// Recupero gli elementi dal DOM
const playButton = document.getElementById('play');
console.log(playButton);

const grid = document.getElementById('grid');
console.log(grid);

let isClicked = 0;

// Quando l'utente clicca sul bottone
playButton.addEventListener('click', function()
{
    if(isClicked) return;

    isClicked = 1;
    
    // Recupero la difficoltà
    const difficulty = parseInt(document.getElementById('difficulty').value);
    console.log(difficulty);

    // Stabilisco il numero di righe e di colonne della griglia
    let rows = 10;
    let cols = 10;
    let cellClass = 'cell-10';

    if(difficulty === 2)
    {
        rows = cols = 9;
        cellClass = 'cell-9';
    }
    else if(difficulty === 3)
    {
        rows = cols = 7;
        cellClass = 'cell-7';
    }

    // Calcolo le celle totali moltiplicando righe e colonne
    const totalCells = rows * cols;


    for(i = 1; i <= totalCells; i++)
    {
        // Creo una cella che contiene il numero dell'indice
        const cell = createCell(i);

        // Gestisco il layout della griglia a seconda della difficoltà
        cell.classList.add(cellClass);

        // Aggiungo la cella alla griglia
        grid.appendChild(cell);

        // Quando l'utente clicca su una cella
        cell.addEventListener('click', function()
        {
            // Stampo in console il numero della cella
            console.log(cell.innerText);

            // Coloro la cella d'azzurro
            cell.classList.add('bg-blue');
        })
    }
})
