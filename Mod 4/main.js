// AULAS
//AULA 1

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.github.com/users/diego3g");
// xhr.send(null);

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.response));
//   }
// };

//  ------------------------------------------ //

//AULA 2

// var minhaPromise = function() {
//   return new Promise(function(resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://api.github.com/users/diego3g");
//     xhr.send(null);

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(JSON.parse(xhr.response));
//         } else {
//           reject("Erro na requisição!");
//         }
//       }
//     };
//   });
// };

// minhaPromise()
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.warn(error);
//   });

// ------------------------------------------- //

// AULA 3

// axios
//   .get("https://api.github.com/users/diego3g")
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.warn(error);
//   });

//DESAFIOS

//1
// var idade = 15;

// function checaIdade(idade) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       if (idade > 18) {
//         resolve("De maior");
//       } else {
//         reject("De menor");
//       }
//     }, 2000);
//   });
// }

// checaIdade(idade)
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// 2 e 3
var inputElement = document.querySelector("#app input");
var ButtonElement = document.querySelector("#app button");
var listaElement = document.querySelector("#app ul");

ButtonElement.onclick = function() {
  buscarPerfilGit();
};
function buscarPerfilGit() {
  if (inputElement.value == "") {
    alert("Por favor, digite alguma informação no campo de busca");
  } else {
    listaElement.innerHTML = "";
    var liElement = document.createElement("li");
    var liElementText = document.createTextNode("carregando...");
    liElement.appendChild(liElementText);
    listaElement.appendChild(liElement);
    axios
      .get("https://api.github.com/users/" + inputElement.value + "/repos")
      .then(function(response) {
        listaElement.innerHTML = "";
        for (const repo of response.data) {
          var liElement = document.createElement("li");
          var liElementText = document.createTextNode(repo.description);
          liElement.appendChild(liElementText);
          listaElement.appendChild(liElement);
        }
      })
      .catch(function(error) {
        alert("Usuário não encontrado!");
      });
  }
}
