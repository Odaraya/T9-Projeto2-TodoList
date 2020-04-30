const lista = document.querySelector('#todoLista')
const inputText = document.querySelector('#todoInput')
const inputSubmit = document.querySelector('#todoSubmit')
const btnMarcar = document.querySelector('#todoMarcarTodos')
const btnRemover = document.querySelector('#todoRemoverTodos')


//- Adicionar itens na lista
inputSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    //o span cria um grupo q contêm a li com os itens e o botão do lado com 'x'.
    let boxLista = document.createElement('span')
    let itemLista = document.createElement('li')
    let btnLista = document.createElement('button')
    btnLista.innerText = 'X'
    itemLista.innerText = inputText.value
    // //para tornalo seguravel
    // itemLista.setAttribute('draggable', true)
    // itemLista.addEventListener('dragstart', handleDragStart, false)
    // itemLista.addEventListener('dragenter', handleDragenter, false)
    // itemLista.addEventListener('dragover', handleDragover, false)
    // itemLista.addEventListener('dragleave', handleDragleave, false)
    // itemLista.addEventListener('drop', handleDrop, false)
    // itemLista.addEventListener('dragend', handleDragEnd, false)
    // - Validar campo de texto para não entrar itens vazios
    if (inputText.value.trim() == "") {
        alert("Tem que pôr uma tarefa pra funcionar o bagulho, bem");
        return false;
    }// limpar campos de texto depois de adicionados.
    if (inputText.value > "") {
        inputText.value = ""
    }
    //sytlo do span
    boxLista.style.display = 'flex'
    boxLista.style.justifyContent = 'space-between'
    //adiciona no span os itensLista e o botão com o 'x'. E o Span a campo lista.
    boxLista.appendChild(itemLista)
    boxLista.appendChild(btnLista)
    lista.appendChild(boxLista)
    //- Excluir itens individualmente
    btnLista.addEventListener('click', () => {
        lista.removeChild(boxLista)
    })
    //botoes de baixo. - Excluir todos os itens da lista.
    btnRemover.addEventListener('click', function () {
        lista.removeChild(boxLista)
    })
    //- Marcar todos os itens como feito.
    btnMarcar.addEventListener('click', function () {
        itemLista.classList.toggle('checked')
    })
    //- Marcar itens concluídos individualmente. Chamando a class do stylo.css.
    itemLista.addEventListener('click', () => {
        // 
        itemLista.classList.toggle('checked')
    })
    //- Reorganizar a ordem "arrastando" os cards utilizando drag and drop
    
    // let dragSrcEl = null
    // function handleDragStart(e){
    //     this.style.opacity = '0.4'

    //     dragSrcEl = this

    // }

})