let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset"); // TO RESET THE GAME IN THE MIDDLE
let newgmBtn = document.querySelector("#new-game"); // TO START A NEW GAME AFTER SOMEONE WINS
let res = document.querySelector(".result"); 

// IDENTIFYING WINNING PATTERNS
const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText; // GETTING THE VALUE OF THE FIRST POSITION IN THE WINNING PATTERN
        let pos2Val = boxes[pattern[1]].innerText; // GETTING THE VALUE OF THE SECOND POSITION IN THE WINNING PATTERN
        let pos3Val = boxes[pattern[2]].innerText; // GETTING THE VALUE OF THE THIRD POSITION IN THE WINNING PATTERN
        if(pos1Val !='' && pos2Val != '' && pos3Val != ''){ // CHECKING IF ALL THE THREE POSITIONS IN THE 'CURRENT' WINNING PATTERN ARE FILLED
            if(pos1Val === pos2Val && pos2Val === pos3Val){ // CHECKING IF ALL THE THREE POSITIONS IN THE 'CURRENT' WINNING PATTERN HAVE THE SAME VALUE
                res.innerText = `Congratulations, Player '${pos1Val}' wins!`;
                res.classList.remove("hide");
                newgmBtn.classList.remove("hide");
                resetBtn.classList.add("hide");
                boxes.forEach((box) => { // DISABLES ALL THE BOXES AFTER SOMEONE WINS, TO PREVENT ANY FURTHER CHANGES TO THE BOARD
                    box.disabled = true;
                })
            }
        }
    }
}

const refresh = () =>{
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        turnX = true;
    })
}
newgmBtn.addEventListener("click",() =>{
    boxes.forEach((box) => { 
        res.classList.add("hide");
        newgmBtn.classList.add("hide");
        resetBtn.classList.remove("hide");
        refresh();
    })
})
resetBtn.addEventListener("click",() =>{
    boxes.forEach((box) => {
        res.classList.add("hide");
        newgmBtn.classList.add("hide");
        refresh();
    })
})


let turnX = true;

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
        box.disabled = "true"; // DISABLES THE BOX AFTER CLICKING TO PREVENT OVERWRITING AFTER ONE CLICK
        checkWinner(); // CHECKS THE WINNING CONDITION AFTER EVERY CLICK
    })
})
