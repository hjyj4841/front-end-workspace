// random으로 이미지 지정
// 이미지 위치+이름 "../resources/family1.jpg"

const imgs = document.querySelectorAll(".imgs img"); // img 배열
const span = document.querySelector("#changeBtn > span"); // 숫자 올라갈 부분
const succes = document.querySelector(".succes"); // 성공 텍스트

let clickCount = 0; //클릭 횟수 초기화
// let succesCheck = false;

// 첫 시작 시 같은 이미지 기본 고정

// img 랜덤 이미지 넣기 함수
// const randomImg = () => {
//   imgs.forEach((value, index) => {
//     const randomNum = Math.floor(Math.random() * 3 + 1);
//     imgs[index].setAttribute("src", `../resources/family${randomNum}.jpg`);
//   });

//   // 이미지 3장 일치
//   if (
//     imgs[0].currentSrc === imgs[1].currentSrc &&
//     imgs[2].currentSrc === imgs[0].currentSrc
//   ) {
//     // 성공문구 표시
//     succes.style.display = "flex";
//     succesCheck = true;
//   }
// };

// click 버튼 이벤트
// changeBtn.addEventListener("click", function () {
//   if (succesCheck) {
//     // 성공하면 더이상 click 못누르게 막기
//     alert(`${clickCount}회에 성공 하셨습니다. restart 하세요.`);
//   } else {
//     // 이미지 변경
//     randomImg();

//     // click 뒤에 숫자 + 1(클릭횟수)
//     span.innerHTML = ++clickCount;
//   }
// });

// restart 버튼 누를 시 처음부터
// restartBtn.addEventListener("click", function () {
//   // 초기 이미지로 변경
//   imgs.forEach((value, index) => {
//     imgs[index].setAttribute("src", `../resources/family${index + 1}.jpg`);
//   });

//   // 클릭 카운트 초기화
//   span.innerHTML = "";
//   clickCount = 0;
//   succesCheck = false;

//   // 성공문구 제거
//   succes.style.display = "none";
// });

function click() {
  // 이미지 랜덤 지정
  for (let i = 0; i < imgs.length; i++) {
    const randomNum = Math.floor(Math.random() * 3 + 1);
    imgs[i].setAttribute("src", `../resources/family${randomNum}.jpg`);
  }
  // click 뒤에 숫자 + 1(클릭횟수)
  span.innerHTML = ++clickCount;
  // 이미지 3장 일치
  if (
    imgs[0].currentSrc === imgs[1].currentSrc &&
    imgs[2].currentSrc === imgs[0].currentSrc
  ) {
    // 성공문구 표시
    succes.style.display = "flex";
    // 버튼 클릭 불가능
    changeBtn.setAttribute("disabled", "disabed");
  }
}
function reset() {
  // 초기 이미지로 변경
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("src", `../resources/family${i + 1}.jpg`);
  }
  // 클릭 카운트 초기화
  span.innerHTML = "";
  clickCount = 0;
  // 성공문구 제거
  succes.style.display = "none";
  // 버튼 클릭 가능
  changeBtn.removeAttribute("disabled");
}

changeBtn.addEventListener("click", click);
restartBtn.addEventListener("click", reset);
