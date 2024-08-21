function solution(phone_book) {
  var answer = true;
  let pb = {};

  // 전화번호 해시테이블 만들기
  for (let p of phone_book) {
    pb[p] = 1; //{ '119' => 1, '97674223' => 1, '1195524421' => 1 }
  }

  for (let number of phone_book) {
    for (let i = 1; i < number.length; i++) {
      console.log(number);
      // 한 글자씩 잘라야 하므로
      let prefix = number.substring(0, i); // 글자수 하나씩 자르기
      if (pb[prefix]) {
        answer = false;
      }
    }
  }
  return answer;
}

solution(['119', '97674223', '1195524421']);
