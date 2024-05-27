//Array que contiene las imagenes
var imagenes = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg"
];

//Declaracion de variables
var index = 0;
var carrouselImg = document.querySelector('carrousel-img');
var btnIzq = document.querySelector('.izquierda');
var btnDer = document.querySelector('.derecha');

//Funcion para ver img
function verImg(index) {
    carrouselImg.src = imagenes[index];
}
//Funcion de btn para siguiente imagen
function siguienteImg() {
    index = (index + 1) % imagenes.length;
    verImg(index);
}
//Funcion de btn para imagen previa
function prevImg() {
    index = (index - 1 + imagenes.length) % imagenes.length;
    verImg(index);
}
//Accion de botones
btnIzq.addEventListener('click', prevImg);
btnDer.addEventListener('click', siguienteImg);

verImg(index);