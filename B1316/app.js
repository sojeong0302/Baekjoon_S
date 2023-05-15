const fs = require("fs");
const readline = require("readline");

const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";

const rl = readline.createInterface({
  input: fs.createReadStream(filePath),
});

let count = 0;

rl.on("line", function (line) {
  const word = line.trim();
  const alphabetArr = new Array(26).fill(false);
  let isGroupWord = true;

  for (let i = 0; i < word.length; i++) {
    const alphabet = word.charCodeAt(i) - 97;

    if (alphabetArr[alphabet]) {
      if (word[i - 1] !== word[i]) { // 바로 이전 문자와 현재 문자가 같지 않으면 그룹 단어가 아닙니다.
        isGroupWord = false;
        break;
      }
    } else {
      alphabetArr[alphabet] = true;
    }
  }

  if (isGroupWord) {
    count++;
  }
});

rl.on("close", function () {
  console.log(count);
});
