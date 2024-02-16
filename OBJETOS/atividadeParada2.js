// let produtos = [
//     { nome: 'Camiseta', categoria: 'Roupas' }, 
//     { nome: 'Celular', categoria: 'Eletrônicos' }
// ];
// let precos = [
//     { nome: 'Camiseta', preco: 20 }, 
//     { nome: 'Celular', preco: 500 }
// ];

// function combinarProdutoPreco(produtos, precos){
//    return produtos.map((produto)=>{
//     // encontrar o onjeto correspondente do array de preços
//        let precoProduto  = precos.find((preco)=>preco.nome === produto.nome); // metodo find vai devlver a comparação se o nome do produto vai ser igaul preco do produto
//       // console.log(precoProduto)
//       return {
//         nome : produto.nome, 
//         categoria: produto.categoria, 
//         preco: precoProduto.preco
//       };
//    });
// }

// const combinarProduto = combinarProdutoPreco(produtos, precos)
// console.log(combinarProduto)

// // atividade 02

// function  buscarPorCategoria(arrayProduto, categoria){
//     return arrayProduto.filter((produto)=>produto.categoria ===  categoria);  

// }
// const categoriaProduto = buscarPorCategoria(combinarProduto, "Eletrônicos")
// console.log(categoriaProduto)


// aividade 03

let produtos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = [3, 1];

function precoTotal(produtos, quantidades){
    return produtos .map((produto, index)=>{
  let precoVenda = produto.preco * quantidades[index]
   
    return{
        nome : produto.nome, 
        preco : produto.preco, 
        valorTotal : precoVenda
    }

})
}

const precoVendaProduto = valorTotal(produtos, quantidades)
console.group(precoVendaProduto)


// atividade 04 

let mercadoria = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];

function precoMinimo(arrayProduto, valorMinimo){
    return arrayProduto.filter((produto)=>produto.preco >= valorMinimo)
     
}

const produtoAcimaDoMInimo = precoMin(mercadoria, 500)
console.log(produtoAcimaDoMInimo)



