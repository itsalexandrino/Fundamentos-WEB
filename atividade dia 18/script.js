let nome = window.document.getElementById('nome')
let nome = window.document.getElementById('sobrenome')
let nome = window.document.getElementById('idade')
let nome = window.document.getElementById('cep')
let nome = window.document.getElementById('end')
let nome = window.document.getElementById('num')

function validarNome(){

    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML= ('Nome Invalido')
        txt.style.color= 'red'
    } else{
        txt.innerHTML= ('Nome Valido')
        txt.style.color= 'green'
    }

}

function comprar(){
    alert("compra efetuada !!")
}