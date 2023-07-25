function solution(n) {
    let answer = 0;
    
    for (let i=1; i<n+1; i++){
        if(i==Math.sqrt(n)){
            answer=Math.pow((i+1),2);
            console.log(answer)
            return answer;
        }
        else{
            answer=-1;
        }
    }
    console.log(answer)
    return answer;
}
solution(121);