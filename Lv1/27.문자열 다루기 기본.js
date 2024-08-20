function solution(s) {
  var answer = true;
  let strLength = s.length;
  let check = /[0-9]/g;

  if (strLength == 4 || strLength == 6) {
    console.log(check.test(Number(s)));
  }
  console.log(answer);
  return answer;
}

solution('a234');
solution('10e1');
