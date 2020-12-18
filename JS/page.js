// Initialize template

let id = window.location.search.substring(1, window.location.search.length)

let PAGE = E_DESIGN

let NAVBAR = Class('navbar')[0]
let rows = 2;

function Clear(){
    for (let i=0; i<Tag('h2').length; i++){
        Tag('h2')[0].classList.remove('selected')
    }
}

switch (id){
    case 'sites':
        PAGE = E_SITES;
        rows = 2;
        Clear()
        Class('nav-blue')[0].classList.add('selected')
        break;
    case 'design':
        PAGE = E_DESIGN;
        rows = 3;
        Clear()
        Class('nav-purple')[0].classList.add('selected')
        break;
    case 'games':
        PAGE = E_GAMES;
        rows = 3;
        Clear()
        Class('nav-green')[0].classList.add('selected')
        break;
    case 'contact':
        PAGE = E_CONTACT;
        rows = 1;
        Clear()
        Class('nav-red')[0].classList.add('selected')
        break;
}

Class('elems')[0].style.gridTemplateRows = `repeat(${rows}, 350px)`;

let ELEMS = PAGE.elems
let ABSTRACT = Class('abstract')[0]
let STRING = ``
let MAST = Class('mast')[0]

MAST.firstElementChild.innerHTML = PAGE.title.toUpperCase()
MAST.lastElementChild.innerHTML = PAGE.blurb

ABSTRACT.innerHTML = PAGE.abstract

// Add Elems
for (let i=0; i<ELEMS.length; i++){

  STRING += Elem(ELEMS[i])

}

Class('elems')[0].innerHTML += STRING
