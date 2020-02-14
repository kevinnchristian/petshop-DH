let json = `[{"nome":"Bob","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho"]},{"nome":"Xuxu","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":false,"servicos":["Banho","Vacina"]},{"nome":"Xorão","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":false,"servicos":["Banho","Vacina"]}]`;


console.log(" ");
console.log("*****************************************");
const NOME_SISTEMA = "************-Petshop Kevinho-************";
console.log(NOME_SISTEMA);
console.log("*****************************************");

const lerPets = (umJSON) => {
  const pets = JSON.parse(umJSON);
  return pets;
}


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
  }
]


// arrow function que recebe por parâmetro dados do pet que serão cadastrados.
const cadastrarPet = (nome, idade, raca, dono, sexo, peso, vacinado, servicos) => {
  let cadastroPets = {
    // precisou passar apenas o nome do atributo pois os valores ja vem pelo parâmetros da função.
    nome,
    idade,
    raca,
    dono,
    sexo,
    peso,
    vacinado,
    servicos
  }
  listaPets.push(cadastroPets);
  console.log("-----------------------------------------");
  console.log(`O Pet: ${nome} foi adicionado ao sitema!`);
  console.log("-----------------------------------------");
}


// arrow function que da entrada dos pets recebidos em formato json.
const darEntradaPets = listaJson => {
  let petsRecebidos = listaJson;
  for (let i = 0; i < petsRecebidos.length; i++) {
    cadastrarPet(petsRecebidos[i].nome, petsRecebidos[i].idade, petsRecebidos[i].raca, petsRecebidos[i].dono, petsRecebidos[i].sexo, petsRecebidos[i].peso, petsRecebidos[i].vacinado, petsRecebidos[i].servicos);
  }
}
// Seria outra forma de tranformar json em array para javascript assim podendo usar o mesmo para dar entrada dos pets novos:    
// let petsRecebidos = JSON.parse(listaJson);
// listaPets = [...listaPets, ...petsRecebidos];

// Seria outra forma de tranformar json em array para javascript assim podendo usar o mesmo para dar entrada dos pets novos:
// for (let i = 0; i < petsRecebidos.length; i++) {
//   let pet = petsRecebidos[i];
//   cadastrarPet(pet.nome, pet.idade, pet.raca, pet.dono, pet.sexo, pet.peso, pet.vacinado, pet.servicos);
// }
// Forma diferente para fazer a mesma função darEntradaPets:
//const darEntradaPets = listaJson => listaPets = [...listaPets, ...(JSON.parse(listaJson))];


// arrow function que entrega em listas os pets cadastrados.
const vizualizarPets = () => {
  console.log("-----------------------------------------");
  console.log("###########-Pets-Cadastrados-############");
  for (let i = 0; i < listaPets.length; i++) {
    console.log("-----------------------------------------");
    console.log(`Nome do pet: ${listaPets[i].nome}`);
    console.log(`Raça do pet: ${listaPets[i].raca}`);
    console.log(`Dono do pet: ${listaPets[i].dono}`);
    console.log(listaPets[i].vacinado ? "O pet já está vacinado!" : "O pet precisa de vacina!");
  }
  console.log("-----------------------------------------");
}


// arrow function com a função de vacinar o pet se necessário e exibir mensagem se ele ja é, ou acabou de ser vacinado.  
function darVacina(pet) {
  console.log(" ");
  console.log("-----------------------------------------");
  console.log("@@@@@@@@@@@-Serviço de Vacina-@@@@@@@@@@@");
  console.log("-----------------------------------------");
  if (pet.vacinado) {
    console.log("O pet não precisa ser vacinado!");
  } else {
    pet.vacinado = true;
    console.log("O pet vacinado com sucesso!");
  }
  console.log("-----------------------------------------");
}

const quantidadeServicos = () => {
  let qtdTotal = 0;
  for(let i = 0; i < listaPets.length; i++) {
    qtdTotal += listaPets[i].servicos.length;
  }
  console.log(" ");
  console.log("------------------------------------------------------");
  console.log(`     Nossa petshop prestou ${qtdTotal} serviços no total!!!`);
  console.log("------------------------------------------------------");
}


// 1° Execução - Cadastra o pet passando a informações por parâmetro da função:
cadastrarPet("Thor", 12, "vira-lata", "Dani", "Macho", 7, false, ["Banho", "Vacina"]);

// 2° Execução - Cadastra os pets recebidos por arquivo JSON e verifica a situação da vacinação do pet:
darEntradaPets(lerPets(json));

// 3° Execução - Gera a lista dos pets cadastrados no sistema:
vizualizarPets(listaPets);

// 4° Execução - Serviço de Vacinação:
darVacina(listaPets);

// 5° Execução - Informa o total de serviços prestados:
quantidadeServicos();



