var num = [4, 2, 6, 5, 3, 9]
num.sort()

console.log(`O vetor tem ${num.length} elementos`)

for (var pos in num){
    console.log(`A posição ${pos} contém o elemento ${num[pos]}`)
}

var lugar = num.indexOf(5)
console.log(`O valor 5 está na posição ${lugar}`)
