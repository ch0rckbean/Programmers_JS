function solution(n, m) {
  var answer = [];
  let gcd = 1; // 최대공약수
  let lcm = 1; // 최소공배수
  let a = Math.min(n, m);
  let b = Math.max(n, m);

  // 1. 최대공약수
  for (let i = 2; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  // 2. 최소공배수 : 두 수의 곱 % 최대공약수
  lcm = (a * b) / gcd;

  answer.push(gcd, lcm);
  console.log(answer);
  return answer;
}

solution(3, 12);
solution(30, 12);
