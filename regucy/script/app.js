const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
const link = document.querySelector("a")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginsubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden")
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);
}

function handleLinkclick(event) {
    event.preventDefault();
    console.dir(event)
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener("click", handleLinkclick)

const savedusername = localStorage.getItem(USERNAME_KEY)


if (savedusername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginsubmit)
} else {
    paintGreetings(savedusername)
}

//body색 변경
const text = () => document.querySelector("h3").innerText = window.innerWidth

text();

window.addEventListener("resize", e => {
    text();
})

/*
const screenSizeText = () => {
    let screenElem = document.querySelector('.screen');
    let outerElem = document.querySelector('.outer');
    let innerElem = document.querySelector('.inner');
    let clientElem = document.querySelector('.client');

    screenElem.innerText = `window.screen : ${window.screen.width} * ${window.screen.height}`;
    outerElem.innerText = `window.outer : ${window.outerWidth} * ${window.outerHeight}`;
    innerElem.innerText = `window.inner : ${window.innerWidth} * ${window.innerHeight}`;
    clientElem.innerText = `documentelement.clientWidth : ${document.body.clientWidth} * ${document.body.clientHeight}`;
}
//시작시 실행
screenSizeText();
//브라우저 리사이즈 될때마다 실행
window.addEventListener('resize', e => {
    screenSizeText();
});*/