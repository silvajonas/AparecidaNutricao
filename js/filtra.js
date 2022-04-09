var filtrarPaciente = document.querySelector('#filtrar-tabela')

filtrarPaciente.addEventListener('input', function(){
    var pacientes = document.querySelectorAll('.paciente')
    // console.log(this.value)

    if(this.value.length > 0){
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i]
            var tdNome = paciente.querySelector('.info-nome')
            var nome = tdNome.textContent

            var expressao = new RegExp(this.value, 'i')
            
            if(!expressao.test(nome)){
                paciente.classList.add('invisivel')
            }else {
                paciente.classList.remove('invisivel')
            }
        }
    }else{
        for(i = 0; i < pacientes.length; i++){
            // console.log('funcionou')
            var paciente = pacientes[i]
            paciente.classList.remove('invisivel')
        }
    }
})