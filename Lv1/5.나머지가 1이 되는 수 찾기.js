function solution(n) {
    let answer = 0;
    for (let x=1; x<n+1; x++){
        if (n%x==1){
            answer=x;
            break;
        }
    }
    console.log(answer);
    return answer;
}

solution(10);