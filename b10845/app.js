const fs = require("fs");
const readline = require("readline");

const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
});

const queue = [];
let result = '';
let N=0;
//N이 비어있을때 N을 입력받음

rl.on('line', (input) => {
  if (!N) {
    N = +input;
    return;
  }

  if (1 <= N && N <= 10000)
  {
    const [command,num]=input.split(' '); //입력된 문자열에서 명령어 부분을 나타내는 변수

    switch(command){
      case "Push":
        queue.push(num);
        break;
        case 'pop':
          result += queue.length ? queue.shift() + '\n' : '-1\n';
          break;
        case 'size':
          result += queue.length + '\n';
          break;
        case 'empty':
          result += queue.length ? '0\n' : '1\n';
          break;
        case 'front':
          result += queue.length ? queue[0] + '\n' : '-1\n';
          break;
        case 'back':
          result += queue.length ? queue[queue.length - 1] + '\n' : '-1\n';
          break;
    }
  }
}).on('close', () => {
  console.log(result);
});