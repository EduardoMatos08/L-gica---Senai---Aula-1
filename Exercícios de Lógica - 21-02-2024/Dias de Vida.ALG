Algoritmo "Dias de Vida"
// Data atual  : 21/02/2024
Var
// Seção de Declarações das variáveis 
an, mn, dn, r: inteiro
apd, mpd: inteiro

Inicio

escreva("Quantos Anos Você têm: ")
leia(an)
escreva("Digite seu Mês de Nascimento: ")
leia(mn)
escreva("Digite seu Dia de Nascimento: ")
leia(dn)

apd <- an * 365
mpd <- mn * 30

r <- apd + mpd + dn

escreval()
escreval("Você tem", r, " dias.")

Fimalgoritmo