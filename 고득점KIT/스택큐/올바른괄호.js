function solution(s) {
  var answer = true;
  let stack = [];
  s = [...s];

  for (let i = 1; i < s.length; i++) {
    if (s[0] == '(' && s.length % 2 == 0 && s[-1] != ')') {
      stack.push(s[0]);
      s.pop(s[0]);
      stack.push(s[i]);
      s.pop(s[i]);
    } else {
      answer = false;
    }
    console.log(stack);
  }

  console.log(answer);
  return answer;
}
solution('()()');
solution(')()(');
