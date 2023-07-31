function solution(n) {
  var answer = "";
  let m = n / 2;
  let na = "수";
  let s = "수박";
  n % 2 == 0 ? (answer += s.repeat(m)) : (answer += s.repeat(m) + na);
  console.log(answer);
  return answer;
}
solution(3);
// solution(4);
