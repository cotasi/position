const navi = ["회사소개","제품소개","견적서","고객센터"];
const pw = [10,50,40];
const subject = ["자바스크립트","리액트","SQL"];

// 1. 고객센터만 출력
console.log(navi[3]);

//  2. 자바스크립트 50
console.log(subject[0],pw[1]);

// 3. 리액트 점수 50입니다.
console.log(subject[1]+" "+"점수 "+pw[1]+"입니다");

const mutisubject = [
    ["네이버","http://naver.com"],
    ["다음","http://daum.net"],
    ["유튜브","http://www.youtube.com"]
]

console.log(mutisubject[2][1]);
console.log("<a href="+mutisubject[2][1]+">"+mutisubject[2][0]+"</a>");

for(x in mutisubject) {
    console.log("<a href="+mutisubject[x][1]+">"+mutisubject[x][0]+"</a>");
}

for(let i=0;i<3;i++) {
    console.log("<a href="+mutisubject[i][1]+">"+mutisubject[i][0]+"</a>");
}
