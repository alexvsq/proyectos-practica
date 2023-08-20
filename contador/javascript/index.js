

const botonD = document.getElementsByClassName('btn-d')
const botonR = document.getElementsByClassName('btn-r')
const botonA = document.getElementsByClassName('btn-a')

const numeroWeb = document.getElementsByTagName('p');

let numero = 0

function clases() {
    if (numero > 0) {
        numeroWeb[0].classList.add('mayorAcero');
        numeroWeb[0].classList.remove('menorAcero', 'cero');
    } else if (numero < 0) {
        numeroWeb[0].classList.add('menorAcero');
        numeroWeb[0].classList.remove('mayorAcero', 'cero');
    } else {
        numeroWeb[0].classList.add('cero');
        numeroWeb[0].classList.remove('mayorAcero', 'menorAcero');
    }
    
}


botonA[0].addEventListener('click', () => {
    numero++
    numeroWeb[0].innerHTML = numero
    clases()
})

botonD[0].addEventListener('click', () => {
    numero--
    numeroWeb[0].innerHTML = numero
    clases()
})

botonR[0].addEventListener('click', () => {
    numero = 0
    numeroWeb[0].innerHTML = numero
    clases()
})