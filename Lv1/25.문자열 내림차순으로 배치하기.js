function solution(s) {
  var answer = '';
  let preAs = s.split('').sort().reverse();
  answer = preAs.join('');
  console.log(answer);
  return answer;
}
solution('Zbcdefg');
