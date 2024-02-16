// exemplo 01 -  carlos 02/02  
// function soma (a,b){ // parâmetros = posso nomear qualquer coisa, não dê nomes iguais de uma varável e que tenha sentido
//     const soma = a + b 
//     if(soma > 5){
//         console.log(`Valor não permitido ${soma}`)
//     }else{ 
//         return soma
//     }
// }
// console.log(soma(2,2)) // ok
// console.log(soma(2)) // NaN
// console.log(soma())// NaN
// console.log(soma(2,2,7,3,4,2))
// soma(2,5)//
// console.log(soma(2,4)+4)

// function multiplicacao(){ // a fução tem uma base de codigo que encara um array, pecorrre individualmente esse agrumentos
//  let multi = 1 
//  for(i in arguments){
//     multi *= arguments [i]
//  }
//   return multi
// }
// console.log(multiplicacao())
// console.log(multiplicacao(5))
// console.log(multiplicacao(5,5,5,5))


function triplo (){
    return 3 * x  
}

let triplo = function(x){ // funções anonimas 
    return 3 * x  
}

triplo = (x) =>  {
  return  3 * x
}
console.log(triplo (Math.PI))
triplo = (x) => 3 * x;
console.log(triplo(3)+3)

oi = (nome) => `oi, bisnhos!`; 
console.log(oi());

oi = _ => `oi, bisnhos!`; 
console.log(oi());           // recebe todo tipo de dado 




const soma = function (x,y){
    return x + y
}

const resultado = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}

resultado(5,5)
resultado(5,5,soma)
resultado(5,5, function(x, y){
    return x * y 
    
})

resultado(3,3, (x, y) => x / y)
