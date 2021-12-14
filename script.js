

let textoDaTarefa = document.getElementById('texto-tarefa');
let botãoDaTarefa = document.getElementById('criar-tarefa');
let listaDeTarefas = document.getElementById('lista-tarefas');

function addTarefa () {
    let criarElemento = document.createElement('li');
    criarElemento.innerText = textoDaTarefa.value;
    listaDeTarefas.appendChild(criarElemento);
    textoDaTarefa.value = '';
}
botãoDaTarefa.addEventListener('click', addTarefa);
