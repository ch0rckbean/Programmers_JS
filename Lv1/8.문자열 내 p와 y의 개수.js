function solution(s){
    let answer = true;
    let pp=0;
    let yy=0;

    s=s.split('');
    
    for (let i=0; i<s.length; i++){
        if(s[i]=='p' | s[i]=='P'){
            pp+=1;
        }
        else if(s[i]=='y' | s[i]=='Y'){
            yy+=1;
        }
    }
    if (pp!=yy){
        answer=false;
    }
    console.log(answer);
    // console.log(s.toUpperCase().split("P"));
    // console.log(s.toUpperCase().split("Y"));

    return answer;
}
solution("pPoooyY");