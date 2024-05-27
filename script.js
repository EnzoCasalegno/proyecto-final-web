//Array que contiene las imagenes
var imagenes = [
    "./carrousel/image1.jpg",
    "./carrousel/image2.jpg",
    "./carrousel/image3.jpg",
    "./carrousel/image4.jpg",
    "./carrousel/image5.jpg"
];

//Declaracion de variables
var index = 0;


//Funcion para ver img
function verImg() {
    let actImg = document.querySelector('.img');
    actImg.src = imagenes[index];
}
//Funcion de btn para siguiente imagen
function siguienteImg() {
    if (index < imagenes.length - 1) {
        index++;
    }else{
        index=0;
    }
    verImg();
}
//Funcion de btn para imagen previa
function prevImg() {
    if (index > 0) {
        index--;
    } else {
        index = imagenes.length - 1;
    }
    verImg();
}
//Accion de botones
btnIzq.addEventListener('click', prevImg);
btnDer.addEventListener('click', siguienteImg);

verImg(index);