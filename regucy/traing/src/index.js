const rangeNumber = document.querySelector(".range"); //숫자 넣는 칸
const choseNumber = document.querySelector("form h3 .choseNumber"); //정답 넣는 칸
const buttonPlay = document.querySelector("form h3 .buttonPlay"); //서브밋 버튼
const chose = document.querySelector("h3 .chose") //내가 쓴 답을 출력
const mchose = document.querySelector("h3 .mChose") //컴터가 말한 답을 출력
const result = document.querySelector(".result") //승패 출력

/*
1.랜덤 값 범위 정하기
2.값 넣기
3.랜덤값과 넣은 값이 같으면 메시지 내보내기
*/


const stopRefresh = (event) => {
  event.preventDefault(); //멈춤

 

  const rangeNumbers = rangeNumber.value //범위설정
  const choseNumbers = choseNumber.value //답안 설정
  const saved = localStorage.setItem("value", rangeNumbers)
  const savedValue = localStorage.setItem("savedValue", choseNumbers)

  const check1 = parseInt(localStorage.getItem("value"));
  const check2 = parseInt(localStorage.getItem("savedValue"));
  const chooseMechein = Math.round(Math.random() * check1)//기계가 고르는 숫자
 
  // console.log(check1, typeof check1 + "범위")
  console.log(check2, typeof check2 + "답안")
  console.log(chooseMechein + "기계가 선택함")
  chose.innerText = `you chose :${check2} `
  mchose.innerText =  `the maching chose: ${chooseMechein}`

 if (chooseMechein === check2) {
    console.log("right")
    result.innerText = "You won!"
  } else {
    console.log("wrong")
    result.innerText = "You lost"
  }



  


};


buttonPlay.addEventListener("click", stopRefresh)