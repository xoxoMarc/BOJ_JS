let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = fs.readFileSync('input.txt').toString().trim().split('\n'); 

let i = 0
let sum = ''

while (i < input.length){
  
  sum =  Number(input[i][0]) + Number(input[i][2])
  console.log(sum)
  i++
  if (i === input.length) {
    break;
  } 
}


// i의 범위만 다를 뿐 이전 문제와 같은 유형이다.
