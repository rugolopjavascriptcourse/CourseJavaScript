const div_mov = document.querySelector('#movement')
const image = document.querySelector('#image')
const DELTA = 1
const POS_INICIAL = -100
const TIME = 17
var x= 10
var y = 10

var images = ['../hojita/images/Homer_Simpson_2006.png', '../hojita/images/Homersimpson.webp', '../hojita/images/pegatinas.png']

chooseImg()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function chooseImg(){
    var imgRandom = getRandomInt(3)

    switch (imgRandom) {
        case 0: 
            image.src=images[0]
            break
        case 1:
            image.src=images[1]

            break
        case 2: 
        image.src=images[2]
        break
    }
    mover()
}

function mover(){
    console.log(TIME)
    clearInterval(nIntervalId)
    let nIntervalId = setInterval(()=>{
        div_mov.style.top = (y+=DELTA)+'px'
        if(y>window.innerHeight){
            y = POS_INICIAL
            x = Math.random()*window.innerWidth
            div_mov.style.left = x+'px'
            chooseImg()
        }
    }, TIME)
    
}
