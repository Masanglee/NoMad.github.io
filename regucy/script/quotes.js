const quotes = [
    {
        quote: "전투를 앞둔 병사의 눈빛을 본 적이 있는 사람이라면 전쟁을 하자는 말을 하지 못할 것이다.",
        author: "오토 폰 비스마르크",
    },
    {
        quote: "전쟁은 누구도 좋아서 하는 게 아니오. 이건 의무이지. 국민이 침략의 희생자가 되었을 때 싸워서 스스로를 지키는 것 외에 다른 해결책은 없소.",
        author: "아흐마드 샤 마수드",
    },
    {
        quote: "겪어보지 못한 자에게 전쟁이란 달콤한 것이다.",
        author: "에라스무스",
    },
    {
        quote: "나무가 단단하면 곧 부러지고, 군대가 강하면 곧 망할 것이다.",
        author: "노자",
    },
    {
        quote: "나라가 크더라도 전쟁을 좋아하게 되면 반드시 망하는 법이다.또 아무리 천하가 태평하더라도 전쟁에 대한 만일의 준비를 잊어버리면 반드시 위험한 법이다.",
        author: "문장궤범",
    },
    {
        quote: "늙은이들이 전쟁을 선포한다. 그러나 싸워야 하고 죽어야 하는 것은 젊은이들이다.",
        author: "허버트 후버",
    },
    {
        quote: "이 세상에 무고한 민간인이란 없다. 그들은 자기 정부를 위해 (어떤 형태로든) 싸우고 있는 사람들이며 우린 무장한 적군하고만 전쟁을 하고 있는 게 아니다. 그래서 '죄 없는 방관자'들을 죽여도 딱히 괴롭거나 신경이 쓰이지는 않았다.",
        author: "커티스 르메이",
    },
    {
        quote: "전쟁을 끝나는 가장 신속한 길은 그 전쟁에 지는 것이다.",
        author: "조지 오웰",
    },
    {
        quote: "좋은 전쟁, 나쁜 평화란 이 세상에 있었던 적이 없다.",
        author: "벤저민 프랭클린",
    },
    {
        quote: "포병은 전쟁의 신이다.",
        author: "이오시프 스탈린",
    }
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


/*
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
*/