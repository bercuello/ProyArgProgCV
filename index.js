function funcionMostrar(){
    document.getElementById('contacto__datos').style.display= 'flex';
    document.getElementById('contacto__button').style.display='none';
    document.getElementById('contacto__buttonOcultar').style.display='flex';
}
function funcionOcultar(){
    document.getElementById('contacto__datos').style.display= 'none';
    document.getElementById('contacto__button').style.display='flex';
    document.getElementById('contacto__buttonOcultar').style.display='none';
}