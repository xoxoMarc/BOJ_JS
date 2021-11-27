let fs = require('fs');
//let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('input.txt').toString().trim().split('\n');  //<- .trim() 안 붙여서 계속 오류났었음.. 이게 진짜 뭔지 모르겠다.. 질문!!!!

//['1 1', '2 3', '3 4', '9 8', '5 2', '0 0' ]
console.log(input)

// trim 붙였을 때 (콘솔로그로 찍어보면 .trim() 붙이든 안 붙이든 둘이 차이가 없어보여... )
// .trim() : 문자열에서 공백 없애주는 메소드 인 걸 알지만 막상 replit에서 콘솔 찍어보면 둘이 차이가 없어서 엄청 헷갈렸음.. *왜 .trim() 있어야 답인지 모르겠다..ㅠㅠ*
//[ '1 1', '2 3', '3 4', '9 8', '5 2', '0 0' ]


// console.log(input.length)
// console.log(input[1][2])

/* sudo code
1. input[1][0] + input[1][2] <- 이걸 for문으로 돌리기 (input.length-1로 돌리기) */

// 1번째 풀이 (for) (O)
// let sum = 0

// for (let i = 0; i < input.length-1; i++){
//   sum = Number(input[i][0]) + Number(input[i][2])
//   console.log(sum)
// }

// 2번째 풀이 (while) (O)
let i = 0
let sum = ''

while (i < input.length-1){ //5
// 0 1 2 3 4
  
  sum =  Number(input[i][0]) + Number(input[i][2])
  console.log(sum)
  i++
  if (i === input.length -1) {
    break;
  } 
}

