let s = ''
let pola = 5

for (let i = 1; i <= pola; i++) {

    for (let j = pola; j >= i; j--) {
        s += ' ';
    }

    for (let k = 1; k <= i + (i - 1); k++) {
        s += '*';
    }

    s += '\n'

}

console.log(s)