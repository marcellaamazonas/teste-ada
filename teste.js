/*Questão 1 - Desafio Conversor de Horários*/
const horario = '06:15:25PM'

function formatarHorario(horario) {
    if (horario.includes('PM')) {
        const horarioLista = horario.split(':')
        
        const hora = horarioLista[0]
        const horaFormatada = String(parseInt(hora) + 12)
        horarioLista[0] = horaFormatada
        
        return horarioLista.join(':')
    }
    
    return horario.replace('AM', '').replace('PM', '')
}

console.log(formatarHorario(horario))


/*Questão 2 - Desafio Quantidade de Palavras*/
const frase = 'façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa'

function contarPalavras(frase) {
  let quantidadePalavras = 1
  for (let letra of frase) {
    if (letra == letra.toUpperCase()) {
      quantidadePalavras++
    }
  }

  return quantidadePalavras
}

console.log(contarPalavras(frase))


/*Questão 3 - Desafio Número Solitário */
const numeros = [12, 17, 15, 19, 22, 17, 19, 12]
const numerosUnicos = []

function removerRepetidos(numeros) {
    for (let i=0; i < numeros.length; i++) {
        let numerosReduzidos = numeros.slice()
        numerosReduzidos.splice(i, 1)
        
        if (!numerosReduzidos.includes(numeros[i])) {
            numerosUnicos.push(numeros[i])
        }
    }
    
    return numerosUnicos
}

console.log(removerRepetidos(numeros))


/*Questão 4 - Resposta letra  E (1 1 2 1 2 3 1 2 3 4)*/
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}


/*Questão 5 - Resposta letra A (True)*/
resultado = !(true && false) || (false && true)
console.log(resultado)


/*Questão 6 - Resposta letra B (2)*/
let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);
