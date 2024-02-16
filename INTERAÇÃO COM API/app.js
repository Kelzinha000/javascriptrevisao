// console.log('Este é o primeiro console') // programaçãp assicoma 

// setTimeout(function(){
//     console.log('Este é o segundo console') 
// } ,3000)

// setInterval(function(){
//     console.log('Este é o segundo console')
// },2000)
// console.log('Este é o terceiro console')  

// const promessa = Promise.resolve(5+5) // pese pra resolver algo, esperando o rettono disso para ser retomado

// console.log('Lógica que dor desenvolvidado') // aplicação sendo contruida

// promessa.then(function(value){ //  toda vez que a promesa rertona algo elea SEMPRE retoma um parâmetro/ valor. Começa a tratativa 
//    console.log(`A soma ${value}`)
//    return value
// }) 
// .then(function(value){
//     console.log(`A suntração -1 ${value - 1}`)
//     return value
// }).then(function(value){
//     console.log(`A multiplicação-1 ${value * 1}`)
//     return value
// })

// console.log(`Código extra`)

// Promise.resolve('Olá,'  * 4).then()
// .then((value)=>{
//     if(Number.isNaN(value)){
//         throw new Error(`Valores Inválidos`)

//     }
// }).catch((err)=>{
//     console.log(`Um erro ocorreu ${err}`)
// })


// function checNumber(n){
//     return new Promise((resolve,reject) =>{
//         if(n > 20){
//             resolve('O número é maior que 20')
//         }else{
//             reject(new Error('Número Inválido'))
//         }
//     })
// }

// const num1 = checNumber(25)
// const num2 = checNumber(10)

// num1.then((value)=>{
//     console.log(`O resultado é: ${value}`)
// }).catch((err)=>{
//     console.log(`Error: ${err}`)
// })
// num2.then((value)=>{
//     console.log(`O resultado é: ${value}`)
// }).catch((err)=>{
//     console.log(`Error: ${err}`)
// })
// console.log(`Teste Async`)


// calculaComDelay(3,3)
// .then((value)=>{
//     console.log(value)
// }).catch((err)=>{
//    console.log(`${err}`)
// })


// async await      ASYNC é um promessa 
async function respostaComDelay (){
 return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(`Resolveu a promessa`)
    },3000)
 })
}

async function chamdaDelay(){
console.log(`Chamando a promisse, e esperando o resultado`)
const resultado = await respostaComDelay()
console.log(`O resultado chegou ${resultado}`)
}
chamdaDelay()