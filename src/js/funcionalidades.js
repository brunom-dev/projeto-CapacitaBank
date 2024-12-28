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

    if (!Number.isInteger(valorSaque) || !verificarMultiplo(valorSaque)) {
        statusValidacao.innerHTML = "O valor digitado não é multiplo das notas disponíveis no momento.<br> Tente novamente!"
        return false
    }

    statusValidacao.innerHTML = ""
    return true; 

}

const processamentoSaque = (valorSaque) => {
    let valor = valorSaque;
    
    const cedulas = {
        qtd100: 0, qtd50: 0, qtd20: 0,
        qtd10: 0, qtd5: 0, qtd2: 0
    }

    while (valor != 0) {
        while (valor >= 100) {
            valor = valor - 100;
            cedulas.qtd100++;
        }

        while (valor >= 50) {
            valor = valor - 50;
            cedulas.qtd50++;;
        }

        while (valor >= 20) {
            valor = valor - 20;
            cedulas.qtd20++;
        }

        while (valor >= 10) {
            valor = valor - 10;
            cedulas.qtd10++;
        }

        while (valor >= 5) {
            valor = valor - 5;
            cedulas.qtd5++;
        }

        while (valor >= 2) {
            valor = valor - 2;
            cedulas.qtd2++;
        }

    }

    return [cedulas.qtd100, cedulas.qtd50, cedulas.qtd20, cedulas.qtd10, cedulas.qtd5, cedulas.qtd2]
}

const verificarMultiplo = (numero) => {
    if ((numero % 2) === 0 || numero % 5 === 0) {
        return true;
    } else {
        return false
    }
}



export {validaSaque, processamentoSaque};