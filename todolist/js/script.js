// // Seleciona os elementos do DOM que serão usados
// const inputTarefa = document.getElementById('nova-tarefa');
// const btnAdicionar = document.getElementById('adicionar-tarefa');
// const listaTarefas = document.getElementById('lista-tarefas')
// //Criamos 3 variaveis para o documento

// //Função para adicionar uma nova tarefa
// btnAdicionar.addEventListener('click', function () {
//     //Obtém o valor digitado no campo de entrada
//     const tarefaTexto = inputTarefa.value;

//     // Verifica se o campo de entrada está vazio
//     if(tarefaTexto === ''){
//         alert('Digite uma tarefa antes de adicionar!');
//         return; // Sai da função se o campo estiver vazio
//     }

//     //Cria um novo item de lista (li) para a tarefa
//     const novaTarefa = document.createElement('li');
//     novaTarefa.innerText = tarefaTexto;

//     // Cria o botão de remover tarefa e o anexa 
//     const btnRemover = document.createElement('button');
//     btnRemover.innerText = 'Remover';
//     btnRemover.classList.add('remover-tarefa'); // Aplica classe CSS ao botão

//     // Função para remover a tarefa quando o botão for clicado
//     btnRemover.addEventListener('click', function(){
//         listaTarefas.removeChild(novaTarefa);
//     });

//     // Adicionar o botão de remover à tarefa
//     novaTarefa.appendChild(btnRemover);

//     // Adiciona a nova tarefa à lista de tarefas
//     listaTarefas.appendChild(novaTarefa);

//     // Limpa o campo de entrada após adicionar a tarefa
//     inputTarefa.value = '';

// });

// // Adiciona interatividade ao pressionar Enter para adicionar tarefas
// inputTarefa.addEventListener('keypress', function(e){
//     if(e.key === 'Enter'){
//         btnAdicionar.click(); // Simula o clique no botão de adicionar tarefa
//     }
// });

// // função para abrir modal

// Referências ao DOM (Document Object Model) - Pegamos elementos da página HTML para manipular
const modal = document.getElementById('modal'); 
// O modal que aparece para adicionar tarefas
const btnAbrirModal = document.getElementById('abrir-modal'); 
// Botão que abre o modal
const btnFecharModal = document.querySelector('.close'); 
// Botão de fechar o modal (o "X")
const inputTarefa = document.getElementById('nova-tarefa'); 
// Campo de input para digitar o nome da nova tarefa
const btnAdicionarTarefa = document.getElementById('adicionar-tarefa'); 
// Botão para adicionar a tarefa

// Listas de tarefas para cada fase: pendente, andamento, progresso e concluída
const listaPendentes = document.getElementById('tarefas-pendentes');
const listaAndamento = document.getElementById('tarefas-andamento');
const listaProgresso = document.getElementById('tarefas-progresso');
const listaConcluidas = document.getElementById('tarefas-concluidas');

// Abre o modal quando o botão "Nova Tarefa" é clicado
btnAbrirModal.addEventListener('click', function () {
  modal.style.display = 'flex'; // O modal se torna visível
});

// Fecha o modal quando o botão "X" (fechar) é clicado
btnFecharModal.addEventListener('click', function () {
  modal.style.display = 'none'; // O modal é escondido
});

// Adiciona uma tarefa à lista de "Pendentes" quando o botão "Adicionar" é clicado
btnAdicionarTarefa.addEventListener('click', function () {
  const tarefaTexto = inputTarefa.value; // Pega o valor digitado no input (nome da tarefa)

  if (tarefaTexto === '') {
    // Verifica se o campo está vazio
    alert('Digite uma tarefa!'); // Mostra um alerta caso o campo esteja vazio
    return; // Interrompe a função se o campo estiver vazio
  }

  adicionarTarefa(listaPendentes, tarefaTexto); // Chama a função para adicionar a tarefa à lista de pendentes
  inputTarefa.value = ''; // Limpa o campo de input após adicionar a tarefa
  modal.style.display = 'none'; // Fecha o modal após adicionar a tarefa
});

// Função que adiciona uma tarefa à lista especificada (neste caso, pendentes)
function adicionarTarefa(lista, texto) {
  const novaTarefa = document.createElement('li'); // Cria um novo elemento <li> (um item de lista)
  novaTarefa.innerText = texto; // Define o texto do item como o valor digitado no input

// Cria um botão para mover a tarefa entre as colunas
const btnMover = document.createElement('button');
btnMover.classList.add('mover-tarefa'); // Adiciona uma classe CSS para estilizar o botão
btnMover.innerText = 'Mover'; // O texto do botão será "Mover" 

btnMover.addEventListener('click', function(){
moverTarefa(novaTarefa);
});

novaTarefa.appendChild(btnMover);

lista.appendChild(novaTarefa);

}

function moverTarefa(tarefa){
    if(tarefa.parentElement === listaPendentes){
        listaAndamento.appendChild(tarefa);
    } else if (tarefa.parentElement === listaAndamento) {
        listaProgresso.appendChild(tarefa);
    } else if (tarefa.parentElement === listaProgresso) {
        listaConcluidas.appendChild(tarefa);
        tarefa.removeChild(tarefa.querySelector('button'));
    }
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}