function solution(n) {
    var arr = 0;
    n=String(n).split('');
    arr=n.sort((a,b)=>b-a);
    // arr=arr.map(arr=> Number(arr));
    let answer='';
    for (let i=0; i<arr.length; i++ ){
        answer+=arr[i];
    }
    Number(answer);
    console.log(answer);
    console.log(arr);
    return answer;
}
solution(118372);