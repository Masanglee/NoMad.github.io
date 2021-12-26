const clock = document.querySelector(".clock")
const clock2 = document.querySelector(".clock2")
const body = document.body
const button = document.querySelector("#button")
const loginGreetingName = document.querySelector("form h1 .loginGreetingName")
const loginGreeting = document.querySelector("form h1")
const loginNameInput = document.querySelector("input")

//시계
const clockJS = () => {
    const time = new Date();
    const setYear = String(time.getFullYear());
    const setMonth = String(time.getMonth());
    const setDay = String(time.getDay());
    const setHours = String(time.getHours()).padStart(2, "0");
    const setMinutes = String(time.getMinutes()).padStart(2, "0");
    const setSeconds = String(time.getSeconds()).padStart(2, "0");
    clock.innerText = `${setYear}년${setMonth}월${setDay}일`
    clock2.innerText = `${setHours}:${setMinutes}:${setSeconds}`
}
clockJS();
setInterval(clockJS, 1000)

// 랜덤 배경화면
// 너무 고화질임 변경 필요.
const backgroundImages = [
    "https://randompicturegenerator.com/img/national-park-generator/g5d813aab05fd33ce89ba67efb1332f5f65e403dbfd33a6e8b0d8c84880b6c4c59e9f6ccb8654fcb1585598a9fe0a707c_640.jpg",
    // "https://randompicturegenerator.com/img/national-park-generator/g36364e5a0dfbcecd35992eced6fcbe98eca7326ef40c62a84bc887169b9a38161ca57bbd1dc2b04e8170fed833a975a8_640.jpg",
    // "https://randompicturegenerator.com/img/national-park-generator/g91f71ae2b2afa710f67b3d61641ba37ef56f83e5542f7bf47852c3b1b20ed6a868e9436be59f57776065d4ab5349c06c_640.jpg",
    // "https://randompicturegenerator.com/img/national-park-generator/g144a3dccbf21fd5d49abc37b008d949bc5078e2ff109b915cc90eb975bfe2a028f8bedf1fdfac60210122b5147c915f3_640.jpg",
    // "https://randompicturegenerator.com/img/national-park-generator/g91f71ae2b2afa710f67b3d61641ba37ef56f83e5542f7bf47852c3b1b20ed6a868e9436be59f57776065d4ab5349c06c_640.jpg",
    // "https://randompicturegenerator.com/img/national-park-generator/ge92ff56392935389484dce92b7efcb704bbd7e0a1e30b81bfe8f5f63a308ff764afc2295bb748a44ab9f8a3e46234d97_640.jpg",
    // "https://randompicturegenerator.com/img/national-park-generator/g114a571df670556724be32155b8fd37321602b0c5ebec2064ac1dc9d578870623cfdc8922bf925c719f1b2204c068d58_640.jpg",
    // "https://randompicturegenerator.com/img/national-park-generator/gc9ec9fa6dd5a5b7075bff9ea962b2e068a0f94a8c8fa9377b1444f0153a7113fa202073db1f6897db120a1a026eb0c87_640.jpg",
]
const backRandon = Math.floor(Math.random() * backgroundImages.length)

body.style = `width: auto;background-image:url(${backgroundImages[backRandon]});`
// console.log(backgroundImages[backRandon])

// 명언 리스트
/*
const says = [{
        say: 11,
        author: 11,
    },
    {
        say: 22,
        author: 22,
    },
]
console.log(says[0].author)
console.log(says[1])
*/

////////// 로그인 시스템 입력값 없으면 작동 안되게 시도중..
const loginbutton = (event) => {
    event.preventDefault();
   
  
        
        event.preventDefault();
        loginNameInput.classList.add("hide");
        button.classList.add("hide");
        loginGreeting.classList.remove("hide");
        localStorage.setItem("Name", loginNameInput.value);

        loginGreetingName.innerText = localStorage.getItem("Name")

        if (1=1){
            loginGreeting.innerText = "이름 없음 님"

        }
        


}
button.addEventListener("click", loginbutton)

console.log(localStorage.setItem("Name", loginNameInput.value).length)