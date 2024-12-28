const validaSaque = (valorSaque) => {
    const statusValidacao = document.querySelector("#status-validacao");

    if (valorSaque == null) {
        statusValidacao.innerHTML = "Preencha o valor do saque!"
        return false
    } 
    
    if (valorSaque <= 0 ) {
        statusValidacao.innerHTML = "O valor do saque deve ser maior que 0 (zero)!"
        return false
    }

    if (!Number.isInteger(valorSaque)) {
        statusValidacao.innerHTML = "O valor digitado não é multiplo das notas disponíveis no momento.<br> Tente novamente!"
        return false
    }

    statusValidacao.innerHTML = ""
    return true; 

}


export {validaSaque};