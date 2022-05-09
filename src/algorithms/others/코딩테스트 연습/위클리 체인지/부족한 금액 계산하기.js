/**
 * 위클리 챌린지 (https://programmers.co.kr/learn/courses/30/lessons/82612)
 * @param {*} price 
 * @param {*} money 
 * @param {*} count 
 * @returns 
 */
function solution(price, money, count) {
  var answer = 0;

  for(let i = 1; i <= count; i++){
    answer += price * i;
  }
  
  answer = money - answer;

  if(answer < 0) return Math.abs(answer);
  else return 0;

}

console.log(solution(3, 20, 4)); // 10
console.log(solution(1, 20, 4)); // 10
