//Ovtém os alunos do localStorage
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

//Referência ao corpo da tabela
const alunosTableBody = document.getElementById('alunosTable').getElementsByTagName('tbody')[0];

//Limpa a tabela antes de preenchê-la (caso haja múltipls carregamentos)
alunosTableBody.innerHTML = '';

//Preenche a tabela com os dados dos alunos
alunos.forEach(aluno => {
    const row = alunosTableBody.insertRow();

    row.insertCell(0).textContent = aluno.nome;
    row.insertCell(1).textContent = aluno.idade;
    row.insertCell(2).textContent = aluno.curso;
    row.insertCell(3).textContent = aluno.emails;
});