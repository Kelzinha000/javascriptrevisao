const inNumero = document.querySelector(`#inNumero`)
const outTabuada = document.querySelector(`#outTabuada`)
const btnMostrar = document.querySelector(`#btnMostrar` )

btnMostrar.addEventListener('click', ()=>{  // addEven é uma função, o evento que eu quero e o comportamento que eu quero apos clicar o botao.
    let numero = Number(inNumero.value)
    console.log(numero)

    if(numero === 0 || isNaN(numero)){
        alert(`Digite um número válido`)
        isNumero.focus(); // se esqueceu de colocar o numero vai mostrar pro usuario 
        return
    }
    let resposta = ''
    for(let i = 1; i <= 10; i++){ 
        console.log(numero * i)
        resposta = ` ${resposta+numero} X ${i} =    ${numero * i}`
    }
    outTabuada.innerHTML = `${resposta}`
})          