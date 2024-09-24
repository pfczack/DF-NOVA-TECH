//Array de clientes (inicialmente vazio)
let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

//Função para cadastrar um novo aluno
document.getElementById('alunoForm').addEventListener('submit', function(event){
    event.preventDefault();//Evita o envio do formulario

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const curso = document.getElementById('curso').value;
    const emails = document.getElementById('emails').value;

    const novoAluno = {nome, idade, curso, emails};
    alunos.push(novoAluno);

    //Salva os alunos no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));

    //Redireciona para a página de lista
    //window.location.href = '../lista_alunos.html';
    window.open('./lista_alunos.html', '_blank');
});

/*function cadastrarCliente(nome, idade, email){
    let novoCliente = {
        nome: nome,
        idade: idade,
        email: email,
        exibirInformações: function(){
            return `Nome: ${this.nome}, Idade: ${this.idade}, Email: ${this.email}`;
        }
    };

//Adiciona o novo cliente ao array
clientes.push(novoCliente);
}

//Função para exibir todos os clientes cadastrados
function listarClientes() {
    clientes.forEach(function(cliente) {
        console.log(cliente.exibirInformacoes());
});

}*/

/*//Cadastrando alguns clientes
cadastrarCliente("Ana Silva", 25, "ana.silva@email.com");
cadastrarCliente("João Pereira", 30, "joao.pereira@email.com");
cadastrarCliente("Maria Oliveira", 22, "maria.oliveira@email.com");

//Listando todos os clientes cadastrados
listarClientes();*/
