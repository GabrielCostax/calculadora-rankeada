//Desafio de calculadora de pontos em uma partida rankeada

function calcularNivelRankeada (vitorias, derrotas) {
     const saldoVitorias = vitorias - derrotas
     let nivel;

     if (saldoVitorias < 10) {
          nivel = 'Ferro'
     } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
          nivel = 'Bronze'
     } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
          nivel = 'Prata'
     } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
          nivel = 'Ouro'
     } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
          nivel = 'Diamante'
     } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
          nivel = 'Lendário'
     } else if (saldoVitorias >= 101) {
          nivel = 'Imortal'
     }
     console.log(`O herói tem o salde de ${saldoVitorias} vitórias, e está no nível ${nivel}`)
}
calcularNivelRankeada(0, 0)