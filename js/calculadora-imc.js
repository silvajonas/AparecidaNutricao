const pacientes = document.querySelectorAll('.paciente')

for (contador = 0; contador < pacientes.length; contador++){
    const paciente = pacientes[contador]

    const tdNome = paciente.querySelector('.info-nome')
    const nome = tdNome.textContent
    const tdPeso = paciente.querySelector('.info-peso')
    const peso = tdPeso.textContent
    const tdAltura = paciente.querySelector('.info-altura')
    const altura = tdAltura.textContent
    const tdGordura = paciente.querySelector('.info-gordura')
    const gordura = tdGordura.textContent
    const tdImc = paciente.querySelector('.info-imc')
    
    alturaEhValida = validaAltura(altura);
    pesoEhValido = validaPeso(peso);

    if(!alturaEhValida){
        tdImc.textContent = 'Altura invalida'
        paciente.classList.add('paciente-invalido')
        alturaEhValido = false;
    }

    if (!pesoEhValido) {
        tdImc.textContent = 'Peso inválido'
        paciente.classList.add('paciente-invalido')
        pesoEhValida = false;
    }

    if (alturaEhValida && pesoEhValido) {
        tdImc.textContent = calculaImc(peso, altura)
    }
}

function calculaImc(peso, altura){
    imc = 0;

    imc = peso / (altura * altura)
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 300){
        return true
    }
}

function validaAltura(altura){
    if (altura > 0 && altura < 3.00){
        return true
    }
}