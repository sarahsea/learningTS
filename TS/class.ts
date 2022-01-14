// class 만들 때 타입지정 가능

// 숙제1 Car 클래스 만들기
class Car1 {
  model :string;
  price :number;
  constructor() {
    this.model = '소나타';
    this.price = 3000;
  }

  tax(){
    console.log(this.price / 10);
  }
}

let car2 = new Car1;
