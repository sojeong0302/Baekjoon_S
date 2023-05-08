// const fs = require("fs");
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
// let input = fs.readFileSync(filePath).toString().split("\n");

// const N = input[0];

// let A = input[2];
// let B = "front";
// let C = "A";
// let D = typeof A;
// let E = typeof B;
// console.log(A);
// console.log(B);
// console.log(D);
// console.log(E);
// console.log(A == B);


const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/example.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = input.shift();

  let A = input[2];
  let B = "front";
  let C = "A";
  let D = typeof A;
  let E = typeof B;
  console.log(A);
  console.log(B);
  console.log(D);
  console.log(E);
  console.log(A == B);