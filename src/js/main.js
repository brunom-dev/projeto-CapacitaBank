import { validaSaque } from "./funcionalidades.js";
import { processamentoSaque } from "./funcionalidades.js";
import { renderizacao } from "./funcionalidades.js";


const inputSaque = document.querySelector("#input-saque");
const btnSaque = document.querySelector("#btn-confirmar");
const resultados = document.querySelector("#resultados")

btnSaque.addEventListener("click", () => {
    
    resultados.style = "display: none;"

    let valorSaque = Number(inputSaque.value.replace(",", "."));

    if (!validaSaque(valorSaque)){
        inputSaque.classList.remove("correct")
        inputSaque.classList.add("incorrect")
        return;
    } 
    
    inputSaque.classList.remove("incorrect")
    inputSaque.classList.add("correct")

    let cedulas = processamentoSaque(valorSaque);

    renderizacao(cedulas)
})
