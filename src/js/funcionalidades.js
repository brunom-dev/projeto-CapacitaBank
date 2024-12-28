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

    if (!Number.isInteger(valorSaque) || valorSaque === 1 || valorSaque === 3) {
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

    return cedulas;
}



const renderizacao = (cedulas) => {
    
    const tituloResultados = document.querySelector("#resultados h3")
    const listaCedulas = document.querySelector("#listaCedulas");
    
    tituloResultados.style = "display: block;"
    listaCedulas.innerHTML = "";

    if (cedulas.qtd100 > 0) {
        listaCedulas.innerHTML += `<li>${cedulas.qtd100}x <img src="./src/assets/cedulas/100reais.jpg"></li>` 
    }
    
    if (cedulas.qtd50 > 0) {
        listaCedulas.innerHTML += `<li>${cedulas.qtd50}x <img src="./src/assets/cedulas/50reais.jpg"></li>` 
    }
    
    if (cedulas.qtd20 > 0) {
        listaCedulas.innerHTML += `<li>${cedulas.qtd20}x <img src="./src/assets/cedulas/20reais.jpg"></li>` 
    }
    
    if (cedulas.qtd10 > 0) {
        listaCedulas.innerHTML += `<li>${cedulas.qtd10}x <img src="./src/assets/cedulas/10reais.jpg"></li>` 
    }
    
    if (cedulas.qtd5 > 0) {
        listaCedulas.innerHTML += `<li>${cedulas.qtd5}x <img src="./src/assets/cedulas/5reais.jpg"></li>` 
    }

    if (cedulas.qtd2 > 0) {
        listaCedulas.innerHTML += `<li>${cedulas.qtd2}x <img src="./src/assets/cedulas/2reais.jpg"></li>` 
    }
}

export {validaSaque, processamentoSaque, renderizacao};