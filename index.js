


function rockPaperScissor() {
    var randomNum = Math.floor((Math.random() * 3) + 1);
    if(randomNum === 1){
        let ai = document.querySelector('.ai')
        let img = document.createElement('img')
        img.src = "https://images.squarespace-cdn.com/content/v1/5b34dbcd5417fcc01fc06032/1555440983544-SEOWD5K1NG925KTRF3OM/ROCK+HAND.png?format=2500w"
        ai.append(img)
    }
    else if(randomNum === 2){
        let ai = document.querySelector('.ai')
        let img = document.createElement('img')
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEZ6LtTWWMrUMo7IZKvzqePsffsh7igiR8mxYmVU1lPYcRp98CUwiZcpLWUbhdGrZ6aAo&usqp=CAU"
        ai.append(img)
    }
    else if(randomNum === 3){
        let ai = document.querySelector('.ai')
        let img = document.createElement('img')
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5wKIpKA6XPGU6wM5SIHSu411EK4DQrpKpQ&usqp=CAU"
        ai.append(img)
    }
}
