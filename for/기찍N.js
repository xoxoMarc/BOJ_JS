// 아까 문제에서 거꾸로만 하면 된다.

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0])
let answer = ''

for (let i = n; i >= 1; i--){
  answer += i + '\n'
}
console.log(answer)
