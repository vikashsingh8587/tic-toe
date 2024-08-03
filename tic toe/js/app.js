let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#r");
let message1= document.querySelector(".message1")
let message2= document.querySelector(".message2")



let turn0 = true;
const arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let count=0;

boxes.forEach((box) => {
    
    box.addEventListener("click", () => {
        console.log("box are click")
        count++;
        console.log(count);
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
})
const disableAll= ()=>{
    for(let a of boxes){
        a.disabled=true;
    }
}
function winner(x){
    console.log(x);
    if(x==="X"){
        message2.innerText="winner"
        message1.innerText="Looser"
    }
    else if(x==="O"){
        message1.innerText="winner"
         message2.innerText="Looser"
    }
    else{
        message1.innerText="Matched Draw"
         message2.innerText="Matched Draw"
    }
}
let resetgame=()=>{
    console.log("clicked reset")
    turn0=true;
    for(let a of boxes){
        a.disabled=false;
        a.innerText="";
    }
    count=0;
    message1.innerText="";
    message2.innerText="";
}
const checkwinner = () => {
   
    for (a of arr) {

        let x = boxes[a[0]].innerText;
        let y = boxes[a[1]].innerText;
        let z = boxes[a[2]].innerText;
        let flag = false;
        if (x != "" && y != "" && z != "") {
            if (x == y && y == z) {
                console.log("winner", x);
                winner(x);
                disableAll();
                flag = true;
                break;
            }
           
        }
        if(count==9){
            console.log("matched are draw");
            winner("D");
        }



    }
};

resetbtn.addEventListener("click",resetgame)
