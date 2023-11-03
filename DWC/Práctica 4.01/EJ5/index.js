import { configurarArrastre } from "../Biblioteca/biblioteca.js";

window.onload =() => {
    const bolaPapel = document.getElementById("bolaPapel");
    const papeleraVacia = document.getElementById("papeleraVacia");
    const papeleraLlena = document.getElementById("papeleraLlena");

    configurarArrastre(bolaPapel, papeleraVacia, papeleraLlena);
};