// const fs = require("fs");
// const readline = require("readline");
// const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
// const rl = readline.createInterface
// (
//     {
//         input: fs.createReadStream(filePath),
//         output: process.stdout,
//     }
// );

// let N = 0;
// let result=0;

// function suga(N){
//     if(3 <= N && N<= 5000){

//         for(let i=0; i<N; i++)
//         {
//             const A=Math.floor(i%5);
//             const B=Math.floor(A%3);
//             if(A===0){
//                 result += Math.floor(i/5);
//             }
//             else if(A===1){
//                 result --;
//             }else{
//                 if(B===0){
//                     result += Math.floor(i/3);
//                 }
//                 else if(B===1){
//                     result --;
//                 }
//             }
//         }
//     }else{
//         console.log("N의 값을 범위에 맞게 다시 입력해주세요.")
//     }
//     return result;
// }

// //example.txt파일의 내용을 한 줄씩 잃어와서 suga함수에 인자로 전달하여 결과를 출력
// rl.on("line", function(line){
//     if(!N){
//         N = parseInt(line);
//     }
//     result=suga(N);
//     console.log(result);
//     N=0;
// });

// rl.on("close", function() { // 추가
//     console.log("입력이 종료되었습니다.");
//   });


// const fs = require("fs");
// const readline = require("readline");
// const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
// const rl = readline.createInterface
// (
//     {
//         input: fs.createReadStream(filePath),
//         output: process.stdout,
//     }
// );

// let N = 0;
// let result=0;

// function suga(N){
//     if(3 <= N && N<= 5000){

//         for(let i=0; i<N; i++)
//         {
//             const A=Math.floor(N%5);
//             const B=Math.floor(A%3);
//             if(A===0){
//                 result += Math.floor(N/5);
//             }else if((N+1)%5===1){
//                 result=(((N+1)/5)-1);
//             }else{
//                 if(B===0){
//                     result += Math.floor(A/3);
//                 }else if((N+1)%5===1){
//                     result=(((N+1)/3)-1);
//                 }else{
//                     console.log("뭔가 잘못됐음")
//                 }
//             }

//         }
//     }else{
//         console.log("N의 값을 범위에 맞게 다시 입력해주세요.")
//     }
//     return result;
// }

// //example.txt파일의 내용을 한 줄씩 잃어와서 suga함수에 인자로 전달하여 결과를 출력
// rl.on("line", function(line){
//     if(!N){
//         N = parseInt(line);
//     }
//     result=suga(N);
//     console.log(result);
//    N=0;
// });

// rl.on("close", function() { // 추가
//     console.log("입력이 종료되었습니다.");
//   });

const fs = require("fs");
const readline = require("readline");

const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
});

let N = 0;

rl.on("line", function (line) {
  N = Number(line);
}).on("close", function () {
  let answer = -1; // 답을 저장할 변수를 초기값 -1로 지정

  for (let i = Math.floor(N / 5); i >= 0; i--) { // 5kg 봉지부터 최대한 많이 들고 가는 방법을 시도
    let j = N - i * 5; // 남은 설탕의 양 계산

    if (j % 3 === 0) { // 3kg 봉지로 채울 수 있는지 확인
      answer = i + j / 3; // 채울 수 있다면 5kg 봉지 수와 3kg 봉지 수를 더해서 답을 계산
      break; // 최대한 적은 봉지를 들고 가야하므로 답을 구하면 바로 break
    }
  }

  console.log(answer); // 답을 출력
});
