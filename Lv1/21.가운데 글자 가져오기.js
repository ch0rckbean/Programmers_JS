function solution(s) {
  var answer = "";
  //   s = s.split("");
  //   let idx = Math.floor(s.length / 2);
  //   s.length % 2 == 0 ? (answer += s[idx - 1] + s[idx]) : (answer = s[idx]);
  //   console.log(s[idx]);
  answer = s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 == 0 ? 2 : 1);
  console.log(answer);
  return answer;
}
solution("abcdde");
