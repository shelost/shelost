for (let i=0; i<Class('elem').length; i++){

    let elem = Class('elem')[i]

    elem.addEventListener('mouseenter', () => {

        for (let j=0; j<Class('elem').length; j++){
            let elem2 = Class('elem')[j]

            if (i != j){
                elem2.classList.add('inactive')
            }
        }
    })

    elem.addEventListener('mouseleave', () => {

        for (let j=0; j<Class('elem').length; j++){
            let elem2 = Class('elem')[j]

                elem2.classList.remove('inactive')
        }
    })
}

for (let i=0; i<Class('card').length; i++){

    let card = Class('card')[i]

    card.addEventListener('mouseenter', () => {

        for (let j=0; j<Class('card').length; j++){
            let card2 = Class('card')[j]

            if (i != j){
                card2.classList.add('inactive')
            }
        }
    })

    card.addEventListener('mouseleave', () => {

        for (let j=0; j<Class('card').length; j++){
            let card2 = Class('card')[j]

                card2.classList.remove('inactive')
        }
    })
}

function Toggle(){
    Id('navfab').classList.toggle('active')
    Id('dark').classList.toggle('active')
    Class('main')[0].classList.toggle('active')
    Class('navbar')[0].classList.toggle('active')
    Class('header')[0].classList.toggle('active')
}

Id('navfab').onclick = Toggle
Id('dark').onclick = Toggle
Class('navbar')[0].onclick = Toggle