function Id(arg){
    return document.getElementById(arg)
}

function Class(arg){
    return document.getElementsByClassName(arg)
}

function Tag(arg){
    return document.getElementsByTagName(arg)
}

function El(arg){
    return document.createElement(arg)
}

function TextNode(arg){
    return document.createTextNode(arg)
}

function Contains(el, arg){
    return el.classList.contains(arg)
}

function Add(elem, args){
    for (let i=0;i<args.length;i++){
        elem.appendChild(args[i])
    }
}

function Classes(elem, arg){

    var arr = arg.split(' ')

    for (let i=0;i<arr.length;i++){
        elem.classList.add(arr[i])
    }
}

function Translate(tag){
    switch(tag){

        case 'ps':
            return 'Photoshop';
        case 'ai':
            return 'Illustrator';
        case 'ae':
            return 'After Effects';
        case 'html':
            return 'HTML';
        case 'js':
            return 'JavaScript';
        case 'css':
            return 'CSS';
        case 'sass':
            return 'SASS';
        case 'vue':
            return 'Vue';
        case 'canvas':
            return 'Canvas';
        case 'blogger':
            return 'Blogger';
        case 'android':
            return 'Android';
        case 'java':
            return 'Java';

        case 'company':
            return 'Company';
        case 'school':
            return 'Extracurricular';
        case 'church':
            return 'Church';
        case 'me':
            return 'Recreational'

        default:
            return 'Tag';
    }
}


function Elem(object, landing){

    // Initialize
    let elem = object
    let img, link;

    /*
    // Tags
    let tags = `<div class = 'tags'>`
    for (let j=0; j<elem.tags.length; j++){
        tags +=
        `
        <p> ${Translate(elem.tags[j])} </p>
        `
    }
    tags += `</div>`
    */

    // Account for file path differences
    if (landing){
        img =  ` <img src = './Assets/logos/${elem.image}.png' alt = 'Element Image' class = 'image'> `
        if (elem.link.substring(0,4) == 'item'){
            link = `@/${elem.link}`
        }else{
            link = elem.link
        }
    }else{
        img =  ` <img src = 'Assets/logos/${elem.image}.png' alt = 'Element Image' class = 'image'> `
        link = elem.link
    }

    // Assemble element
    let str =
    `
    <a href = ${link} class = 'a' style = 'grid-area: ${elem.grid}'>
        <div class = 'elem ${elem.color}'>
            <h1> ${elem.title} <span> ${elem.date} </span> </h1>
            <p> ${elem.blurb} </p>

            ${img}

            <div class = 'tags'>

            </div>

        </div>
    </a>
    `

    return str;
}

function Card(object, landing){

    // Initialize
    let elem = object
    let img, link;

    // Account for file path differences
    if (landing){
        img =  ` <img src = './Assets/logos/${elem.image}.png' alt = 'Element Image' class = 'image'> `
        if (elem.link.substring(0,5) == 'item'){
            link = `@/${elem.link}`
        }else{
            link = elem.link
        }
    }else{
        img =  ` <img src = 'Assets/logos/${elem.image}.png' alt = 'Element Image' class = 'image'> `
        link = elem.link
    }

    // Assemble Card
    let str =
    `
    <a href = ${link}>
        <div class = 'card ${elem.color}'>

            <h1> ${elem.title} </h1>
            <p> ${elem.blurb} </p>

            ${img}

        </div>
    </a>
    `

    return str;
}

function Item(object, right){

    let elem = object

    let str;

    if (!right){

        str = `
        <div class = 'item'>

            <img src = 'Assets/${elem.img}.png' alt = 'image'>

            <div class = 'expo'>
                <h2> ${elem.title}</h2>
                <p> ${elem.caption} </p>
            </div>

        </div>
        `

    }else{

        str = `
        <div class = 'item right'>

            <div class = 'expo'>
                <h2> ${elem.title}</h2>
                <p> ${elem.caption} </p>
            </div>

            <img src = 'Assets/${elem.img}.png' alt = 'image'>

        </div>
        `
    }


    return str;
}