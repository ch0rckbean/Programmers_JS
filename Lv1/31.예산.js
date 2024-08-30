function solution(d, budget) {
  var answer = 0;
  let sum = 0;
  // 배열 오름차순 정렬
  d.sort((a, b) => a - b);
  console.log('d', d);

  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum > budget) {
      break;
    }
    answer++;
  }
  console.log(answer);
  return answer;
}

solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);
