// A+B-7 문제와 똑같다. 출력해야 될 게 좀 다를 뿐

let n = Number(input[0])
let answer = ''

for (let i = 1; i <= n; i++){
  let num1 = Number(input[i][0])
  let num2 = Number(input[i][2])

  let sum = num1 + num2

  console.log(`Case #${i}: ${num1} + ${num2} = ${sum}`)
}
