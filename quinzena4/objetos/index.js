const Form = {
    titulo: '',
    autor: '',
    conteudo: '',
}

const array = []

function salvaForm () {
    Form.titulo = document.getElementById('titulo-post').value
    Form.autor = document.getElementById('autor-post').value
    Form.conteudo = document.getElementById('conteudo-post').value
    
    array.push(Form)
    imprime()
}

function imprime () {
    const section = document.getElementById('container-de-posts')
    section.innerHTML = `<p>${array[0].titulo+' '+array[0].autor+' '+array[0].conteudo}</p>`
}

const criarPost = document.querySelector('[data-button]')
criarPost.addEventListener('click', salvaForm)

