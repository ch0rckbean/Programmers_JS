process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
  const n = data.split(' ');
  const a = Number(n[0]), // 가로
    b = Number(n[1]); // 세로
  for (let i = 0; i < b; i++) {
    let str = ''; // 출력할 변수
    for (let j = 0; j < a; j++) {
      str += '*';
    }
    console.log(str);
  }
});
