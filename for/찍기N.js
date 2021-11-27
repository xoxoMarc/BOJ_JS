let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('input.txt').toString().split('\n');


// 2741.
let n = Number(input[0])
let answer = ''

// 이렇게 했더니 안 돼서
// for (let i = 1; i <= n; i++){
//   console.log(i)
// }

// 이렇게 하고 통과
for (let i = 1; i <= n; i++){
  answer += i + '\n'
}
console.log(answer)
console.log(typeof(answer))

/* 의문점
8번째 줄에 let answer = '' <- 이거나
let answer = 0 <- 이거나
console.log(typeof(answer))하면 똑같이 string이라고 뜨는데 
왜 =''할 때만 통과하고 = 0 일때는 통과 못하는 걸까...?
*/


