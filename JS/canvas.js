const canvas = Id('canvas')
const ctx = canvas.getContext('2d')

let CX, CY, vw, vy;

Resize()

const Directory = () => {

    switch(Math.floor(Math.random()*10)){
        case 0:
            window.requestAnimationFrame(SNOW)
            break;
        case 1:
            window.requestAnimationFrame(SNOW)
            break;
        case 2:
            window.requestAnimationFrame(SNOW)
            break;
        default:
            window.requestAnimationFrame(LINES)
            break;
    }
}

window.requestAnimationFrame(Directory)

switch (id){
    case 'sites':
        PAGE = E_SITES;
        break;
    case 'design':
        PAGE = E_DESIGN;
        break;
    case 'games':
        PAGE = E_GAMES;
        break;
    case 'contact':
        PAGE = E_CONTACT;
        break;
}

function Resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    CX = canvas.width/2;
    CY = canvas.height/2;
    vw = canvas.width/100;
    vy = canvas.height/100;
}

/// SHAPE FUNCTIONS ///

function Circle(x,y,r,s){

    this.x = x;
    this.y = y;
    this.r = r;
    this.s = s;
    this.xspeed = 0;
    this.yspeed = 0;

    this.draw = () => {
        ctx.fillStyle = 'white'
        ctx.globalAlpha = this.s
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2)
        ctx.fill()
        ctx.closePath()
        ctx.globalAlpha = 1
    }
}

function Line(x,y,l,s){

    this.x = x;
    this.y = y;
    this.l = l;
    this.s = s;
    this.xspeed = 0;
    this.yspeed = 0;
    this.w = Math.random() > 0.5? true: false

    this.draw = () => {
        ctx.strokeStyle = 'gold'
        ctx.lineWidth = this.s*5
        ctx.lineCap = 'round'
        ctx.globalAlpha = this.s
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x-this.l/Math.sqrt(2), this.y+this.l/Math.sqrt(2))
        ctx.stroke()
        ctx.closePath()
        ctx.globalAlpha = 1

        if (this.w){
            this.l += 1
        }else{
            this.l -= 1
        }

        if (this.l > 700){
            this.w = false
        }else if (this.l < 200){
            this.w = true
        }
    }
}

////////////
/// SNOW ///
////////////

let Snow = []

for (let i=0; i<100; i++){

    Snow.push(new Circle(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*3+3, Math.random()*0.05+0.05))
}

const SNOW = () => {

    Resize()

    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,canvas.width, canvas.height)

    for (let i=0; i<Snow.length; i++){
        let c = Snow[i]

        c.draw()

        c.x += c.xspeed
        c.y += c.yspeed

        c.xspeed *= 0.9
        c.yspeed *= 0.9

        c.yspeed += c.s

        if (c.y > canvas.height + c.r*4){
            c.y = -c.r*4
        }
    }

    window.requestAnimationFrame(SNOW)
}

/////////////
/// LINES ///
/////////////

let Lines = []

for (let i=0; i<100; i++){

    Lines.push(new Line(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*200+100, Math.random()*0.1+0.12))
}

const LINES = () => {

    Resize()

    ctx.fillStyle = 'black'
    ctx.clearRect(0,0,canvas.width, canvas.height)

    for (let i=0; i<Lines.length; i++){
        let c = Lines[i]

        c.draw()

        c.x += c.xspeed
        c.y += c.yspeed

        c.xspeed *= 0.9
        c.yspeed *= 0.9

        c.yspeed += c.s
        c.xspeed -= c.s

        if (c.x < -50){
            c.x = canvas.width + c.l + 50
        }

        if (c.y > canvas.height + 50){
            c.y = -c.l - 50
        }

    }

    window.requestAnimationFrame(LINES)
}


///////////////
/// RIPPLES ///
///////////////