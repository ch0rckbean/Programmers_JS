function solution(numbers) {
  var answer = [];
  let tmp;
  for (let i = 0; i < numbers.length; i++) {
    tmp = numbers[i];
    if (tmp > numbers[i + 1]) {
      //최대값으로
      answer.push(-1);
      //   numbers.pop(tmp);
    } else if (tmp < numbers[i + 1]) {
      answer.push(numbers[i + 1]);
      //   numbers.pop(tmp);
    } else if (tmp == numbers[i + 1]) {
      answer.push(numbers[i + 2]);
    }
    console.log(tmp);
  }
  console.log(answer);
  console.log(numbers);
  return answer;
}
solution([2, 3, 3, 5]);
