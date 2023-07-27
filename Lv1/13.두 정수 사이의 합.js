function solution(a, b) {
  var answer = 0;

  //   if (a == b) {
  //     answer = a;
  //   } else if (b > a) {
  //     answer = ((a + b) * (b - a + 1)) / 2;
  //   } else if (a > b) {
  //     answer = ((a + b) * (a - b + 1)) / 2;
  //   }
  answer = ((a + b) * (Math.abs(a - b) + 1)) / 2;
  console.log(answer);
  return answer;
}
solution(3, 5);
solution(3, 3);
