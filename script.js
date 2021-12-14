

let textoDaTarefa = document.getElementById('texto-tarefa');
let botãoDaTarefa = document.getElementById('criar-tarefa');
let listaDeTarefas = document.getElementById('lista-tarefas');
let ElementoDaLista = document.getElementsByClassName('ElementoDaLista');

function addTarefa () {
    let criarElemento = document.createElement('li');
    criarElemento.innerText = textoDaTarefa.value;
    criarElemento.className = 'ElementoDaLista';
    listaDeTarefas.appendChild(criarElemento);
    textoDaTarefa.value = '';
}
botãoDaTarefa.addEventListener('click', addTarefa);

function AddCinza (event) {
    for(index = 0; index < ElementoDaLista.length; index += 1){
       if(event.target === ElementoDaLista[index]){
          event.target.style.backgroundColor = 'rgb(128, 128, 128)';
       }
    }
}
listaDeTarefas.addEventListener('click', AddCinza);
console.log(ElementoDaLista);