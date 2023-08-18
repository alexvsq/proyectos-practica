import { hexToRgb } from "./codigo.js"





export function colores() {


    const coloresBotones = document.getElementsByClassName('color')
    setInterval(() => {
        let ColorCode = hexToRgb()
        coloresBotones[0].style.backgroundColor = ColorCode[0]
    }, 5500);
    setInterval(() => {
        let ColorCode = hexToRgb()
        coloresBotones[1].style.backgroundColor = ColorCode[0]
    }, 12600);
    setInterval(() => {
        let ColorCode = hexToRgb()
        coloresBotones[2].style.backgroundColor = ColorCode[0]
    }, 6500);
    setInterval(() => {
        let ColorCode = hexToRgb()
        coloresBotones[3].style.backgroundColor = ColorCode[0]
    }, 9000);
    setInterval(() => {
        let ColorCode = hexToRgb()
        coloresBotones[4].style.backgroundColor = ColorCode[0]
    }, 4000);
    setInterval(() => {
        let ColorCode = hexToRgb()
        coloresBotones[5].style.backgroundColor = ColorCode[0]
    }, 10500);
    setInterval(() => {
        let ColorCode = hexToRgb()
        coloresBotones[6].style.backgroundColor = ColorCode[0]
    }, 5000);

}
function rgbStringToHex(rgbString) {
    const match = rgbString.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    if (!match) {
        return null; // Devuelve null si el formato no es correcto
    }

    const red = parseInt(match[1]);
    const green = parseInt(match[2]);
    const blue = parseInt(match[3]);

    const hexRed = red.toString(16).padStart(2, "0");
    const hexGreen = green.toString(16).padStart(2, "0");
    const hexBlue = blue.toString(16).padStart(2, "0");

    return `#${hexRed}${hexGreen}${hexBlue}`;
}

const btn1 = document.getElementById('btn-color-1')
const btn2 = document.getElementById('btn-color-2')
const btn3 = document.getElementById('btn-color-3')
const btn4 = document.getElementById('btn-color-4')
const btn5 = document.getElementById('btn-color-5')
const btn6 = document.getElementById('btn-color-6')
const btn7 = document.getElementById('btn-color-7')

const body = document.getElementsByTagName('body')
const InfoP = document.getElementsByTagName('section')
const coloresBotones = document.getElementsByClassName('color')

btn1.addEventListener('click', () => {
    const valor = coloresBotones[0].style.backgroundColor

    body[0].style.backgroundColor = valor

    InfoP[0].innerHTML = `
     ${rgbStringToHex(valor)}
     </br>
     <small>${valor}</small>
     `

})


btn2.addEventListener('click', () => {
    const valor = coloresBotones[1].style.backgroundColor

    body[0].style.backgroundColor = valor

    InfoP[0].innerHTML = `
     ${rgbStringToHex(valor)}
     </br>
     <small>${valor}</small>
     `

})

btn3.addEventListener('click', () => {
    const valor = coloresBotones[2].style.backgroundColor

    body[0].style.backgroundColor = valor

    InfoP[0].innerHTML = `
     ${rgbStringToHex(valor)}
     </br>
     <small>${valor}</small>
     `

})

btn4.addEventListener('click', () => {
    const valor = coloresBotones[3].style.backgroundColor

    body[0].style.backgroundColor = valor

    InfoP[0].innerHTML = `
     ${rgbStringToHex(valor)}
     </br>
     <small>${valor}</small>
     `

})

btn5.addEventListener('click', () => {
    const valor = coloresBotones[4].style.backgroundColor

    body[0].style.backgroundColor = valor

    InfoP[0].innerHTML = `
     ${rgbStringToHex(valor)}
     </br>
     <small>${valor}</small>
     `

})
btn6.addEventListener('click', () => {
    const valor = coloresBotones[5].style.backgroundColor

    body[0].style.backgroundColor = valor

    InfoP[0].innerHTML = `
     ${rgbStringToHex(valor)}
     </br>
     <small>${valor}</small>
     `

})
btn7.addEventListener('click', () => {
    const valor = coloresBotones[6].style.backgroundColor

    body[0].style.backgroundColor = valor

    InfoP[0].innerHTML = `
     ${rgbStringToHex(valor)}
     </br>
     <small>${valor}</small>
     `

})

