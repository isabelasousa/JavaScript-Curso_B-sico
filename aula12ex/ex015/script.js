function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 2){
                //Bebê
                img.setAttribute('src', 'bebe_menino.png')
            } else if (idade > 2 && idade <= 10){
                //Criança
                img.setAttribute('src', 'crianca_menino.png')
            } else if (idade > 10 && idade <= 18){
                //Adolescente
                img.setAttribute('src', 'menino_adolescente.png')
            } else if (idade > 18 && idade <= 30){
                //Adulto jovem
                img.setAttribute('src', 'homem_jovem.png')
            } else if (idade > 30 && idade <= 55) {
                //Adulto
                img.setAttribute('src', 'homem_adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 2){
                //Bebê
                img.setAttribute('src', 'bebe_menina.png')
            } else if (idade > 2 && idade <= 10){
                //Criança
                img.setAttribute('src', 'crianca_menina.png')
            } else if (idade > 10 && idade <= 18){
                //Adolescente
                img.setAttribute('src', 'menina_adolescente.png')
            } else if (idade > 18 && idade <= 30){
                //Adulto jovem
                img.setAttribute('src', 'mulher_jovem.png')
            } else if (idade > 30 && idade <= 55) {
                //Adulto
                img.setAttribute('src', 'mulher_adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com idade de ${idade} anos!`  
        res.appendChild(img)
    }
}