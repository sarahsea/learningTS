// 1-1 rest parameter 타입지정은 어떻게? array처럼

function 함수(...a :number[]){
  console.log(a);  
}
함수(1,5,3,2,1,1,)

// 1-2 destructuring type 
let {a, b} = {a: true, b: 20}
type 오브젝트타입 = {a :boolean, b:number}
function 함수1 ({a, b} :오브젝트타입) {
  console.log(a, b)
}
함수1({a: true, b: 20})

// quiz 1 숫자 여러개를 입력하면 최댓값을 리턴해주는 함수 만들기
// 예 함수(6,3,7,2) => return 7

function findMax(...num :number[]) :number {
  let arr = num.sort((a, b) => b - a);
  return arr[0];
}

findMax(6,3,7,2)

// quiz 2 예시 오브젝트를 파라미터로 입력할 수 있는 함수 만들기

let obj = {user: 'kim', comment: [3,5,4], admin: false};

type MyObjType = {user : string, comment: number[], admin: boolean}

function 오브젝트파라미터로받는함수({user, comment, admin} : MyObjType) :void {
  console.log(user, comment, admin)
}
오브젝트파라미터로받는함수(obj)
// 파라미터 변수명은 오브젝트 속성명 그대로 작명해야 편리하다고.

// quiz 3 예시 배열 자료 파라미터로 입력받는 함수 만들기
let arr = [40, 'wine', false];

type MyArrType = (number|string|boolean)[];

function 배열받는함수(...el :MyArrType) :void {
  console.log(...el); 
}

배열받는함수(...arr)



// 2-1 Narrowing 할 수 있는 방법 more - 1undefined, 2복잡한 obj

function 함수2(a :string | undefined) {
  if (a && typeof a === 'string'){
    //1. &&연산자로 null, undefined 타입 체크하기
  }
}

type Fish = {swim :string}
type Bird = {fly :string}

function animal1 (animal :Fish | Bird) {
  // typeof 를 쓸순 없다?!
  // 이럴땐 in 이라는 키워드로 object narrowing
  if ('swim' in animal){ // Fish 타입인지 아닌지 검사하는 조건문이 됨
    console.log(animal.swim)
  }
  let date = new Date();
  // 유사하게 오브젝트 instanceof 부모클래스
  if (date instanceof Date) {
    //이런식
  }
}

type Car = {
  wheel :'4개',
  color: string
}

type Bike = {
  wheel : '2개',
  color: string
}
// 이런경우 왜 굳이 비슷한 타입을 두개로 했을까??
// literal type 만들어두면 narrowing 편리

function 타는것(x :Car | Bike) {
  if (x.wheel === '4개') {
    // x가 Car 타입인지 검사하는 조건문
    // 비슷한 obj 타입이 많을 때 literal 타입 활용
    // 논리적으로 타입을 특정지을 수 있으면 narrowing 인정해준다
  }
}



// 3 함수에 사용하는 never 타입 (자주 쓰진 않는 듯, 알아두기만 하자)
function 함수() :never {
  // 절대 리턴값이 있으면 안된다
  // 함수실행이 끝나지 않아야 함 -> endpoint가 없어야 함
  // 모든 함수는 return undefined 가 숨겨져 있다고 보면 됨

  // 방법 두가지
  // 1 에러 내기
  throw new Error() // 함수 실행 도중에 중단됨 에러가 나니까..

  // 2 
  while(true){
    // 무한히 돈다
  }
}

// 그럼 실제 코딩에서 never타입 언제씀? - 대부분은 :void로 쓰는데.. 왜 알아야하지?
// never 타입은 코드 이상하게 짠다면 출몰?

function 이상한함수(param : string) {
  if (typeof param === 'string'){
    console.log(param);
  } else {
    // 여기 엘스문이 필요할까? 사실 무조건 스트링인데??
    console.log(param) // 여기서 param 의 타입은 never가 된다, 생길수 없어!그럴 일이 없어~
    //그래서 never 타입이 있다면 어디선가 문제가 있진 않은지 살펴봐야
  }
}

// 네버 타입 자동등장2
let 함수어떤애 = function(){
  throw new Error()
}
// 이런경우 올려보면 얘는 네버를 리턴함
// 굳이 쓸일은 없고 never 타입이 보이면 왜그렇지? 하고 코드 다시 볼 수 있는 용도


// 4 public, private 쓰는 타입스크립트
// 객체지향언어같은 문법도 제공한다?
// public, private, protected, static 자바스크립트에서는 일부는 쓸 수 있지만..
// 타입스크립트에서 이 네 가지 쓸 수 있다

// 4-1 public
class User {
  public name = 'kim';
  private age = 20;
  constructor(a){
    this.name = a;
  }
  // field와 constructor에 쓰는 차이는 변수를 넣을수 있냐 없냐?

  public 어떤함수(){}
}

let user1 = new User('park');
user1.name = '안뇽'
// public 붙으면 모든 자식들이 이용가능 (사실 안써도 이미 써있는거나 마찬가지 - 생략가능)

// 4-2 private
//user1.age = 
// 할당하려고 하면 에러남
// private 붙으면 클래스 안에서만 수정, 이용가능
// 그래서 보호하고 싶으면 private 붙이면 된다
// 예

class UserOne {
  name :string;
  private familyName : string = 'kim'; // 가문이름 변경 못하게 하고 싶음
  constructor(a){
    this.name = a + this.familyName;
  }

  이름변경함수(){
    this.familyName = 'park';
  }
}

let user2 = new UserOne('minsu')
console.log(user2);
// 4-3 근데 수정하고 싶다?
// user2.familyName = 'park' 이런거 방지하고 싶음!그렇다면 private
// 조회는 가능하나 바깥에서 수정은 x, 클래스 안에서만 수정 가능
//그런데 클래스 밖에서 바꾸고 싶은 비상상황, 예외상황에서는??

// 자식들이 familyName 바꾸고 싶다?
// 미리 클래스 안에 변경 함수 만들어놓음
console.log(user2.이름변경함수())


// 4-4 public 키워드 쓰면 this. 생략가능

class Person1 {
  constructor(public name : string){
    // 이 자리에 들어온 파라미터는 자식의 name 속성에 기입해달라
    // 축약어
  }
}

let 자식 = new Person1('kim');
console.log(자식);


// 5-1 protected (클래스 안에서 쓸 수 있는, private과 유사한)

class UserX {
  protected x = 10;
}

class NewUserX extends UserX {
  // private x 못쓴다 UserX 에만 씀
  // 하지만 protected를 쓰면 쓸 수 있음, 대신 자식에서는 못 씀 
  // 클래스 extends된, 단 클래스 내에서 공유하고 싶을때 protected
  doThis(){
    this.x = 20;
  }
}

// 5-2 static

class UserY {
  static x = 10;
  // 콘솔에 x 없음, 자식은 못쓰고 부모만 가져다 쓸 수 있음
  // static은 private, public, protected 와 같이 쓸 수 있음
  y = 20;
}

let child = new UserY();
console.log(child.x); // x 없다, static
console.log(UserY.x); // static
console.log(UserY.y); // 원래는 자식만 쓰던거를.. 역으로 부모만 쓰게 끔

// 그래서 static은 어디다 쓰는가??
class UserDev {
  static skill = 'js'; // 바꾸고 싶다면? 단, 단점은 자식들이 물려받음, 건들게 하고 싶지 않음? static
  intro = UserDev.skill + '전문가입니다'; // 대신 this.skill -> UserDev.skill
}

let 철수 = new UserDev();
console.log(철수); // undefined전문가입니다

// 그런데!! 철수만 ts로 하고 싶다? constructor로 해도 되고,
UserDev.skill = 'ts';
let 철수2 = new UserDev();
console.log(철수2); // 'ts전문가입니다'

// private이 더 안전한 ? 밖에서 변경보다는..?

// 퀴즈 1 x,y,z 속성의 특징
class UserA {
  private static x = 10; // 클래스 안에서만 수정, 스테틱은 자식들이 못건들고 부모에서만
  public static y = 20; // public 원래 클래스처럼 사용, 스테틱이니 자식들 못사용
  protected z = 30; // extends한 다른 클래스에서도 쓸수 있지만, 클래스 내에서만 사용
}

// 퀴즈 2 x속성에 숫자를 더해주는 함수가 필요
class UserB {
  private static x = 10;
  public static y = 20;

  static addOne(n :number){
    UserB.x += n;
  }
  static printX() {
    console.log(UserB.x);    
  }
}

UserB.addOne(3);
UserB.addOne(4);
UserB.printX();

// 퀴즈 3 let 이하 맞는 코드 되도록 클래스 만들기
class Square {
  constructor(public x, public y, public color){
    //컨스트럭터에 파라미터로 넣는거 까진 했는데..
  }
  draw(){
    // 랜덤하게 그리기는 답보고..ㅠ
    let randomNum = Math.random();
    // this.y 쓰려면 컨스트럭터 파라미터에 public 해줘야
    let square = `<div style="position:relative;
      top:${randomNum * 400}px;
      left:${randomNum * 400}px;
      width:${this.x}px;
      height:${this.y}px;
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML('beforeend', square);
  }
}

let square = new Square(30, 30,'red');
square.draw()


// 8 타입을 파라미터로 입력하는 Generic
// 8-1 generic 적용한 함수만들기

function 함수11<MyType>(x: MyType[]) : MyType {
  return x[0];
}

let aa = 함수11<number>([4, 2])
let bb = 함수11<string>(['kim', 'lee'])

// 그런데 여기서 return x - 1 를 하려면, 에러가 남
// -> 왜?! <MyType> 에 넘버 말고도 다른 여러가지가 들어갈 수 도 있으니 연산 미리 방지하는 것
// 해결책은 narrowing을 하거나, MyType에 넣을 수 있는 타입을 미리 제한하는 것

// 8-2 generic 타입 제한하기 Constraints
// extends 문법을 쓰면 타입 제한 가능! 
// interface문법에서 쓰는 extends가 복사라면 이건 if문으로 체크하는 느낌

function 함수22<MyType extends number>(x: MyType) {
  return x - 1
}

let a = 함수22<number>(100) //잘됩니다

// 커스텀 타입도 extends 가능함

// 퀴즈 1 문자를 집어넣으면 문자의 갯수, 
// array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 
// 예) 함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 
//    함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다. 

type answerType = {length: number}

function answer81 <MyType extends answerType>(x: MyType) {
  return x.length;
}

let a1 = answer81<string>('hello')
let a2 = answer81<string[]>(['kim', 'park'])

// 나는 위처럼 생각했는데 답은
// <MyType extends string | string[]>
// 요렇게 익스텐드 뒤에 바로 원하는 타입을 지정..

// 퀴즈 2 Animal 타입, data 라는 변수가 있는데, JSON 자료임
// 이 data를 object{}로 변환해서 return 해주는 함수를 만들어 보라 + 변환된 객체 타입은 Animal이 되도록!

interface Animal {
  name : string;
  age : number 
}

let data = '{"name" : "dog", "age" : 1 }'

// 내 답... 이거 아닌데 뭐지?!
function myanswer82<MyType extends string>(x:MyType) {
  return JSON.stringify(x);
}

// 정답
function answer82<Type>(x: string):Type {
  return JSON.parse(x)
}

answer82<Animal>(data)

// Q. as 쓰면 더 쉽지 않나요 return 값 오른쪽에 as Animal 하드코딩 해놓으면 <> 필요없겠네 
// A. 들킴
// 근데 확장성이 없을 수 있습니다. Generic 쓰시면 Animal 말고도 다른 타입으로 변환이 가능하잖아요~

// 퀴즈 3 class 수정해보자
class Person {
  name;
  constructor(a){
    this.name = a;
  }
}
let ab = new Person('어쩌구');
// ab.name //any 타입이 되었넹 

// 지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.
// 이게 싫어서 파라미터에 string을 집어넣으면 string 타입
// number를 집어넣으면 number 타입, string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요? 

// 내생각_ 클래스 안에 컨스트럭터 파라미터 a 에 제너릭 지정?
// 아니었다... 다시 검색, 생성자 안에는 타입지정 아니고, 클래스 선언할때 쓰는듯 보임? 답은??
type MyClassType = string | number | string[]
class Person2 <Type extends MyClassType> {
  name;
  constructor(a :Type){
    this.name = a;
  }
}

// 정답
class Person3 <T> {
  name;
  constructor(a :T){
    this.name = a;
  }
}
let a = new Person3<string>('어쩌구');
// a.name //string 타입이 되었넹 

// 오 얼추 맞은듯?!