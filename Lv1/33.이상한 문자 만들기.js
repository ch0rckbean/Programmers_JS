function solution(s) {
  var answer = '';
  let arr = s.split(' '); // 배열 반환
  // console.log(arr, 'arr');

  // 짝홀수별 변환
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split(''); // 배열 반환
    // console.log('word', word); // [ 'h', 'e', 'l', 'l', 'o' ]

    for (let j = 0; j < word.length; j++) {
      if (j % 2 != 0) {
        //홀수
        word[j] = word[j].toLowerCase();
        arr[i] = word.join('');
      } else {
        // 짝수
        word[j] = word[j].toUpperCase();
        arr[i] = word.join('');
      }
    }
  }
  answer = arr.join(' ');
  console.log(arr, 'arr');
  console.log(answer);
  return answer;
}

solution('try hello world');
