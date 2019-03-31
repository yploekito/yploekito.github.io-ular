var canvas = document.getElementById("canvasGame")

var ctx = canvas.getContext('2d')
ctx.fillStyle = 'black'
ctx.fillRect(0,0,canvas.width,canvas.height )

x = Math.round((Math.random() * 290/5))*5
y = Math.round((Math.random() * 154/5))*5
ctx.fillStyle = 'green'
ctx.fillRect(x,y,5,5)

var ular = [
    {x: 115, y:100 },
    {x: 110, y:100 },
    {x: 105, y:100 },
    {x: 100, y:100 }
]

var batas = document.body.children[0].children[1]
var batasKiri = batas.clientLeft
var batasKanan = batas.clientLeft + batas.clientWidth
var batasAtas = batas.clientTop
var bayasBawah = batas.clientTop + batas.clientHeight
console.log(batas)
console.log(batas.getBoundingClientRect())

function canvasBaru(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height )
    // ctx.fillStyle = 'green'
    // ctx.fillRect(x,y,5,5)
}
function buatMakanan(){
    x = Math.round((Math.random() * 290/5))*5
y = Math.round((Math.random() * 154/5))*5
    return [x,y]
}
function makanan(){
    ctx.fillStyle = 'green'
    ctx.fillRect(x,y,5,5)
}
function gambarUlar(){
    for(var i = 0; i<ular.length ; i++){
        ctx.fillStyle = 'gold';
        ctx.fillRect(ular[i].x, ular[i].y, 5, 5);
        console.log("hello")
    }
}
function selesai() {
    for (let i = 4; i < ular.length; i++) {
      if(ular[i].x === ular[0].x && ular[i].y === ular[0].y){
        return true
      }
    }
    if(ular[0].x < 0 || ular[0].x > canvas.width - 5 ||ular[0].y < 0||ular[0].y > canvas.height - 5){
        return true
    }
}
function jalan(){
    var head = {x: ular[0].x + dx, y: ular[0].y + dy}
    ular.unshift(head)
    // ular.pop()
    // console.log(ular)

    if(ular[0].x === x && ular[0].y === y){
        buatMakanan()
    } else{
        ular.pop()
    }
}

function inputArah(event) {
        var kiri = 37;
        var kanan = 39;
        var atas = 38;
        var bawah = 40;
        var keyPressed = event.keyCode;
        var keAtas = (dy === -5)
        var keBawah = (dy === 5)
        var keKanan = (dx === 5)
        var keKiri = (dx === -5)
            if (keyPressed === kiri && !keKanan) {
              dx = -5;
              dy = 0;
            }else if (keyPressed === atas && !keBawah) {
              dx = 0;
              dy = -5;
            }else if (keyPressed === kanan && !keKiri) {
              dx = 5;
              dy = 0;
            }else if (keyPressed === bawah && !keAtas) {
              dx = 0;
              dy = 5;
            }
}

document.addEventListener("keydown", inputArah)

gambarUlar()
dx = 5
dy = 0

function kronologi(){
    canvasBaru()
    makanan()
    jalan()
    gambarUlar()
}
time = 120 //1 menit
for(var i =1; i< time; i++){
    var delay = i*500
    setTimeout(kronologi,delay)
    
}
// setTimeout(kronologi,1000)
// setTimeout(kronologi,2000)
// setTimeout(kronologi,3000)
// setTimeout(kronologi,1000)

// function main(){
//     var flag = true
//     while(flag){
//         console.log("main")
//         if(selesai()){
//             flag = false

//         }
//         canvasBaru()
//         makanan()
//         jalan()
//         gambarUlar()
//     console.log("a")
//     return 
//     }
// }
// jalan()
//mulai
//startMakanan

// main()



