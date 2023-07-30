function solution(numbers) {
  var answer = 0;
  //   arr = [];
  //   for (let i = 1; i < 10; i++) {
  //     arr.push(i);
  //   }
  //   answer = arr.filter((ele) => !numbers.includes(ele));
  //   answer = answer.reduce((acc, val, i) => (acc += val), 0);
  answer = 45 - numbers.reduce((acc, cur) => (acc += cur), 0);
  console.log(answer);
  return answer;
}
solution([1, 2, 3, 4, 6, 7, 8, 0]);
