import { validaSaque } from "./funcionalidades.js";
import { processamentoSaque } from "./funcionalidades.js";


const inputSaque = document.querySelector("#input-saque");
const btnSaque = document.querySelector("#btn-confirmar");


btnSaque.addEventListener("click", () => {
    
    let valorSaque = Number(inputSaque.value.replace(",", "."));

    if (!validaSaque(valorSaque)){
        inputSaque.classList.remove("correct")
        inputSaque.classList.add("incorrect")
        return;
    } 
    
    inputSaque.classList.remove("incorrect")
    inputSaque.classList.add("correct")
    console.log("passou validacao")
    let cedulas = processamentoSaque(valorSaque)

    console.log(`
        Notas de 100: ${cedulas[0]}
        Notas de 50: ${cedulas[1]}
        Notas de 20: ${cedulas[2]}
        Notas de 10: ${cedulas[3]}
        Notas de 5: ${cedulas[4]}
        Notas de 2: ${cedulas[5]}
    `)
})
