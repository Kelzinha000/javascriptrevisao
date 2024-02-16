// listar o dado ( as informações) do arrray - foreach 
// listar  o dado do array (as informação e modificar- 

const array = [ 21, 6 , 84 , 24, 86,11, 39,59 ,53]

// //Listar 
// // metodos nativos javascript 
// // para esse funcionar precisa de uma função callback FOREACH
// // 1° maneira, dentro do método
// array.forEach((elemento , indice)=>{ // callback, toda vez que ele encontrar um indice ele vai chamar. função recebe até  3 parametro. O primeiro parametro é obrigatório
//   console.log(`${indice} - ${elemento}`)

// }) 

// //2° maneira fora do método
// const listarDados = (elemento)  => console.log(elemento)
// array.forEach(listarDados)

// Método Map - vou criar UM DADO E VAI CRIAR UM NOVO ARRAY COM OS DADOS MODIFICADOS
// console.log(array)
// array.map((elemento)=>{
//  console.log(elemento * 3)

// }) // também recebe função como parametro

// const listarMap = elemento => console.log(elemento)
// array.map(listarMap)

//função anonima  
const maiorQue30 = array.find((elemento)=>{  // assim que ele encontrar o primeiro elemento que a atenda a condição e para. Ele não pecorre todos.
    return elemento > 30
}) // recebe outra função como parametro
console.log(maiorQue30)

const maiorQue31 =  array.filter ((elemento)=>{ // também recebe s mesmo parâmetros, sendo o primeiro obrigatório
    return elemento > 31
})

console.log(maiorQue31)