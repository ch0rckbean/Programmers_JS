function solution(t, p) {
  var answer = 0;
  // 문자열 자르기
  let tArr = [];
  let num = p.length;
  for (let i = 0; i < t.length - num + 1; i++) {
    tArr.push(t.substring(i, i + num)); // 직전 인덱스까지 끊어줌
  }
  console.log(tArr);

  // 문자열 => 숫자 변환
  for (let i = 0; i < tArr.length; i++) {
    tArr[i] = Number(tArr[i]);
    // p보다 작은 문자열 개수 구하기
    if (tArr[i] <= Number(p)) {
      answer += 1;
      console.log(tArr[i]);
    }
  }

  console.log(answer);
  return answer;
}

// solution('3141592', '271');
solution('500220839878', '7');
