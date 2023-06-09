# Campo minato

## Traccia:

Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

LA partita termina quando il giocatore clicca su una bomba o quando raggiunger il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba

### MILESTONE 1

Prepariamo "Qualcosa" per tenere il punteggio dell'utente.
Quando l'utente clicca su una cella, incrementiamo il punteggio.
Se riusciamo, facciamo anche in modo da non poter più cliccare sulla stessa cella

### MILESTONE 2

Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili.
Generiamoli e stampiamo in console per essere certi che siano corretti

### MILESTONE 3

Quando l'utente clicca su una cella, verrifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe.
Se si, la cella diventa rossa (raccogliamo il punteggio e scriviamo in console che la patita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.

### MILESTONE 4

Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio incrementato ha raggiunto l punteggio massimo, perchè in quel caso la partita termina. Raccogliamo quindi il messaggio e scriviamo un messaggio appropriato.

### MILESTONE 5

Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o seperchè l'utente ha raggiunto il punteggio massimo(ossia ha vinto). Dobbiamo poi in ogni caso stampare lin pagina il punteggio raggiunto ed il messaggio adeguato in caso di vittoria o sconfitta.

### BONUS

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà (come le istruzioni di ieri se non già fatto)

### SUPERBONUS

Colorare tutte le celle bomba quando la partita finisce

## Steps:

- Creo una funzione che crei una cella con un numero come parametro:
  - Creo un elemento div
  - Gli assegno la classe che la rende una cella
  - Stampo all'interno della cella il numero passato come parametro
  - Restituisco l'elemento completo
- Creo una funzione che generi le bombe:
  - Creo l'array delle bombe (vuoto)
  - **PER** 16 volte
    - Genero un numero casuale da 1 al numero delle celle totali **FINCHÈ** è presente nell'array
    - Inserisco il numero nell'array
  - Restituisco l'array completo
- Recupero gli elementi dal DOM
- **QUANDO** l'utente clicca sul bottone
  - Recupero il valore della difficoltà
  - Stabilisco il numero di righe e di colonne della griglia
  - Calcolo le celle totali moltiplicando le righe per le colonne
  - Genero le bombe invocando la funzione apposita
  - Inizializzo il punteggio a 0
  - **PER TANTE VOLTE** quante sono le celle totali
    - Invoco la funzione che crea una cella passandole l'indice corrente come argomento e stampo il risultato in pagina
- **QUANDO** l'utente clicca su una cella
  - **SE** La partita è finita **O SE** la cella è già stata cliccata
    - **FINE**
  - Assegno alla cella la classe che la rende cliccata
  - Recupero il numero della cella
  - **SE** la cella cliccata è una bomba
    - Assegno alla cella la classe che la rende rossa
    - Comunico all'utente che ha perso
    - Indico che la partita è finita
  - Rendo cliccata la cella
  - **SE** la partita non è finita
    - Incremento il punteggio di 1
  - **SE** il punteggio corrente ha raggiunto il punteggio massimo
    - Comunico all'utente che ha vinto
    - Indico che la partita è finita
  - **SE** la partita è finita
    - Coloro tutte le celle bomba di rosso
