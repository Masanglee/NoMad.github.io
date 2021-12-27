const clockTitle = document.querySelector(".js-clock");
const clockTitle2 = document.querySelector(".js-clock2");
const clockTitle3 = document.querySelector(".js-clock3");

function getClock() {
  const date = new Date();
  clockTitle.innerText = `현재 시간은${date.getFullYear()}년${date.getMonth()+1}월${date.getDate()}일${date.getHours()}시${date.getMinutes()}분${date.getSeconds()}초 입니다.`;
}
getClock();
setInterval(getClock, 1000);


// 864000000 = 1일

//문자열 날자와 숫자열 날자는 다르다.. 월에 +1을 해야  가지고싶은 날자가 된다.
// const D_day = new Date("2021, 12, 25").getTime();
// const Today = new Date().getTime();
// const d_day = new Date(2021, 11, 25).getTime();
// const gap = (D_day - Today)
// const day = Math.ceil(gap / (1000 * 60 * 60 * 24))
// const hour = Math.ceil(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
// const min = Math.ceil(gap % (1000 * 60 * 60) / (1000 * 60))
// const sec = Math.ceil(gap % (1000 * 60))

const Sec = () => {
  const D_day = new Date("2021, 12, 25").getTime();
  const Today = new Date().getTime();
  const gap = (D_day - Today)
  const day = Math.ceil(gap / (1000 * 60 * 60 * 24))
  const hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60))
  const sec = Math.ceil((gap % (1000 * 60)) / 1000);
  clockTitle2.innerText = `${day}일${hour}시간${min}분 ${sec}초 남았습니다.`
}

setInterval(Sec, 1000)
Sec();

const Sec2 = () => {
  const D_day = new Date("2021, 12, 25").getTime();
  const Today = new Date().getTime();
  const gap = (D_day - Today)
  const day = Math.ceil(gap / (1000 * 60 * 60*24) )
  const hour = Math.ceil(gap / (1000 * 60 * 60) % 24)
  const min = Math.ceil(gap / (1000 * 60) % 60)
  const sec = Math.ceil((gap / 1000) % 60)
  clockTitle3.innerText = `${day}일${hour}시간${min}분 ${sec}초 남았습니다.`
};

setInterval(Sec2, 1000)
Sec2();


// var dday = new Date("12, 25, 2021, 0:00:00").getTime();

// setInterval(function() {
//   var today = new Date().getTime();
//   var gap = dday - today;
//   var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
//   var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
//   var sec = Math.ceil((gap % (1000 * 60)) / 1000);
// console.log(gap)
// console.log(today)
// console.log(dday)
//   clockTitle2.innerHTML = "D-DAY까지 " + day + "일 " + hour + "시간 " + min + "분 " + sec + "초 남았습니다.";
// }, 1000);

// console.log(D_day)
// console.log(gap)
// console.log(day)
// console.log(`${Today}-${D_day}=${gap}ms`)


// console.log(864000000 % 24 + "가 나머지 값입니다.")