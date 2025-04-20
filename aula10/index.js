/*alert('Com a nossa mensagem.');

//alert é um atalho para window.alert
//window é o objeto global do navegador

confirm('Você tem certeza?'); // Retorna true ou false 

prompt('Digite seu nome:'); // Retorna o valor digitado ou null se cancelar (do tipo string)

const confirmar = confirm('Salvar as alterações?'); // Retorna true ou false 

let num1 = prompt('Digite um número:'); 
num1 = parseFloat(num1); // Converte a string para número (float)*/


let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite outro número:");

num1 = parseFloat(num1); // Converte a string para número (float)
num2 = parseFloat(num2); // Converte a string para número (float)

const resultado = num1 + num2; // Soma os números

alert(`A soma é: ${resultado}`); // Exibe o resultado da soma