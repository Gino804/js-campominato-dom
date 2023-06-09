console.log('JS OK');

// Creo una funzione che crei una cella contenente un numero
const createCell = (n) =>
{
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.innerText = n;

    return cell;
}

// Creo una funzione per generare le bombe
const createBombs = (totalCells) =>
{
    // Creo l'array delle bombe
    const bombs = [];

    let randomNumber;

    // Per 16 volte
    for(i = 0; i < 16; i++)
    {
        do
        {
            // Genero un numero randomico da 1 al totale delle celle
            randomNumber = Math.floor(Math.random() * totalCells) + 1;
        }
        while(bombs.includes(randomNumber)); // Controllo se è già presente nell'array

        // Inserisco il numero nell'array
        bombs.push(randomNumber);
    }

    // Restituisco l'array di bombe
    return bombs;
}

// Recupero gli elementi dal DOM
const playButton = document.getElementById('play');
console.log(playButton);

const grid = document.getElementById('grid');
console.log(grid);

const messagePlaceholder = document.getElementById('message');
console.log(messagePlaceholder);

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

    // Genero le bombe
    const bombs = createBombs(totalCells);
    console.table(bombs);

    // Inizializzo il punteggio
    let score = 0;
    let gameOver = 0;

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
            // Se la partita è finita o se la cella è già stata cliccata
            if(gameOver || cell.classList.contains('clicked')) return;

            // Recupero il numero della cella
            let cellNumber = parseInt(cell.innerText);

            // Se la cella cliccata è una bomba
            if(bombs.includes(cellNumber))
            {
                // Comunico all'utente che ha perso
                messagePlaceholder.innerText = 'You lost! ' + `Score: ${score}`;

                // Indico che la partita è finita
                gameOver = 1;
            }

            // Rendo cliccata la cella
            cell.classList.add('clicked');

            // Incremento il punteggio
            if(!gameOver) score++;

            // Se il punteggio ha raggiunto il punteggio massimo
            if(score === totalCells - bombs.length)
            {
                // Comunico all'utente che ha vinto
                messagePlaceholder.innerText = 'You won! ' + `Score: ${score}`;

                // Indico che la partita è finita
                gameOver = 1;
            }

            // Se la partita è finita
            if(gameOver)
            {
                // Coloro tutte le bombe di rosso
                const cells = document.querySelectorAll('.cell');
                for(let i = 0; i < totalCells; i++)
                {
                    cellNumber = parseInt(cells[i].innerText);
                    if(bombs.includes(cellNumber)) cells[i].classList.add('bomb');
                }
            }
        })
    }
})
