// 
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
//   console.log(mensagem)
// }

// let idade = Number(prompt("quantos anos vc tem?"))

// idade >= 18?
// console.log("vc pode digitar"):
// console.log("vc nao pode digitar");

// turno = prompt("em que turno do dia vc estuda?digite m para matutino, v para vespertino e n para noturno").toLowerCase;

// if(turno === "m"){
//   console.log("bom dia!");
// }else if(turno === "v") {
//   console.log("boa tarde!");
// }else if(turno === "n"){
//   console.log("boa noite!");
// }else{
//   console.log("houve um erro de digitaçao.");
// }

// switch (turno){
//   case "m":
//     console.log("bom dia!");
//     break;
//     case "v":
//       console.log("boa tarde!");
//       break
//       case "n":
//         console.log("boa noite");
//         default:
//           console.log("houve um erro de digitaçao.");
//           break;
// }
let genero = prompt("a que genero de filme voce assistiria?").toLowerCase()
let precoingresso = prompt("quanto o igresso custa?")
if(genero == "fantasia" && precoingresso < 15){
  console.log("bom filme!");
}else{
  console.log("escolha outro filme:(");
}