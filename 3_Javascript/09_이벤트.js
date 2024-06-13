// DOMContentLoaded : DOM 구조가 로드되고 실행!
// window.addEventListener("DOMContentLoaded", function () {});
const h1 = document.querySelector("h1");

h1.onmouseenter = function () {
  h1.style.backgroundColor = "purple";
};
h1.onmouseleave = function () {
  h1.style.backgroundColor = "pink";
};

// addEventListener!!!
h1.addEventListener("click", function () {
  h1.style.backgroundColor = "skyblue";
});

// 이미지 클릭 시 이미지 삭제
const imgs = document.querySelectorAll(".container img"); // 이미지 배열

// 해당 img 클릭시 style 추가 및 display:none 속성 부여
// imgs[0].addEventListener("click", function (event) {
//   // imgs[0].setAttribute("style", "display: none");
//   imgs[0].style.display = "none";
// });
// imgs[1].addEventListener("click", function () {
//   imgs[1].style.display = "none";
// });
// imgs[2].addEventListener("click", function () {
//   imgs[2].style.display = "none";
// });
// imgs[3].addEventListener("click", function () {
//   imgs[3].style.display = "none";
// });
// imgs[4].addEventListener("click", function () {
//   imgs[4].style.display = "none";
// });

// 콜백함수 사용 시
// imgs.forEach((value, index) => {
//   imgs[index].addEventListener("click", function (e) {
//     e.currentTarget.style.display = "none";
//   });
// });

// 반복문 사용 시
// for (const item of imgs) {
//   item.addEventListener("click", function (e) {
//     e.currentTarget.style.display = "none";
//   });
// }

// 부모객체 선택해서 사용
// event.target 클릭한 객체만 값
const container = document.querySelector(".container");

function removeHandler(e) {
  if (e.target !== e.currentTarget) {
    e.target.style.display = "none";
  }
}

container.addEventListener("click", removeHandler);
