function solution(arr) {
  var answer = [];
  if (arr.length <= 1) answer = -1;
  // arr.sort((a,b)=>a-b)
  answer = arr.filter((ele) => ele > Math.min(...arr));
  console.log(answer);
  return answer;
}

solution([4, 3, 2, 1]);
