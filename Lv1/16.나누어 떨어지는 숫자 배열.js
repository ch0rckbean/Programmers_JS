function solution(arr, divisor) {
  var answer = arr.filter((ele) => ele % divisor == 0);
  if (answer.length == 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => a - b);
  console.log(answer);
  return answer;
}
solution([5, 9, 7, 10], 5);
