function solution(phone_number) {
  var answer = "*".repeat(phone_number.length - 4);
  answer += phone_number.slice(-4);
  console.log(answer);
  return answer;
}
solution("01033334444");
