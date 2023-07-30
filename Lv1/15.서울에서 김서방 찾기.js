function solution(seoul) {
  var answer = "";
  let ele = "Kim";
  // for문 내에서 indexOf 안 돌아도 됨
  //   answer = `김서방은 ${String(seoul.indexOf(ele))}에 있다`;
  answer = `김서방은 ${seoul.indexOf(ele)}에 있다`;

  console.log(answer);
  return answer;
}
solution(["Jane", "Kim"]);
