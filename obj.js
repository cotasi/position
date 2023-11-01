const info = [
    {
        length: ["한국어","중국어","일본어"]
    },
    {
        length: ["영어","스페인어","독일어"]
    }

];

console.log(info[0].length[0]);
console.log(info[1].length[1]);

const gnb =
    {
        text: "패밀리사이트",
        href: "대메뉴링크값",
        d2 : [
            {
                text: "네이버",
                href: "소메뉴링크값1"
            },
            {
                text: "구글",
                href: "소메뉴링크값2"
            },
            {
                text: "다음",
                href: "소메뉴링크값3"
            }

        ]
    }

for(x in gnb.d2) {
    console.log(gnb.d2[x].href);
}

for(let y=0;y<gnb.d2.length;y++) {
    console.log(gnb.d2[y].href);
}

console.log(gnb.d2[2].text);