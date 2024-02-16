document.addEventListener('DOMContentLoaded', ()=>{ //toda vez que eu acessae essa pagina o vento será disparado 
   const url = "https://api.chucknorris.io/jokes/categories"
   // atigamente usauva- se o axios , agora usa o fetch que faz a mesma coisa, mas é uma promessa

  fetch(url) // solicitação api eretorno algo coisa 
  .then((response)=>{ // pega devoluitiva , se a resposta for difente de OK quero que gero um error
     if(!response.ok){   // faz a verificação 
        throw new Error ('Erro ao receber os dados') // then não retoirnada nada
     }
     return response.json()
 })
 .then((data)=>{
    gerarCategorias(data)
 })
 .catch((err)=>console.error(err))

});

function gerarCategorias(categorias){   // parametro categorias = array de categorias 
    const select = document.getElementById('select')
    categorias.map((categoria) => {  // listar lementes, o map sabe extamento a quantidades de feitas
    const options = document.createElement('option')
    options.innerHTML = `${categoria}`
    options.value = categoria
    select.appendChild(options)
  }) 
}
   
 const btn = document.getElementById('btn') 
 btn.addEventListener('click', ()=>{
    const select= document.getElementById("select").value    // as variaveis possiem o mesmo nome mas sõ criadas em ecopos diferentes logo não tem ligações
    // console.log(select)

    const url = `https://api.chucknorris.io/jokes/random?category=${select}`
    fetch(url) 
    .then((response)=>{
        if(!response.ok){
            throw new Error (`Erro ao selecionar uma piada`)
        }
        return response.json()
    })
    .then((data)=>{
        gerarPiada(data)
    })
    .catch((err)=>console.error(err))
 });

 function gerarPiada(piada){
   const joke = document.getElementById('joke')
   joke.innerHTML = piada.value

 }