function solution(clothes) {
  var answer = 1;
  let clothesMap = {};
  clothes.forEach((arr) => {
    // 의상 종류별로 갯수 저장
    const [type, name] = arr;
    console.log(arr);
    /*
    [ 'yellow_hat', 'headgear' ]
    [ 'blue_sunglasses', 'eyewear' ]
    [ 'green_turban', 'headgear' ]
    */

    // 종류별 의상 갯수 저장
    if (clothesMap.hasOwnProperty(name)) {
      clothesMap[name]++;
    } else {
      clothesMap[name] = 1;
    }
  });

  for (let key in clothesMap) {
    answer *= clothesMap[key] + 1; // 해당 옷을 입지 않는 경우(+1)
    console.log(answer);
  }

  // 옷 하나도 안 입는 경우
  return answer - 1;
}

solution([
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]);
