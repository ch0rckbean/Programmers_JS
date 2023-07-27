function solution(x) {
  let answer = true;
  let sum = 0;
  xArr = String(x).split("");
  for (let i = 0; i < xArr.length; i++) {
    sum += Number(xArr[i]);
  }
  x % sum == 0 ? (answer = true) : (answer = false);
  console.log(answer);
  return answer;
}

solution(10);
solution(11);
