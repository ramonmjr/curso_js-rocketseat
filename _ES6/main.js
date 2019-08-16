// AULA 4 - CLASSES

// class TodoList {
//   constructor() {
//     this.todos = [];
//   }

//   addTodo() {
//     this.todos.push("Novo Todo");
//     console.log(this.todos);
//   }
// }

// const MinhaLista = new TodoList();

// document.getElementById("add").onclick = function() {
//   MinhaLista.addTodo();
// };

// AULA 5 - ARRAY

// const arr = [, 1, 3, 4, 5, 8, 9];
// const newArr = arr.map(function(item, index) {
//   return item + index;
// });

// console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//   return total + next;
// });

// console.log(sum);

// const filter = arr.filter(function(item) {
//   return item % 2 === 0;
// });

// console.log(filter);

// const find = arr.find(function(item) {
//   return item === 4;
// });

// console.log(find);

// AULA 6 - ARROW FUNCTION

// const arr = [, 1, 3, 4, 5, 8, 9];

// const newArr = arr.map(item => item * 2);

// console.log(newArr);

// const find = arr.find(item => item == 3);

// console.log(find);

// // AULA 7 - VALORES PADRÃO

// const soma = (a = 3, b = 6) => a + b;

// console.log(soma(1));
// console.log(soma());

// AULA 8 - DESESTRUTURAÇÃO

// const usuario = {
//   nome: "Diego",
//   idade: 23,
//   endereco: {
//     cidade: "Rio do Sul",
//     estado: "SC"
//   }
// };

// const {
//   nome,
//   idade,
//   endereco: { cidade }
// } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);

// function mostraNome({ nome, idade }) {
//   console.log(nome);
//   console.log(idade);
// }

// mostraNome(usuario);

// AULA 9 - DESCANSO DOS OPERADORES / SPREAD

// ------------- REST

// const usuario = {
//   nome: "Diego",
//   idade: 23,
//   empresa: "Rocketseat"
// };

// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// const arr = [1, 2, 3, 4];

// const [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);

// function soma(...params) {
//   return params.reduce((total, next) => total + next);
// }

// console.log(soma(1, 2, 3));

// ---------------- SPREAD

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const usuario1 = {
//   nome: "Diego",
//   idade: 23,
//   empresa: "Rocketseat"
// };

// const usuario2 = {
//   ...usuario1,
//   nome: "Gabriel"
// };

// console.log(usuario2);

// AULA 10 - LITERAIS E MODELOS

// const nome = "Diego";
// const idade = 23;

// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

// AULA 11 - SINTAXE CURTA DE OBJETOS

// const nome = "Diego";
// const idade = 23;
// const usuario = {
//   nome,
//   idade,
//   empresa: "Rocketseat"
// };

// console.log(usuario);

// ---------------- DESAFIOS
// -- 1
// class Usuario {
//   constructor(email, senha) {
//     this.email = email;
//     this.senha = senha;
//   }
//   isAdmin() {
//     return this.admin || false;
//   }
// }

// class Admin extends Usuario {
//   constructor(email, senha) {
//     super(email, senha);
//     this.admin = true;
//   }
// }

// const usuario = new Admin("macedo@hotmail.com", "181190");
// const usuario2 = new Usuario("joao@hotmail.com", "181190");
// console.log(usuario.isAdmin());
// console.log(usuario2.isAdmin());

// --- 2

// const usuarios = [
//   {
//     nome: "Diego",
//     idade: 23,
//     empresa: "Rocketseat"
//   },
//   {
//     nome: "Gabriel",
//     idade: 15,
//     empresa: "Rocketseat"
//   },
//   {
//     nome: "Lucas",
//     idade: 30,
//     empresa: "Facebook"
//   }
// ];

// const arrIdade = usuarios.map(item => item.idade);

// console.log(arrIdade);

// const arrFilter = usuarios.filter(item => {
//   return item.empresa == "Rocketseat" && item.idade >= 18;
// });

// console.log(arrFilter);

// const arrFind = usuarios.find(item => {
//   return item.empresa == "Google";
// });

// console.log(arrFind);

// usuarios.map(item => {
//   item.idade = item.idade * 2;
// });

// const arrFindIdade = usuarios.filter(item => {
//   return item.idade >= 50;
// });

// console.log(arrFindIdade);

// ----- 3

// 3.1
// const arr = [1, 2, 3, 4, 5];

// DE

// arr.map(function(item) {
//   return item + 10;
// });
// // PARA
// const teste = arr.map(item => {
//   return item + 10;
// });

// 3.2
// Dica: Utilize uma constante pra function
// DE
// const usuario = { nome: "Diego", idade: 23 };

// function mostraIdade(usuario) {
//   return usuario.idade;
// }

// mostraIdade(usuario);
// PARA
// const mostrarIdade = usuario => {
//   return usuario.idade;
// };
// console.log(mostrarIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function

//DE
// const nome = "Diego";
// const idade = 23;
// // function mostraUsuario(nome = "Diego", idade = 18) {
// //   return { nome, idade };
// // }

// //PARA
// const mostraUsuario = (nome = "", idade = "") => ({
//   nome,
//   idade
// });

// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

// // 3.4
// //DE
// const promise = function() {
//   return new Promise(function(resolve, reject) {
//     return resolve();
//   });
// };

// //PARA
// const promise = () => {
//   return new Promise((resolve, reject) => resolve());
// };

// -------- 4
// 4.1
// const empresa = {
//   nome: "Rocketseat",
//   endereco: {
//     cidade: "Rio do Sul",
//     estado: "SC"
//   }
// };

// const {
//   nome,
//   endereco: { cidade },
//   endereco: { estado }
// } = empresa;

// console.log(nome);
// console.log(cidade);
// console.log(estado);

// //4.2

// function mostraInfo({ nome, idade }) {
//   return `${nome} tem ${idade} anos.`;
// }

// console.log(mostraInfo({ nome: "Diego", idade: 23 }));

//----------- 5

//5.1
// const arr = [1, 2, 3, 4, 5, 6];

// const [a, ...c] = arr;
// console.log(a);
// console.log(c);

//5.2
// const usuario = {
//   nome: "Diego",
//   idade: 23,
//   endereco: {
//     cidade: "Rio do Sul",
//     uf: "SC",
//     pais: "Brasil"
//   }
// };

// const usuario2 = {
//   ...usuario,
//   nome: "Gabriel"
// };

// console.log(usuario2);

//------------ 6
// const usuario = "Diego";
// const idade = 23;

// const text = `O usuário ${usuario} possui ${idade} anos`;
// console.log(text);

//------------- 7
const nome = "Diego";
const idade = 23;

const usuario = {
  nome,
  idade,
  cidade: "Rio do Sul"
};

console.log(usuario);
