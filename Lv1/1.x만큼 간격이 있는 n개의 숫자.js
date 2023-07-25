function solution(x, n) {
    // var answer = [];
    // for (let i=1; i<=n; i++){
    //     answer.push(x*i);
    // }
    answer=Array(n).fill(x).map((currentVal,Index)=>(Index+1)*currentVal);
    console.log(answer);
    return answer;
}
solution(2,5);