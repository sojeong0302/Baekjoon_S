const fs = require("fs");
const readline = require("readline");

const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
});

//문제에서는 여러 개의 괄호 문자열이 주어질 때, 각 문자열이 올바른 괄호 문자열인지 판별하는 것이 목적
const stack = [];//example.txt를 한줄씩 받아서 행만 증가하고 열을 증가하지 않음

function isBalanced(str) {
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '(' || ch === '[') {
      stack.push(ch);
    } else if (ch === ')' || ch === ']') {
      const pop = stack.pop();
      if ((ch === ')' && pop !== '(') || (ch === ']' && pop !== '[')) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

//line은 readline 모듈에서 input 스트림으로 읽어들인 한 줄의 텍스트를 나타냄
rl.on('line', (line) => {
  if (line === '.') {
    rl.close();
    return;
  }
  //stack 배열은 여러 줄의 문자열을 처리할 때마다 초기화되어야 합니다.
  //만약 이 부분이 없으면 이전 문자열의 괄호 검사 결과가 현재 문자열의 검사 결과에 영향을 끼칠 수 있습니다. 
  //따라서 이전 문자열의 검사 결과와 상관 없이 현재 문자열만을 검사하기 위해 stack 배열을 초기화해주는 것입니다.
  stack.length = 0; 
  console.log(isBalanced(line) ? 'yes' : 'no');//삼항 연산자임
  /* 
  if (isBalanced(line)) {
  console.log('yes');
} else {
  console.log('no');
}
//이렇게도 쓸 수 있는데 좀 더 간단하게 작성 가능
  */
});