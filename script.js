// 1. Recebe a quantidade de termos do usuário
const n = +prompt("Digite a quantidade de números da Sequência de Fibonacci que deseja exibir:");

// 2. Validação da entrada
if (isNaN(n) || n <= 0 || !Number.isInteger(n)) {
  alert("Por favor, digite um número inteiro positivo válido.");
} else {
  let fibonacci = [];

  // 3. Geração da sequência
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacci.push(0); // O primeiro termo é sempre 0
    } else if (i === 1) {
      fibonacci.push(1); // O segundo termo é sempre 1
    } else {
      // Cada termo subsequente é a soma dos dois anteriores
      let proximoTermo = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(proximoTermo);
    }
  }

  // 4. Exibe o resultado formatado
  alert(`Os primeiros ${n} números da Sequência de Fibonacci são:\n\n` + fibonacci.join(", "));
}
