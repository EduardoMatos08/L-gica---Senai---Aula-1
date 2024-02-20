Algoritmo "Operações Fundamentais - Teste de Mesa"

Var
// Declaração de Variáveis
a, b, som, sub, mult, divis: real

Inicio

// Usuário Define os Valores
escreva("Digite o primeiro número: ")
leia(a)
escreva("Digite o segundo número: ")
leia(b)

// Realização das Operações
som <- a + b
sub <- a - b
mult <- a * b
divis <- a / b

// Retorno das Operações e Resultados para o Usuário
escreval()
escreval("Soma: ", a, " +", b, " =", som)
escreval("Subtração: ", a, " -", b, " =", sub)
escreval("Multiplicação: ", a, " .", b, " =", mult)
escreval("Divisão: ", a, " :", b, " =", divis)

Fimalgoritmo