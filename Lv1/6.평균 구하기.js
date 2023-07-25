function solution(arr) {
    let answer = 0;
    answer= arr.reduce((a,b)=>a+b)/arr.length;
    console.log(answer);
    return answer;
}

solution([1,2,3,4])