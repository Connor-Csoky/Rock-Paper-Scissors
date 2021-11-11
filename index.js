var player1 = 0
var computer = 0
var tie = 0
var decision = 0 
var aiDecision = 0



function rock() {
    let p1 = document.querySelector(".p1")
    let img2 = document.createElement('img')
    img2.classList.add('rPS')
    img2.src = "https://images.squarespace-cdn.com/content/v1/5b34dbcd5417fcc01fc06032/1555440983544-SEOWD5K1NG925KTRF3OM/ROCK+HAND.png?format=2500w"
    p1.append(img2)
    decision = 1
    aiChoice()
    checkWins()
}



function paper() {

    let p1 = document.querySelector(".p1")
    let img2 = document.createElement('img')
    img2.classList.add('rPS')
    img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZ6LtTWWMrUMo7IZKvzqePsffsh7igiR8mxYmVU1lPYcRp98CUwiZcpLWUbhdGrZ6aAo&usqp=CAU"
    p1.append(img2)
    decision = 2

    aiChoice()
    checkWins()
}



function scissor() {

    let p1 = document.querySelector(".p1")
    let img2 = document.createElement('img')
    img2.classList.add('rPS')
    img2.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5wKIpKA6XPGU6wM5SIHSu411EK4DQrpKpQ&usqp=CAU"
    p1.append(img2)
    decision = 3

    aiChoice()
    checkWins()
}

function aiChoice() {
    var randomNum = Math.floor((Math.random() * 3) + 1);
    if(randomNum === 1){
        let ai = document.querySelector('.ai')
        let img = document.createElement('img')
        img.classList.add("rPS")
        img.src = "https://images.squarespace-cdn.com/content/v1/5b34dbcd5417fcc01fc06032/1555440983544-SEOWD5K1NG925KTRF3OM/ROCK+HAND.png?format=2500w"
        ai.append(img)
        aiDecision = 1
    }
    else if(randomNum === 2){
        let ai = document.querySelector('.ai')
        let img = document.createElement('img')
        img.classList.add("rPS")
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZ6LtTWWMrUMo7IZKvzqePsffsh7igiR8mxYmVU1lPYcRp98CUwiZcpLWUbhdGrZ6aAo&usqp=CAU"
        ai.append(img)
        aiDecision = 2
    }
    else if(randomNum === 3){
        let ai = document.querySelector('.ai')
        let img = document.createElement('img')
        img.classList.add("rPS")
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5wKIpKA6XPGU6wM5SIHSu411EK4DQrpKpQ&usqp=CAU"
        ai.append(img)
        aiDecision = 3
    }
}

function checkWins() {
    if(decision === aiDecision) {
        console.log(decision)
        console.log(aiDecision)
        tie += 1
        console.log(tie)
        let tieHTML = document.querySelector("#tie")
        tieHTML.innerHTML = tie
    }

    else if(decision === 1) {
        if(aiDecision === 2){
            computer ++
            document.querySelector("#p2-score").innerHTML = computer
        }
        else if(aiDecision === 3) {
            player1 ++
            document.querySelector("#p1-score").innerHTML = player1
        }
    }

    else if(decision === 2) {
        if(aiDecision === 3){
            computer ++
            document.querySelector("#p2-score").innerHTML = computer
        }
        else if(aiDecision === 1) {
            player1 ++
            document.querySelector("#p1-score").innerHTML = player1
        }
    }

    else if(decision === 3) {
        if(aiDecision === 1){
            computer ++
            document.querySelector("#p2-score").innerHTML = computer
        }
        else if(aiDecision === 2) {
            player1 ++
            document.querySelector("#p1-score").innerHTML = player1
        }
    }
}