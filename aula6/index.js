const nome = 'Everton'; // criar variável usando const
const sobrenome = 'Lohan';
const idade = 20;
const peso = 65;
const alturaEmM = 1.75;

let imc;
imc = peso / (alturaEmM * alturaEmM); // calcular IMC

let anoNascimento = 2024 - idade; // calcular ano de nascimento

//templates strings 
// `${}` - Interpolação de variáveis dentro de strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc, 'kg/m²'); 
console.log(nome + ' nasceu em ' + anoNascimento);