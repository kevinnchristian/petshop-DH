const nomeSistema = "Petshop Kevinho";
const body = document.querySelector("body");
const divTela = document.querySelector("#tela");
const mostrarLista = document.getElementById("listar");
const tituloSistema = document.getElementById("tituloSistema");
const buttonIniciar = document.getElementById("buttonIniciar");
const buttonCadastrar = document.getElementById("buttonCadastrar");
const buttonListar = document.getElementById("buttonListar");

// Está variável é para termos um array com objeto do pet para cadastrar.
let listaPets = [
  {
    nome: "Diana",
    idade: 2,
    raca: "Pitbull",
    dono: "Kevin",
    sexo: "Fêmea",
    peso: 35,
    vacinado: true,
    servicos: ["Banho"]
  },
  {
    nome: "Koti",
    idade: 5,
    raca: "Labrador",
    dono: "Flavia",
    sexo: "Macho",
    peso: 35,
    vacinado: false,
    servicos: ["Banho"]
  },
  {
    nome: "Jerry",
    idade: 6,
    raca: "Himalaia",
    dono: "Jhony",
    sexo: "Macho",
    peso: 10,
    vacinado: true,
    servicos: ["Banho"]
  }
]

// função para iniciar o sistema
const iniciarSistema = () => {
  tituloSistema.innerText = nomeSistema;
  tituloSistema.style.color = "#fff";
  tituloSistema.style.fontSize = "1.4em";
};

// função para cadastrar pet
const cadastrarPet = () => {
  let cadastroPets = {
    // dados vem através do prompt;
    nome: prompt("Informe o nome do pet:"),
    idade: prompt("Informe a idade do pet:"),
    raca: prompt("Informe a raça do pet:"),
    dono: prompt("Informe seu nome:"),
    sexo: prompt("Informe o sexo do pet:"),
    peso: prompt("Informe o peso do pet:"),
    vacinado: prompt("Vacinação está em dia? (S)Sim ou (N)Não"),
    servicos: prompt("Informe o serviços para o pet:") 
  }
  listaPets.push(cadastroPets);
}

// função para vizualizar pets do sistema
const vizualizarPets = () => {
  divTela.style.cssText = `display: flex; flex-direction: column;
                           justify-content: center`;
  mostrarLista.classList.add('lista');
  mostrarLista.innerHTML = "<h2>Pets Cadastros no Sistema:</h2>"
  for (let i = 0; i < listaPets.length; i++) {
    mostrarLista.innerHTML += `
    <ul>
      <li class="nomePet"><span id="tituloLista">Nome do pet: </span>${listaPets[i].nome}</li>
      <li><span id="tituloLista">Raça do pet: </span>${listaPets[i].raca}</li>
      <li><span id="tituloLista">Dono do pet: </span>${listaPets[i].dono}</li>
      <li><span id="tituloLista">Vacina: </span>${listaPets[i].vacinado ? "O pet já está vacinado!" : "O pet precisa tomar vacina!"}</li>
    </ul>
    `
  }
}

function nomePet() {
  const listaNome = document.querySelectorAll(".nomePet");
  listaNome.forEach((item) => {
    item.onmouseover = () => {
      item.style.cssText = "font-size: 1.4em; color: #0486ad"
    };

    item.onmouseout = () => {
      item.style.cssText = "font-size: 1em; color: #434b53"
    };
  })
};

// botão para executar a função do sistema
buttonIniciar.addEventListener("click", function () {
  iniciarSistema();
});

// botão para executar a função de cadastrar
buttonCadastrar.addEventListener("click", function () {
  cadastrarPet();
});

// botão para executar a função de listar
buttonListar.addEventListener("click", function () {
  vizualizarPets();
  nomePet();
});










