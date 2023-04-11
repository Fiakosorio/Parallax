let text = document.getElementById('text');
let hoja = document.getElementById('hoja');
let colina1 = document.getElementById('colina1');
let colina4 = document.getElementById('colina4');
let colina5 = document.getElementById('colina5');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    hoja.style.top = value * -1.5 + 'px';
    hoja.style.left = value * 1.5 + 'px';
    colina5.style.left = value * 1.5 + 'px';
    colina4.style.left = value * -1.5 + 'px';
    colina1.style.top = value * 1 + 'px';
});