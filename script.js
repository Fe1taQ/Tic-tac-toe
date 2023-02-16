const boxes = document.querySelectorAll(".box");
const button = document.getElementById("replay");

let game = true;
let yht = 0; 

function replay(){
    for (let i = 0; i < 9; i++) {
        boxes[i].innerHTML="";
        boxes[i].style.background = "wheat";
    }
    game = true;
    yht = 0;
}

const onClick = (event) => {
    check();
    const box = event.target;
    if (!game) 
        return;
    if (yht % 2 == 0 ) {
        if (box.innerHTML == "X" || box.innerHTML == "O")
            return;
        else {
            box.innerHTML = "X";
            yht += 1;
        }
    }
    else {
        if (box.innerHTML == "X" || box.innerHTML == "O")
            return;
        else {
            box.innerHTML = "O";
            yht += 1;
        }
    }
    check();
}

for (let i = 0; i < 9; i++) {
    boxes[i].addEventListener("click", onClick);
    button.addEventListener("click", replay);
}

button.addEventListener("click", replay);

function check(){
    if (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML){
        let win = boxes[0].innerHTML == "X"  ? "red" : "blue";
        boxes[0].style.background = win;
        boxes[1].style.background = win;
        boxes[2].style.background = win;
        console.log(win + " win");
        game = false;
        return;
    }
    if (boxes[3].innerHTML != "" && boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML){
        let win = boxes[3].innerHTML == "X"  ? "red" : "blue";
        boxes[3].style.background = win;
        boxes[4].style.background = win;
        boxes[5].style.background = win;
        console.log(win + " win");
        game = false;
        return;
    }
    if (boxes[6].innerHTML != "" && boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML){
        let win = boxes[6].innerHTML == "X"  ? "red" : "blue";
        boxes[6].style.background = win;
        boxes[7].style.background = win;
        boxes[8].style.background = win;
        console.log(win + " win");
        game = false;
        return;
    }
    if (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML){
        let win = boxes[0].innerHTML == "X"  ? "red" : "blue";
        boxes[0].style.background = win;
        boxes[3].style.background = win;
        boxes[6].style.background = win;
        console.log(win + " win");
        game = false;
        return;
    }
    if (boxes[1].innerHTML != "" && boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML){
        let win = boxes[1].innerHTML == "X"  ? "red" : "blue";
        boxes[1].style.background = win;
        boxes[4].style.background = win;
        boxes[7].style.background = win;
        console.log(win + " win");
        game = false;
        return;
    }
    if (boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML){
        let win = boxes[2].innerHTML == "X"  ? "red" : "blue";
        boxes[2].style.background = win;
        boxes[5].style.background = win;
        boxes[8].style.background = win;
        console.log(win + " win");
        game = false;
        return;
    }
    if (boxes[0].innerHTML != "" && boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML){
        let win = boxes[0].innerHTML == "X"  ? "red" : "blue";
        boxes[0].style.background = win;
        boxes[4].style.background = win;
        boxes[8].style.background = win;
        console.log(win + " win");
        game = false;
        return;
    }
    if (boxes[2].innerHTML != "" && boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML){
        let win = boxes[2].innerHTML == "X"  ? "red" : "blue";
        boxes[2].style.background = win;
        boxes[4].style.background = win;
        boxes[6].style.background = win;
        console.log(win + " win");
        game = false;
        return;
    }
    else {
        if (yht == 9){
            for (let i = 0; i < 9; i++){
                boxes[i].style.background = "grey"; 
            }
            console.log("it`s a tie");
            game = false;
            return;
        }
    }
}