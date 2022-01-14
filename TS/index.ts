// primitive types 원시타입
let 이름 :string = 'kim';

//이름 = 123; // 실수로 타입 변경 에러 방지
이름 = 'sarah';

let age :number = 50;
let hobby :undefined;

// array, object
let 회원들 :string[] = ['kim', 'park'];
let 유저들 :{member1 : string, member2 : string} = { member1: 'mark', member2: 'park'};

let favoriteSongs : { song : string, singer : string } = { song: 'close to you', singer: 'carpenterz'};
let project : {
  member : string[], 
  days : number, 
  started : boolean} = {
  member : ['kim', 'hyeo'],
  days : 28,
  started : true,
}



// union type
let 여러가지 :(number | string)[] = ['문자', 1];
let 오브젝트: { data : (number | string)} = { data : '123'}

//tip - 모두 타입지정을 할 필요가 없다!
// 타입지정 안해도 할당하면 자동으로 타입 지정해 줌
let 설아 = '개발자';
let 나이 = 123;

// 타입 설정 너무 길어지면. type alias
type 타입변수이름 = string | number;
let 사용할곳 : 타입변수이름 = 1;

// any 타입 - 타입 스크립트 기능 해제라고 볼 수 있다
let 애니 :any;
let 아무거나 :unknown;

// 언노운이 애니 보다는 안정성
//아무거나 - 1; // 언노운 타입이니까 뺄셈 불가

// 함수 타입지정
function 함수(x :number) :boolean {
  return true;
}

// void - 리턴이 없는 함수의 경우, 엄격히 
function 리턴없는함수(x : string) :void {
  //return '' 리턴하면 에러
}

function 내함수(x? :number) {

}
내함수(); // ? -> | undefined, ?설정해주지 않으면 js와 차이, 변수 안넣고 실행시 오류
내함수(2);

// 튜플- array 에 쓸 수 있는 tuple 타입
// 타입 변수 설정할 때 대부분 대문자로 시작, 일반변수와 구분짓기 위해
type Member = [number, boolean];
let john:Member;
john.push(1);
//john.push('str'); // 에러남 숫자나 불리언만 인데

// 오브젝트에 지정할 속성이 너무 많다?
type MyObj = {[key :string] : string, } 
let newObj : MyObj = { name : 'kim'};

// 퀴즈 1
function quiz1(name ?:string) :string {
  if (!name) return '이름이 없습니다'
  return '안녕하세요 ' + name;
}

quiz1();

//quiz2
function quiz2(x :(number | string)) :number {
  if(typeof x === 'number') x = x.toString();
  return x.length;
}

//quiz3
function quiz3(income : number, hasHouse : boolean, point : string) :string {
  let score = 0;
  score += income * 1
  if (hasHouse) score += 500;
  if (point === '상') score += 100;
  if (score > 600) return '결혼가능';
  // what if, 만약 string 아닌 딱 상,중,하 글자만 입력할수 있게 지정하려면?
  // 만약, 월소득을 마이너스로 입력하지 못하게 하려면?
}

let test1 = quiz3(700, false, '중')
console.log(test1);
