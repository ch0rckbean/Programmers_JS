function solution(num) {
    var answer = 'Even';
    
    if(num%2!=0){
        answer='Odd';
    }
    console.log(answer);
    return answer;
}
solution(6)