var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true 
    } else {
        return false
    }
}

function inLista(n, 1) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    window.alert(num)
    /*if (isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('Tudo ok!')
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }*/

}

function finalizar (){


}