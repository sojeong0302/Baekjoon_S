// const fs = require("fs");
// const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname+'/example.txt';
// let input = fs.readFileSync(filePath).toString().split("\n");
// input = input[0].split(" ").map((item)=>+item);

// for (let i = 0; i < input.length; i++) {
//     const [n, m] = input[i].split(' ').map(Number);
//     console.log(combi(m, n));
// }

// function combi(m, n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result = result * (m - n + i) / i;
//     }
//     return result;
// }

const fs = require("fs");
const readline = require("readline");

// 파일에서 입력값을 읽어오기 위한 경로를 설정합니다.
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";

// 입력값을 한 줄씩 처리하기 위한 readline 인터페이스를 생성합니다.
const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
  output: process.stdout,
});

// 테스트 케이스의 개수를 저장할 변수를 선언합니다.
let testCase = 0;

// 한 줄씩 입력받아 처리하는 이벤트 리스너를 등록합니다.
rl.on("line", function (line) {
  // 테스트 케이스의 개수를 첫 번째 입력값으로 받습니다.
  if (!testCase) {
    testCase = Number(line);
    return;
  }

  // 두 수를 입력받아 조합의 수를 계산하여 출력합니다.
  const [n, m] = line.split(" ").map((num) => parseInt(num));
  console.log(getCombinationCount(n, m));

  // 현재 테스트 케이스를 처리하였으므로, testCase를 1 감소시킵니다.
  testCase--;

  // testCase가 0이 되면 입력을 종료하고 프로세스를 종료합니다.
  if (testCase === 0) {
    rl.close();
    process.exit();
  }
});

// 조합의 수를 계산하는 함수를 정의합니다.
function getCombinationCount(n, m) {
  // n이 m과 같을 경우, 전체 조합의 수는 1입니다.
  if (n === m) {
    return 1;
  }

  // n이 1일 경우, 전체 조합의 수는 m입니다.
  if (n === 1) {
    return m;
  }

  // DP 배열을 초기화합니다.
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  // dp 배열을 채웁니다.
  for (let i = 1; i <= m; i++) {
    dp[1][i] = i;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= m; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1];
    }
  }

  // nCm 값을 반환합니다.
  return dp[n][m];
}