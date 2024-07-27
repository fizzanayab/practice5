var top_side = 10
var left_side = 10
var top_side2 = 10
var left_side2 = 10
var zedindex = 1
var player1 = document.getElementById('player1')
var player2 = document.getElementById('player2')



onkeydown = (e) => {
        
    if (e.key == "ArrowDown") {
        player1.style.top = top_side+"px"
        top_side += 10 
    }


    if (e.key == "ArrowUp") {
        player1.style.top = top_side+"px"
        top_side -= 10 
    }
    
    if (e.key == "ArrowLeft") {
        player1.style.left = left_side+"px"
        left_side -= 10 
    }

    if (e.key == "ArrowRight") {
        player1.style.left = left_side+"px"
        left_side += 10 
    }



    if (e.key == "s") {
        player2.style.top = top_side+"px"
        top_side2 += 10 
    }


    if (e.key == "w") {
        player2.style.top = top_side2+"px"
        top_side2 -= 10 
    }
    
    if (e.key == "a") {
        player2.style.left = left_side2+"px"
        left_side2 -= 10 
    }

    if (e.key == "d") {
        player2.style.left = left_side2+"px"
        left_side2 += 10 
    }

    if (e.key == "z") {
        player1.style.zIndex = zedindex
        zedindex += 1 
    }

    if (e.key == "p") {
        player2.style.zIndex = zedindex
        zedindex += 1 
    }
}