var num = [9, 7, 4, 5, 6, 3]
num.sort()

/*
for (var pos = 0 ; pos <num.length ; pos++) {
    
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}


