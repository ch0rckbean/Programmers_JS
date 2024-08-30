function solution(nums) {
  let arr = [...new Set(nums)];
  console.log(Math.min(arr.length, nums.length / 2));
  console.log(arr);
  return Math.min(arr.length, nums.length / 2);
}

solution([3, 1, 2, 3]);
