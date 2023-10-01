function solution(price, money, count) {
  var answer = 0;
  let amnt = 0;
  amnt = (price + price * count) * (count / 2);
  if (amnt > money) {
    answer = Math.abs(money - amnt);
  }
  console.log(answer);
  return answer;
}
solution(3, 20, 4);
