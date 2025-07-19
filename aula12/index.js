let umaString2 = "Um texto";
console.log(umaString2); //  Printar o indice 2 = 'm'
console.log(umaString2.charAt(2)); // Printar o indice 2 = 'm'

console.log(umaString2.concat(" em um lindo dia")); // Concatenar a string com outra string
console.log(umaString2 + " em um lindo dia"); // Outra forma de concatenar strings


console.log(umaString2.indexOf("texto")); // Retorna o índice onde a substring começa
console.log(umaString2.indexOf("z")); // Retorna -1 se a substring

console.log(umaString2.lastIndexOf("m")); // Conta a string de trás para frente


console.log(umaString2.length); // Retorna o tamanho da string

let umaString3 = umaString2.slice(3, 8); // atribuir uma substring a uma variável. 
console.log(umaString3); // Imprime 'texto'


console.log(umaString2.split(' ')); // Divide a string em um array de substrings.

console.log(umaString2.toUpperCase()); // Converte a string para maiúsculas
console.log(umaString2.toLowerCase()); // Converte a string para minúsculas
