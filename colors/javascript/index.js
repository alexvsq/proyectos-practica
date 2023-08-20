

import {hexToRgb} from "./codigo.js"
import {colores} from "./colores-boton.js"



const body = document.getElementsByTagName('body')
const InfoP = document.getElementsByTagName('section')

const btnP = document.getElementById('btn-p')

btnP.addEventListener('click',()=>{
    let ColorCode = hexToRgb()

    InfoP[0].innerHTML =  `
    ${ColorCode[0]}
    </br>
    <small>${ColorCode[1]}</small>
    ` 
    body[0].style.backgroundColor = ColorCode[0]

    console.log(ColorCode);
})


colores()