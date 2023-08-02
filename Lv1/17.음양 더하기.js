function solution(absolutes, signs) {
  var answer = 0;

  //   for (let i = 0; i < absolutes.length; i++) {
  //     signs[i] == true ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  //   }
  answer = absolutes.reduce(
    //축적값, 현재값, 인덱스
    (acc, val, i) => (acc += val * (signs[i] ? 1 : -1)),
    0
  );
  console.log(answer);
  return answer;
}
solution([4, 7, 12], [true, false, true]);
