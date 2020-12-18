let PAGE = E_HOME
let ELEMS = PAGE.elems

for (let i=0; i<ELEMS.length; i++){

    let str = ``

    for (let j=0; j<ELEMS[i].length; j++){
        if (i==0){
            str += Elem(ELEMS[i][j], true)
        }else{
            str += Card(ELEMS[i][j], true)
        }
    }

    Class('row')[i].innerHTML = str
}

Id('arrow').onclick = () => {
    window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    })
}


const LandingLoop = () => {

    if (window.innerWidth < 1000){

    }else{

    }

    console.log(window.scrollY/window.innerWidth)

    window.requestAnimationFrame(LandingLoop)
}

window.requestAnimationFrame(LandingLoop)

