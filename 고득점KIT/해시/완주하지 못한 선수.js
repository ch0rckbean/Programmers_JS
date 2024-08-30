function solution(participant, completion) {
  var answer = '';

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      return participant[i];
    }
  }

  //   answer = Object.keys(parObj).find((key) => parObj[key] == 0); // value 값으로 key 찾기

  // 시간 초과
  //   for (let p of participant) {
  //     if (!completion.includes(p)) {
  //       answer = p;
  //     }
  //   }
}

solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']);
