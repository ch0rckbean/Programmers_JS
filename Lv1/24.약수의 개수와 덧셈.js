function solution(a, b) {
  var answer = a;
  let cnt = 0;
  let i = 1;
  while (a <= b) {
    while (i <= a) {
      if (a % i == 0) {
        cnt += 1;
        console.log(a, i, cnt);
      }
      i++;
    }
    a++;
    if (cnt % 2 == 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  console.log(answer);
  return answer;
}
solution(13, 17);
