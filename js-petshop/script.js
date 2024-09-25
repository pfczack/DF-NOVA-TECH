//Função para salvar o produto no localStorage
function saveProduct(product, storageType){
    let products = JSON.parse(localStorage.getItem(storageType)) || [];
    products.push(product);
    localStorage.setItem(storageType, JSON.stringify(products));
}

// Função para lidar com a submissão do formulário
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    const productDate = document.getElementById('productDate').value;
    const productType = document.getElementById('productType').value;

    const storageType ='products';

    const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
        date: productDate
    };

    saveProduct(product, storageType);
    alert(`Produto ${productName} adicionado em ${storageType}.`);

    document.getElementById('productForm').reset();
});

//Simulando uma requisição a uma API externa
function fetchAnimals() {
    return new Promise ((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users') //API fictícia
            .then(response => {
                if (!response.ok){
                throw new Error ('Erro ao buscar os dados');
            }
                return response.json();
        })
        .then (data => resolve(data))
        .catch(error => reject(error));
    });
}

//Função para exibir dados da API de "animais atendidos"
document.getElementById('fetchAnimals').addEventListener('click', () => {
    fetchAnimals()
    .then(animals => {
        const animalList = document.getElementById('animaList');
        animalList.innerHTML = '';

        animals.forEach(animal => {
            const li = document.createElement('li');
            li.textContent = `${animal.name} - ${animal.email}`;
            animalList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });



});