let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newgmBtn = document.querySelector("#new-game");
let res = document.querySelector(".result");

const winPatterns = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val !='' && pos2Val != '' && pos3Val != ''){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                res.innerText = `Congratulations, Player '${pos1Val}' wins!`;
                res.classList.remove("hide");
                newgmBtn.classList.remove("hide");
                resetBtn.classList.add("hide");
                boxes.forEach((box) => {
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
        box.disabled = "true";
        checkWinner();
    })
})