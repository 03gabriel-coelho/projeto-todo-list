

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
        if(ElementoDaLista[index].classList.value === 'ElementoDaLista') {
            ElementoDaLista[index].style.backgroundColor = 'white';
    }
}
    for(index = 0; index < ElementoDaLista.length; index += 1){
       if(event.target === ElementoDaLista[index]){
          event.target.style.backgroundColor = 'rgb(128, 128, 128)';
       }
    }
}
listaDeTarefas.addEventListener('click', AddCinza);


function doubleClick (event) {
    for(index = 0; index < ElementoDaLista.length; index += 1){
        if(ElementoDaLista[index].style.backgroundColor === 'rgb(128, 128, 128)' && ElementoDaLista[index].classList.value === 'ElementoDaLista'){
            ElementoDaLista[index].classList.add('completed');
        }
        else if(event.target === ElementoDaLista[index] && event.target.classList.value === 'ElementoDaLista completed'){
            event.target.classList.remove('completed');
         }
    }
}
listaDeTarefas.addEventListener('dblclick', doubleClick);

let apagar = document.getElementById('apaga-tudo');

function apagarItem () {
    for(index = 0; index < ElementoDaLista.length; index += 1){
        listaDeTarefas.removeChild(ElementoDaLista[index]);
    }
    for(index = 0; index < ElementoDaLista.length; index += 1){
        listaDeTarefas.removeChild(ElementoDaLista[index]);
    }
    for(index = 0; index < ElementoDaLista.length; index += 1){
        listaDeTarefas.removeChild(ElementoDaLista[index]);
    }
    for(index = 0; index < ElementoDaLista.length; index += 1){
        listaDeTarefas.removeChild(ElementoDaLista[index]);
    }
    for(index = 0; index < ElementoDaLista.length; index += 1){
        listaDeTarefas.removeChild(ElementoDaLista[index]);
    }
}

apagar.addEventListener('click', apagarItem);

let removerFinal = document.getElementById('remover-finalizados');

function removerFinalizados () {
    for(index = 0; index < ElementoDaLista.length; index += 1){
        if(ElementoDaLista[index].classList.value === 'ElementoDaLista completed'){
            listaDeTarefas.removeChild(ElementoDaLista[index]);
        }
    }
    for(index = 0; index < ElementoDaLista.length; index += 1){
        if(ElementoDaLista[index].classList.value === 'ElementoDaLista completed'){
            listaDeTarefas.removeChild(ElementoDaLista[index]);
        }
    }
    for(index = 0; index < ElementoDaLista.length; index += 1){
        if(ElementoDaLista[index].classList.value === 'ElementoDaLista completed'){
            listaDeTarefas.removeChild(ElementoDaLista[index]);
        }
    }
    for(index = 0; index < ElementoDaLista.length; index += 1){
        if(ElementoDaLista[index].classList.value === 'ElementoDaLista completed'){
            listaDeTarefas.removeChild(ElementoDaLista[index]);
        }
    }
    for(index = 0; index < ElementoDaLista.length; index += 1){
        if(ElementoDaLista[index].classList.value === 'ElementoDaLista completed'){
            listaDeTarefas.removeChild(ElementoDaLista[index]);
        }
    }
}
removerFinal.addEventListener('click', removerFinalizados);

function salvarTarefas(){
let listaa = document.querySelectorAll('.ElementoDaLista');

let ex = [];

for(let index = 0; index < listaa.length; index += 1){
    ex.push(listaa[index].innerHTML);
}
console.log(listaa);

localStorage.setItem('list', JSON.stringify(ex));

let back = [];

for(let i = 0; i < listaa.length; i += 1){
    if(listaa[i].className === 'ElementoDaLista completed'){
        back.push('1');
    }
    else {
        back.push('0');
    }
}

localStorage.setItem('selected', JSON.stringify(back));
}

let salvar = document.getElementById('salvar-tarefas');
salvar.addEventListener('click', salvarTarefas);


function IniciarTarefas(){
    if(localStorage.getItem('list') === null){
        localStorage.setItem('list', JSON.stringify([]));
    }
    else {
        const list = JSON.parse(localStorage.getItem('list'));
        const selected = JSON.parse(localStorage.getItem('selected'));

        for(let index = 0; index < list.length; index += 1){
            let criarList = document.createElement('li');
            criarList.innerHTML = list[index];

            if(selected[index] === '1'){
                criarList.className = 'ElementoDaLista completed';
            }
            else {
                criarList.className = 'ElementoDaLista';
            }
            
            listaDeTarefas.appendChild(criarList);
        }
    }
}
window.onload = function() {
    IniciarTarefas();
};

