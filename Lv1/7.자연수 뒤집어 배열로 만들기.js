function solution(n) {
    let answer = [];
    answer=String(n).split('');  //배열 반환
    answer.reverse(); 
    for (let i=0; i<answer.length; i++){
        answer[i]=parseInt(answer[i]);
    }

    console.log(answer);

    return answer;
}
solution(12345);