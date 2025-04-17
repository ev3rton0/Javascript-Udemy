/*Regras CONST:
 * Não pode criar constantes com palavras reservadas 
 * Criar constantes com nomes significativos
 * CammelCase
 * Não pode conter espaços ou traços
 * Case-sensitive (diferencia maiúsculas de minúsculas)
 * Não utilize VAR utilzie LET
*/

const idadeCliente = 25;
const valorBanco = 1000;

const conta = idadeCliente * valorBanco;
console.log(conta); // imprimir variável no console que foi definida

console.log(typeof idadeCliente + conta); // typeof imprime o tipo da variável no console


