// Inicio

var btnAgregar = document.querySelector(".btn-agregar");
btnAgregar.addEventListener("click", agregarPalabra);

var botonIniciar = document.querySelector(".btn-iniciar");
botonIniciar.addEventListener("click", iniciarJuego);

var botonNuevoJuego = document.querySelector(".btn-nuevojuego");
botonNuevoJuego.addEventListener("click", iniciarJuego);

var botonDesistir = document.querySelector(".btn-desistir");
botonDesistir.addEventListener("click", function() {
    document.querySelector(".btns-inicio").style.display = "flex";
    document.querySelector(".palabra-nueva").style.display = "none"; 
    document.querySelector(".juego").style.display = "none";
})

//Agregar Palabra 

function agregarPalabra() {
    document.querySelector(".btns-inicio").style.display = "none";
    document.querySelector(".palabra-nueva").style.display = "flex"; 
    document.querySelector(".juego").style.display = "none"; 
    
    var btnGuardarEmpezar = document.querySelector(".btn-guardar-empezar");
    btnGuardarEmpezar.addEventListener("click", function(event) {
        var entrada = document.querySelector(".input-palabra-nueva");
        var entradaMayus = entrada.value.toUpperCase();
        var valor = verificarPalabra(entradaMayus);
        if(valor) {
            palabras.push(entradaMayus);
            iniciarJuego();
        }
    });

    var btnCancelar = document.querySelector(".btn-cancelar");
    btnCancelar.addEventListener("click", function(event) {
        document.querySelector(".btns-inicio").style.display = "flex";
        document.querySelector(".palabra-nueva").style.display = "none"; 
        document.querySelector(".juego").style.display = "none";
    })
}

// canva
var lienzo = document.querySelector("canvas");
var pincel = lienzo.getContext("2d");

function limpiar() {
    pincel.clearRect(0, 0, 294, 360);
}

function dBase() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(0, 356);
    pincel.lineTo(294, 356);
    pincel.lineTo(294, 360);
    pincel.lineTo(0, 360);
    pincel.fill();
}

function dMastil() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(80, 0);
    pincel.lineTo(80, 360);
    pincel.lineTo(84, 360);
    pincel.lineTo(84, 0);
    pincel.fill();
}

function dTravesa() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(80, 0);
    pincel.lineTo(260, 0);
    pincel.lineTo(260, 4);
    pincel.lineTo(80, 4);
    pincel.fill();
}

function dSoga() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(260, 0);
    pincel.lineTo(260, 50);
    pincel.lineTo(256, 50);
    pincel.lineTo(256, 0);
    pincel.fill();
}

function dCabeza() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.arc(258, 83/*Posición*/, 33/*Tamaño del radio*/, 0/*Angulo inicial*/, 2*3.14/*Angulo final*/);
    pincel.fill();

    pincel.fillStyle = "white";
    pincel.beginPath();
    pincel.arc(258, 83/*Posición*/, 29/*Tamaño del radio*/, 0/*Angulo inicial*/, 2*3.14/*Angulo final*/);
    pincel.fill();
}

function dTronco() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(260, 115);
    pincel.lineTo(260, 250);
    pincel.lineTo(256, 250);
    pincel.lineTo(256, 115);
    pincel.fill();
}

function dPieDerecho() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(260, 250);
    pincel.lineTo(294, 310);
    pincel.lineTo(290, 310);
    pincel.lineTo(256, 250);
    pincel.fill();
}

function dPieIzquierdo() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(256, 250);
    pincel.lineTo(226, 310);
    pincel.lineTo(230, 310);
    pincel.lineTo(260, 250);
    pincel.fill();
}

function dManoDerecha() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(260, 115);
    pincel.lineTo(294, 175);
    pincel.lineTo(290, 175);
    pincel.lineTo(256, 115);
    pincel.fill();
}

function dManoIzquierda() {
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.moveTo(256, 115);
    pincel.lineTo(222, 175);
    pincel.lineTo(226, 175);
    pincel.lineTo(260, 115);
    pincel.fill();
}

//Dibujo Ahorcado

function dHorca(errores) {
    switch(errores) {
        case 1:
            dBase();
            break;
        case 2:
            dMastil();
            break;
        case 3:
            dTravesa();
            break;
        case 4:
            dSoga();
            break;
        case 5:
            dCabeza();
            break;
        case 6:
            dTronco();
            break;
        case 7:
            dPieDerecho();
            break;
        case 8:
            dPieIzquierdo();
            break;
        case 9:
            dManoDerecha();
            break;
        case 10:
            dManoIzquierda();
            return false;
            break;
        default:
            break;
    }
}

// Dibujo Ltra 

function dLetraCorrecta(letra, position) {
    var letras = document.querySelector(".letra-" + position);
    letras.textContent = letra;
}

// msj
function dMensaje(mensaje) {
    console.log(mensaje);
}


// palabras

let palabras = [
    "ONE",
    "ALURA",
    "RETO",
    "JAVA",
    "LENJUAJE",
    "IDE",
    "HTML",
    "CSS"
];

function escogerPalabra() {
    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}

// Run Juego

var palabra;

function iniciarJuego(){
    document.querySelector(".btns-inicio").style.display = "none";
    document.querySelector(".palabra-nueva").style.display = "none"; 
    document.querySelector(".juego").style.display = "flex";

    document.querySelector("canvas").style.display = "";
    document.querySelector(".entrada-juego").style.display = "";
    document.querySelector(".mensaje").style.display = "none";

    palabra = escogerPalabra();
    errores = 0;
    lUsadas = [];
    finJuego = false;
    ganaste = 0;
    mensaje = "";
    letrasErrores = [];

    limpiar();

    mostrarGuiones(palabra);

    console.log(palabra);
}


//responsiva

var a = document.querySelector(".btn-a");
var b = document.querySelector(".btn-b");
var c = document.querySelector(".btn-c");
var d = document.querySelector(".btn-d");
var e = document.querySelector(".btn-e");
var f = document.querySelector(".btn-f");
var g = document.querySelector(".btn-g");
var h = document.querySelector(".btn-h");
var i = document.querySelector(".btn-i");
var j = document.querySelector(".btn-j");
var k = document.querySelector(".btn-k");
var l = document.querySelector(".btn-l");
var m = document.querySelector(".btn-m");
var n = document.querySelector(".btn-n");
var ñ = document.querySelector(".btn-ñ");
var o = document.querySelector(".btn-o");
var p = document.querySelector(".btn-p");
var q = document.querySelector(".btn-q");
var r = document.querySelector(".btn-r");
var s = document.querySelector(".btn-s");
var t = document.querySelector(".btn-t");
var u = document.querySelector(".btn-u");
var v = document.querySelector(".btn-v");
var w = document.querySelector(".btn-w");
var x = document.querySelector(".btn-x");
var y = document.querySelector(".btn-y");
var z = document.querySelector(".btn-z");

a.addEventListener("click", enviarA);
b.addEventListener("click", enviarB);
c.addEventListener("click", enviarC);
d.addEventListener("click", enviarD);
e.addEventListener("click", enviarE);
f.addEventListener("click", enviarF);
g.addEventListener("click", enviarG);
h.addEventListener("click", enviarH);
i.addEventListener("click", enviarI);
j.addEventListener("click", enviarJ);
k.addEventListener("click", enviarK);
l.addEventListener("click", enviarL);
m.addEventListener("click", enviarM);
n.addEventListener("click", enviarN);
ñ.addEventListener("click", enviarÑ);
o.addEventListener("click", enviarO);
p.addEventListener("click", enviarP);
q.addEventListener("click", enviarQ);
r.addEventListener("click", enviarR);
s.addEventListener("click", enviarS);
t.addEventListener("click", enviarT);
u.addEventListener("click", enviarU);
v.addEventListener("click", enviarV);
w.addEventListener("click", enviarW);
x.addEventListener("click", enviarX);
y.addEventListener("click", enviarY);
z.addEventListener("click", enviarZ);

function enviarA() {
    vLetra("A");
}

function enviarB() {
    vLetra("B");
}

function enviarC() {
    vLetra("C");
}

function enviarD() {
    vLetra("D");
}

function enviarE() {
    vLetra("E");
}

function enviarF() {
    vLetra("F");
}

function enviarG() {
    vLetra("G");
}

function enviarH() {
    vLetra("H");
}

function enviarI() {
    vLetra("I");
}

function enviarJ() {
    vLetra("J");
}

function enviarK() {
    vLetra("K");
}

function enviarL() {
    vLetra("L");
}

function enviarM() {
    vLetra("M");
}

function enviarN() {
    vLetra("N");
}

function enviarÑ() {
    vLetra("Ñ");
}

function enviarO() {
    vLetra("O");
}

function enviarP() {
    vLetra("P");
}

function enviarQ() {
    vLetra("Q");
}

function enviarR() {
    vLetra("R");
}

function enviarS() {
    vLetra("S");
}

function enviarT() {
    vLetra("T");
}

function enviarU() {
    vLetra("U");
}

function enviarV() {
    vLetra("V");
}

function enviarW() {
    vLetra("W");
}

function enviarX() {
    vLetra("X");
}

function enviarY() {
    vLetra("Y");
}

function enviarZ() {
    vLetra("Z");
}

// Espacios

function mostrarGuiones(palabra) {
    for(var i = 1; i <= 8; i++) {
        document.querySelector(".linea-" + i).style.display = "none";

        var letras = document.querySelector(".letras");
        while(letras.firstChild) {
            letras.removeChild(letras.firstChild);
        }

        var letrasNo = document.querySelector(".letras-no");
        while(letrasNo.firstChild) {
            letrasNo.removeChild(letrasNo.firstChild);
        }
    }

    for(var i = 1; i <= palabra.length; i++) {
        document.querySelector(".linea-" + i).style.display = "";

        var letras = document.createElement("span");
        letras.classList.add("letra");
        letras.classList.add("letra-" + i);
        document.querySelector(".letras").appendChild(letras);
    }
}


//Validar Juego

function vFin() {
    if(finJuego) {
        document.querySelector("canvas").style.display = "none";
        document.querySelector(".entrada-juego").style.display = "none";
        document.querySelector(".mensaje").style.display = "";
        document.querySelector(".mensaje").textContent = mensaje;
        document.querySelector(".mensaje").style.color = colorMensaje;
    }
}


// letras

var finJuego = false;
var ganaste = 0;
var mensaje = "";
var colorMensaje;
var letrasErrores;

function vLetra(letra) {
    var esta = false;

    if(lUsadas.indexOf(letra) == -1) {
        lUsadas.push(letra);
    
        for(var i = 0; i < palabra.length; i++) {
            if(letra == palabra[i]) {
                dLetraCorrecta(letra, i + 1);
                ganaste++;
                esta = true;
            }
    
            if(ganaste == palabra.length) {
                finJuego = true;
                mensaje = "Reto Logrado la Palabra es: " + palabra;
                colorMensaje = "blue";
                vFin();
            }
        }
        if(!esta) {
            if(letrasErrores.indexOf(letra) == -1) {
                errores++;
                letrasErrores.push(letra);
                dLetraIncorrecta(letra);
                if(dHorca(errores) == false) {
                    finJuego = true;
                    mensaje = "Que mala Suerte: " + palabra;
                    colorMensaje = "red";
                    vFin();
                }
            }
        }
        return esta;
    }
}

function vGanaste() {
    
}


// Dibujar Letra
function dLetraIncorrecta(letra) {
    var letraNo = document.createElement("span");
    letraNo.classList.add("letra-no");
    letraNo.textContent = letra;
    document.querySelector(".letras-no").appendChild(letraNo);
}


//Validar Palabra

function verificarPalabra(palabra) {
    if(palabra.length > 8 || palabra.length < 2) {
        return false;
    }
    for(var i = 0; i < palabra.length; i++) {
        switch(palabra[i]) {
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
            case "H":
            case "I":
            case "J":
            case "K":
            case "L":
            case "M":
            case "Ñ":
            case "O":
            case "P":
            case "Q":
            case "R":
            case "S":
            case "T":
            case "U":
            case "V":
            case "W":
            case "X":
            case "Y":
            case "Z":
                continue;
                break;
            default:
                return false;
                break;
        }
    }
    return true;
}


// Teclas

document.addEventListener("keypress", vTecla);

var errores = 0;
var lUsadas = [];

function vTecla(event) {
    var letra = event.key.toUpperCase();;
    
    if(vLetraCorrecta(letra)) {
        var indice = vLetra(letra);
    }

    /*if(!indice) {
        errores++;
        if(lUsadas.indexOf(letra) != -1) {
            dHorca(errores);
        }
    }*/
}

function vLetraCorrecta(letra) {
    var l = letra.toUpperCase();
    switch(l) {
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
        case "F":
        case "G":
        case "H":
        case "I":
        case "J":
        case "K":
        case "L":
        case "M":
        case "N":
        case "Ñ":
        case "O":
        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
        case "U":
        case "V":
        case "W":
        case "X":
        case "Y":
        case "Z":
            return true;
            break;
        default:
            return false;
            break;
    }
}