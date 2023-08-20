function solution(a, b) {
  let answer = 0;
  a.reduce((acc, cur, i) => {
    // reduce(콜백함수(축적값,현재값, 인덱스)=>{구문 실행},초기화값)
    answer += a[i] * b[i];
  }, 0);
  console.log(answer);
  return answer;
}
solution([1, 2, 3, 4], [-3, -1, 0, 2]);
