// prob messy code, just started

let array = [];
let dimensions = [100,100];
let pixcount = dimensions[0]*dimensions[1]
let gamerunning = null

for(let i1 = 0; i1 < pixcount/2; i1++){
    array.push(1)
}
for(let i1 = 0; i1 < pixcount/2; i1++){
    array.push(2)
}

function create_pixel(num){
    let pixel = document.createElement("div");
    pixel.id = `pixel${String(num)}`;
    document.getElementById("pixelcontainer").appendChild(pixel);
    pixel.style.backgroundColor = array[num]==1 && "rgb(0,0,255)" || "rgb(0,255,0)";
    return pixel;
}
for(let i=0;i<(pixcount);i++){
    create_pixel(i)
}

function game_frame(){
    function pix(pixtype,pixnum){
        // pixtype is the type of the pixel (1 or 2), its here so i can get the pixnum.
        const surrounding = get_surrounding(pixnum,dimensions);
        function surroundingpix(i){
            if(!i){
                return
            } else if(i<(pixcount)) {
                if(array[i]!=array[pixnum]){
                    const defeat = Math.floor(Math.random() * 3)
                    if(defeat==1){
                        array[i] = array[pixnum]
                    }
                }  else {
                    return
                }
            } else {
                return
            }
        }
        surrounding.forEach(surroundingpix)
    }
    let gameOver = true
    var winner = array[0]
    function updatepixels(){
        for(let i=0;i<array.length;i++){
            if(winner!=array[i]){
                gameOver = false
            }
            document.getElementById(`pixel${String(i)}`).style.backgroundColor = array[i]==1 && "rgb(0,0,255)" || "rgb(0,255,0)";
        }
    }
    array.forEach(pix)
    updatepixels()
    if(gameOver==true){
        clearInterval(gamerunning)
        document.getElementById("wintext").textContent = (winner == 1 && "Blue won!" || "Green won!") + " Reload to restart (blue wins easier, fixing later!)"
    }
}

gamerunning = setInterval(game_frame,50)