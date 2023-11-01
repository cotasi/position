// var 범주가 넓다 , 같은 이름의 변수를 선언 가능하다, 메모리 낭비
// let 선언된 구역에서 적용(범주가 좁다), 같은 이름 선언 불가
// const 함수 같은 중복되면 안되는 변수 선언에 아주 좋다.

let number = 50;
number += 10;
number += "원";
number += 100;
number += 10;

let count = 0;
count++;
count + 1;

const obj = {
    count: 100,
    number: 20
}

const pet = {
    age : 4,
    nm: "멍멍이",
    type: "개",
    feather: function() {
        console.log("멍멍");
    }
}

console.log(count);
console.log(count);
console.log(obj.count);
console.log(pet.nm);
pet.feather();