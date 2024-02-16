let pessoa = { 
nome : `Raquel`,   
idade: 17, 
altura: 1.57, 
enderecos:[
  {tipo: `residencial`, 
   rua: `Rua A`, 
   cidade: `Maceió`}, 
  {
    tipo: `Comercial`, 
   rua: `Rua B`, 
   cidade: `Salvador`
  }
],

saudacao(){
    return `olá, mundo!`
}

}
// console.log(pessoa.nome)
// console.log(pessoa.saudacao())
// console.log(pessoa.endercos[0].rua)

//listar todosos endereços desse obj
pessoa.enderecos.forEach((elemento, indice)=>{
    console.log(`${indice + 1} - ${elemento.cidade}`)
})