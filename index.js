
function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnYes = document.getElementById("btn_yes");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];


btnNo.addEventListener('mouseenter', function(e){moverPosicionRandom(e.target)});
btnYes.addEventListener('click', function(e){
    alert("Sabia que dirias que sí")
    divModoSexo.style.display = "block";
    const cancion  = new Audio("img\\modo_hot.mp3");
    cancion.play();
})
