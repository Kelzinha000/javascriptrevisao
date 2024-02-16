// let numero = Number(prompt(`Digite o número`))

// function verificador(a){
// if(a > 0){
//   document.write(`1`)
// }else{
//     document.write(`0`)
// }
// return 
// }

// let resultado = verificador(numero)

// para economizar a linha
// valor ? verdadeira : falso 

// ATIVIADE 01

// const verifica = (x) => x > 0 ? 1 : 0 
// conso.log(verifica(5))


// ATIVIDADE 02


//  ATIVIDADE 03
const dobroF = (x) => 2 * x
const tripleF = (x) => 3 * x

const resultado = function(param, fun1, fun2){
    const dobro = fun1(param)
    const triple = fun2(param)
    console.log(`O número ${param}, dobro${dobro}, triple${triple}`)
}
let valor = Number(prompt(`Digite um numero`))
resultado(2, dobroF, tripleF)