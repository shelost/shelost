let id = window.location.search.substring(1, window.location.search.length)

let MAST = Class('mast')[0]
let PAGE = ITEMS[0]
let ELEMS = PAGE.elems
let STRING = ``

for (let i=0; i<ITEMS.length; i++){

    if (ITEMS[i].id == id){
        PAGE = ITEMS[i]

        ELEMS = PAGE.elems
    }
}

Class('a')[0].href = `page.html?${PAGE.category}`

MAST.firstElementChild.innerHTML = PAGE.title.toUpperCase()
MAST.lastElementChild.innerHTML = PAGE.subtitle

// Add Elems

for (let i=0; i<ELEMS.length; i++){

    if (i%2 == 0){
        STRING += Item(ELEMS[i])
    }else{
        STRING += Item(ELEMS[i], true)
    }

}

// Loop

const ItemLoop = () => {

    if (window.innerWidth < 1000){

        for (let i=0; i<Class('right').length; i++){

            let item = Class('right')[i]

            let expo = item.firstElementChild
            let img = item.lastElementChild

            img.style.transform =  `translateY(-${expo.getBoundingClientRect().height}px)`
            expo.style.transform =  `translateY(${img.getBoundingClientRect().height}px)`

        }
    }else{

        for (let i=0; i<Class('right').length; i++){

            let item = Class('right')[i]

            let expo = item.firstElementChild
            let img = item.lastElementChild

            img.style.transform = ''
            expo.style.transform =  ''

        }

    }

    window.requestAnimationFrame(ItemLoop)
}

window.requestAnimationFrame(ItemLoop)

Class('main')[0].innerHTML += STRING

