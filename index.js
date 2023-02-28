function funcionMostrar(){
    document.getElementById('datos__contacto').style.display= 'flex';
    document.getElementById('datos__button').style.display='none';
    document.getElementById('datos__buttonOcultar').style.display='flex';
}
function funcionOcultar(){
    document.getElementById('datos__contacto').style.display= 'none';
    document.getElementById('datos__button').style.display='flex';
    document.getElementById('datos__buttonOcultar').style.display='none';
}