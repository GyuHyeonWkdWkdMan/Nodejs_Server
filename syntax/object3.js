var p = {
  v1: "v1",
  v2: "v2",
  f1: function () {
    console.log(this.v1); //같은 객체 안의 변수를 참조하기 위해 this 사용
  },
  f2: function () {
    console.log(this.v2);
  },
};

p.f1();
p.f2();
