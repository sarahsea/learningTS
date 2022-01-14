// Type Alias & readonly, type extends

// 1 _ 타입 익스텐드 할 때 중복된 속성이 있다면?

type AType = {x : number, y : string }
type BType = {y : string}

type CType = AType & BType

let myObj : CType = { x: 1, y : '1'};

// 같은 타입이면 노상관, 다른 타입이면 에러?

// 2_ 조건에 만족하는 타입 만들기
type Quiz2Type = {color ?:string, size :number, readonly position :number[]};

let quiz2Obj : Quiz2Type = {position: [1], size: 1}; 


// 3_ 자주쓰는 object 타입형태
type UserType = { name :string, phone :number, email ?:string }
let 회원명단 :UserType = {
  name: 'kim',
  phone : 12341234,
}

// 4_ 조건에 만족하는 타입 alias, 3의 타입 재활용해보기
type YoungUserType = UserType & { isAdult :boolean }
let john : YoungUserType = {
  name: 'park',
  phone: 1234,
  isAdult: false
}

// 8 literal type
let 이름 :123;
이름 = 123;

// 강의중 퀴즈 1
// 가위바위보 중 1개만 입력가능,
// 가위바위보 만 들어올 수 있는 배열 리턴 하는 함수

function rpc (param :'가위' | '바위' | '보') :('가위' | '바위' | '보')[] {
  return ['가위'];
}

// 함수 alias type 만들기
type 함수타입 = (a: string) => number;
let 함수 :함수타입 = () => 1;

// object 안 함수 타입지정은 어떻게 할까?

let 회원정보 = {
  name: 'kim',
  plusOne(a){
    return a+1;
  },
  changeName: () => {} 
}
