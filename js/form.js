const botao = document.querySelector('#adicionar-paciente')
botao.addEventListener('click', adicionarPaciente)

function adicionarPaciente (event) {
    event.preventDefault();

    // Extrai as informações do paciente
    const form = document.querySelector('#form-adiciona')
    const paciente = obtemInformacoesFormulario(form)

    var erros = validaPaciente(paciente)

    if (erros.length > 0){
        exibeMensagemDeErro();

        return
    }

    var mensagemErro = document.querySelector('.mensagem-erro')
    mensagemErro.innerHTML = ''
    
    adicionaPacienteNaTabela(paciente)

    form.reset()
}

function obtemInformacoesFormulario (form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function adicionaPacienteNaTabela(paciente){
    // Cria um o elemento tr e tds e joga as informações pra eles 
    const pacienteTr = montaTr(paciente)
    const tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function montaTr(paciente){
    const pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente')
    
    const nomeTd = montaTd(paciente.nome, 'info-nome')
    const pesoTd = montaTd(paciente.peso, 'info-peso')
    const alturaTd = montaTd(paciente.altura, 'info-altura')
    const gorduraTd = montaTd(paciente.gordura, 'info-gordura')
    const imcTd = montaTd(paciente.imc, 'info-imc')

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
}

function montaTd(dado, classe){
    const td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente){
    erros = []

    if (paciente.nome.length == 0) {
        erros.push('O campo nome esta em branco!')
    }

    if(!validaPeso(paciente.peso)){
        erros.push('O campo peso esta inválido!')
    }

    if(!validaAltura(paciente.altura)){
        erros.push('O campo altura esta inválido!')
    }

    if(paciente.gordura.length == 0){
        erros.push('O campo gordura esta em branco!')
    }

    return erros;
}

function exibeMensagemDeErro(){
    var ul = document.querySelector('.mensagem-erro')
    ul.innerHTML = ''
    
    erros.forEach(function(erro){
        var li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })

}