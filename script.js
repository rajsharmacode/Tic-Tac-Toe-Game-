let allbox = document.querySelector("#allbox");
let allboxclass = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let congt = document.querySelector("#msg");

let turn = 0;
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

allboxclass.forEach((data) => {
    data.addEventListener("click", () => {
        if (turn === 0) {
            data.innerText = "0";
            turn = 1;
        }
        else {
            data.innerText = "X";
            turn = 0;
        }
        data.disabled = true;
        let iswiner = winer();
        count++;
        if (count === 9 && !iswiner) {
            count = 0;
            drawGame();
        }
    })
});

const newGame = (data) => {
    // console.log("reset and new game");
    congt.innerText = `Congratulations, Winner is : ${data}`;
    for (let box of allboxclass) {
        box.disabled = true
    }
    congt.style.display = "block"
    console.log(congt.innerText)
}

const drawGame = () => {
    // console.log("Match Draw");
    congt.innerText = "Match draw"
    congt.style.display = "block"
}

const winer = () => {

    for (let pattern of winPatterns) {
        let pos1Val = allboxclass[pattern[0]].innerText;
        let pos2Val = allboxclass[pattern[1]].innerText;
        let pos3Val = allboxclass[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner");
                newGame(pos1Val);
                allboxclass[pattern[0]].style.backgroundColor = "yellow"
                allboxclass[pattern[1]].style.backgroundColor = "yellow"
                allboxclass[pattern[2]].style.backgroundColor = "yellow"
                return true;
            }
        }
    }
};

resetbtn.addEventListener("click", () => {
    turn = 0;
    count = 0;
    // console.log("reset");
    for (let box of allboxclass) {
        box.disabled = false
        box.innerText = ""
        congt.style.display = "none"
        box.style.backgroundColor = "bisque"
    }
});