const fundo = document.querySelector('.container');
const contagem = document.querySelector('p');

let cont = 0;
let cont2 = 20;
let cont3 = 1;

function incrementarContagem() {
    if(cont >99) return;
    cont++;
    cont2 -= 0.3;
    cont3 -= 0.01;
    contagem.innerHTML = cont+"%"
    fundo.style.filter = `blur(${cont2}px)`
    contagem.style.opacity = cont3;
}

setInterval(incrementarContagem, 30);
