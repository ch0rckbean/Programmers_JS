// while (num != 1) {
//   if (num % 2 == 0) {
//     num /= 2;
//     answer += 1;
//   } else if (num % 2 == 1) {
//     num = num * 3 + 1;
//     answer += 1;
//   }
//   if (answer == 500) {
//     answer = -1;
//   }
// }
function solution(num) {
  var answer = 0;

  while (num != 1 && answer != 500) {
    answer += 1;
    num % 2 == 0 ? (num /= 2) : (num = num * 3 + 1);
    // if (answer == 500) return -1;
  }
  console.log(answer);
  return num == 1 ? answer : (answer = -1);
}
solution(6);
solution(16);
