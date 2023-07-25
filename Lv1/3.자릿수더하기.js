function solution(n)
{
    var answer = 0;    
    let arr=n.toString();
    
    for (let i = 0; i<=arr.length; i++){
        answer+=parseInt(arr[i]);
    }

    console.log(arr);
    console.log(answer);
    return answer;
}
solution(123);