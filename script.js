


~ // Aula de Lógica 1 // Eduardo Matos // ~



// Beber Água - Lógica //

const sede = 100
const garrafa = 100%
const copo = 0

const BeberAgua = () => {

	localizar a geladeira
	ir até a geladeira
	abrir a geladeira
	pegar a garrafa d'agua
	abrir a garrafa
	colocar a garrafa na mesa
	fechar geladeira
	pegar copo
	coloca-lo perto da garrafa
	pegar a garrafa
	
	if (copo == 0 && garrafa >= 50%) {
		colocar garrafa na beira do copo
		colocar água
		desvirar a garrafa
		fechar a garrafa
		encher a garrafa novamente
		abrir a geladeira
		colocar na geladeira
		fechar a geladeira
	} else {
		encher a garrafa
		colocar garrafa na beira do copo
		colocar água
	}
}

if (sede <= 50% ) {
	BeberAgua()
}

// Trocar Lâmpada - Lógica //

const lampadaQuebrada = true

const TrocarLampada = () => {

	ir até o armário das lâmpadas
	abrir o armário
	pegar lâmpada
	fechar armário
	ir até o armário da escada
	abrir armário
	pegar escada
	fechar armário
	ir até a lâmpada
	colocar a escada em baixo do lugar da lâmpada
	subir na escada
	desrosquear a lâmpada até ela sair
	colocar a lâmpada no buraco
	rosquear a lâmpada até fixar

}

if (lampadaQuebrada == true) {
	TrocarLampada()
} else {
	ficar no sofá
}

// Fazer Miojo - Lógica //

const fome = 100%
const pressa = 100%

const FazerMiojo = () => {

	ir até o armário de panelas
	abrir o armário
	pegar panela média
	fechar o armário
	encher panela com água potável
	colocar panela no fogão
	ligar fogão
	esperar até a água ferver
	abrir pacote de miojo
	colocar miojo na panela
	esperar 5 minutos
	colocar panela na mesa
	abrir armário de itens de cozinha
	pegar prato
	colocar na mesa
	pegar talheres
	colocar na mesa
	colocar miojo no prato
	pegar garfo
	colocar garfo no miojo
	levar até a boca
	abrir boca
	colocar dentro da boca
	fechar boca
	mastigar
	engolir

}

if (fome == 100% && pressa == 100%) {
	FazerMiojo()
}

// Soma de 5 números e divizão por 2 - Lógica //

const Operacao = () => {

	adicionar primeiro número
	const numero1 = 1

	adicionar primeiro sinal
	const sinal1 = "+"

	acicionar segundo número
	const numero2 = 2

	adicionar segundo sinal
	const sinal2 = "+"

	adicionar terceiro número
	const numero3 = 3

	adicionar terceiro sinal
	const sinal3 = "+"

	adicionar quarto número
	const numero4 = 4

	adicionar quarto sinal
	const sinal4 = "+"

	adicionar quinto número
	const numero5 = 5

	// Fazer Operação

	juntar elementos
	
	const operação1 = 1 + 2 + 3 + 4 + 5
	concluir operação
	const resultado1 = 15
	
	dividir por 2
	const operação2 = 15 / 2
	const resultado2 = 7.5
	
	retornar resultado
	return resultado2

}

mostrar resultado
console.log(Operacao())

// Multiplicação de Dois Números - Lógica //

const MultiplicacaoDeDoisNumeros = () => {

	adicionar primeiro número
	const numero1 = 2

	adicionar sinal de multiplicação
	const sinal = "x"

	adicionar segundo número
	const numero2 = 2

	realizar operação
	const operacao = 2 x 2

	concluir operação
	const resultado = 4

	retornar resultado
	return resultado

} 

mostrar resultado
console.log(MultiplicacaoDeDoisNumeros())
