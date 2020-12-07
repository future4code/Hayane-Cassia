const botao = document.querySelector('[data-button]') //pega botão 'Criar tarefa'

const criaTarefa = () => {
    const input = document.querySelector('[data-form-input]') //pega o input
    const text = input.value //pega o valor do input

    const select = document.getElementById('dias-semana')//pego opção selecionada
    const optionSelect = select.value //pega valor da opção selecionada

    if(text !== ''){ //testa se valor digitado no input é diferente de nada
        const tarefa = document.getElementById(optionSelect) //recebe como id o valor de optionSelect
        tarefa.innerHTML += `<li>${text}</li>` //insere o html na opção selecionada

        tarefa.addEventListener ('click', rabiscado) //escuta o elemento para saber se foi clicado e chama 
        //a função rabiscado

        clearInput()
    }else { 
        alert('Insira uma nova tarefa') //cria um alerta
    }

    const botaoDeletar = document.querySelector('[data-button-delete]') //

    botaoDeletar.addEventListener('click', () => {
        const elemento = document.getElementById(optionSelect)
        const filho = elemento.firstElementChild
        filho.remove()
    })
}

function clearInput (){ //limpar input
    const input = document.querySelector('[data-form-input]') //pega o input
    input.value = '' //atribui nada ao input
}

function rabiscado (evento) { //recebe o evento de tarefa como parametro
    const concluido = evento.target //seleciona o elemento a que foi clicado
    concluido.classList.toggle('done') //pega a class do CSS a ser aplicada
}

botao.addEventListener('click', criaTarefa)