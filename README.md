# TicTacToe-Game
This game shows how Tic-Tac-Toe can be converted to a digital website using Event Handling and other exciting features in JavaScript.

### Track the turn
In Tic-Tac-Toe we need to determined which player of the two (X or O) has the turn. X & O have alternate turns. So if on clicking the button the current turn is for 'X', the very next turn when again one of the buttons of the present 9 buttons, is clicked, it should be for 'O'.

### Determine the winning patterns

0   |  1  |  2
____|_____|____
3   |  4  |  5
____|_____|____
6   |  7  |  8
    |     |    

Player wins if it forms:
1. horizontal pattern: [0, 1, 2], [3, 4, 5], [6, 7, 8]
2. vertical pattern: [0, 3, 6], [1, 4, 7], [2, 5, 8]
3. diagonal pattern: [0, 4, 8], [2, 4, 6]

There are total 8 winning patterns here.

* Above patterns can be stored in the form of Nested array
const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

// ADDING CLICK EVENT LISTENER TO EACH BOX

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        // disable box code
        checkWinner();
    })
})
________________________________________________________________________________________________________________________________________________

BUT, for above code the flaw is that when, the next time the same button is being clicked which was once clicked in one of the previous turns, is not diabled and so its value can change further on the next click to it. So, we need to disable the already clicked button(s). 

So, we add: box.disabled = "true"; --> if...else

________________________________________________________________________________________________________________________________________________
