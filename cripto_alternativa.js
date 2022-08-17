// transformando os caracteres da palavra recebida em array
var palavra = 'palavra'

var array = ['p', 'a', 'l', 'a', 'v', 'r', 'a']

// convertendo os itens do array em valores da tabela ASCII
function charCodeAt(array){
    console.log()
}

// sorteando os itens do array
function getRandomIntInclusive(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var chave = []
for (var i =0; i < 10; i++){
    chave.push(getRandomIntInclusive(1, 9))
}

console.log(chave)

// multiplicando os valores de 'array' com seus respectivos valores em 'chave'
function produto(){
    var cripto = 1
    for(var i = 0; i < array.length; i++){
        cripto = array * chave
    }
    return cripto
}

// mostrando palavra recebida, mensagem criptografada e chave
function getInfo(){
    data.push(
    {
        original: palavra,
        criptografado: cripto,
        chave: chave

    }
    )
}
//var array = string.split('')
