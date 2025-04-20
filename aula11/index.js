let varA = 'A'; // string
let varB = 'B'; // string
let varC = 'C';// undefined

console.log(varA, varB, varC); // A B undefined

/* 1° FORMA 
const auxA = varA; // A = A
varA = varB; // A = B
varB = varC; // B = C
varC = auxA; // C = A*/

[varA, varB, varC] = [varB, varC, varA]; // 2° FORMA (DESESTRUTURAÇÃO)

console.log(varA, varB, varC); // B C A 