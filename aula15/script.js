const numero = Number(prompt("Digite um número: "));
const numberTitle = document.getElementById('number-title');
const text = document.getElementById('texto');

numberTitle.innerHTML = `${numero}`;

text.innerHTML = " ";
text.innerHTML += `<p> A raiz quadrada de ${numero} é:  ${numero ** (1/2)}</p>`;
text.innerHTML += `<p> ${numero} é inteiro? ${Number.isInteger(numero)}</p>`;
text.innerHTML += `<p> ${numero} é NaN? ${Number.isNaN(numero)}</p>`;
text.innerHTML += `<p> Arredondando para cima ${Math.ceil(numero)}</p>`;
text.innerHTML += `<p> Arredondando para baixo ${Math.floor(numero)}</p>`;
text.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`;