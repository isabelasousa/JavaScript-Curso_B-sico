function contar() {
    var ini = document.getElementById('txti')
    var fi = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

        
    if (ini.value.length == 0 || fi.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'

        var inicio = Number(ini.value)
        var fim = Number(fi.value)
        var passo = Number(pas.value)
        
        if (passo == 0) {
            window.alert('Passo INVÁLIDO! Considerando PASSO 1')
            passo = 1
        } 

        if (inicio <= fim) {
            // CONTAGEM CRESCENTE
            for (var c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            // CONTRAGEM DECRESCENTE
            for (var c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }
    } 

}