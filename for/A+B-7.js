// 11021.

// console.log(input)
// [ '5', '1 1', '2 3', '3 4', '9 8', '5 2' ]
// input[1][0]
// input[1][2]

let n = Number(input[0])
// let answer = ''

for (let i = 1; i <= n; i++){
  let sum = Number(input[i][0]) + Number(input[i][2])
  // 삽질했던 코드 (밑에 2줄..)
  // answer += sum 
  //answer = answer + sum + '\n'
  console.log(`Case #${i}: ${sum}`)
}


/* < 이 문제에서 시간 잡아먹었던 이유 >
answer 변수를 만들어 모든 A,B의 합을 answer에 저장함.
그렇게 되면 Case #2: 5 <- 이런 식으로 출력할 수가 없다 (근데 여기서 애를 먹음!! 이게 왜 안 되지? 하고..ㅎㅎ;;)
answer 변수가 필요가 없어서 아예 없애고 for문에서 1번씩 돌 때마다 Case #2: 5 <- 이런 식으로 출력되도록 만들었더니 통과!!
*/
