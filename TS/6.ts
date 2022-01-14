//퀴즈1
// 클리닝해주는 함수 문자, 숫자가 섞인 배열을 숫자로 깔끔히 변화되어 나오는 클리닝 함수 만들기

// 유니온 타입일 때 덧셈 안됨, narrowing 필요
function cleaning(x :number | string){
  if (typeof x === 'string') return Number(x) + 1;
  return x + 1;
}


