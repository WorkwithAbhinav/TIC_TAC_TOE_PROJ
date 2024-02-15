const boxes = document.querySelectorAll('.box');
let player = "player1"

const WIN= [[0,1,2]
,[0,3,6]
,[0,4,8]
,[1,4,7]
,[2,5,8]
,[2,4,6]
,[3,4,5]
,[6,7,8]]

boxes.forEach(box => {
    box.addEventListener('click', clickHandler);
});

function clickHandler() {
    let clickedBoxId = this.id; 
    let thatbox = document.querySelector(`#${clickedBoxId}`);
    
    if (player === "player1") {
        thatbox.innerText = "X";
        player = "player2";
    } else {
        thatbox.innerText = "O";
        player = "player1";
    }
    
    this.removeEventListener('click', clickHandler);
    checkwinner();
}

const checkwinner = () =>{
    for (let pattern of WIN) {
        let fir = boxes[pattern[0]].innerText;
        let sec = boxes[pattern[1]].innerText;
        let trd = boxes[pattern[2]].innerText;


        if(fir != "" && sec != "" && trd != ""){
            if(fir === sec && sec === trd){
                console.log("Winner");
                alert("we have a winner " + fir)
            }
        }
        

    }
} 


