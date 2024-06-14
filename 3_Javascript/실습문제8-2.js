const inputs = document.querySelectorAll("input");
const ps = document.querySelectorAll("p");
let regExp;
let txt;
let arr = [];

// 바뀌는 부분 (inputs,ps)의 index 번호, ps[i]의 innerHTML 내용, regExp 값

function checkBoolean(num, arr, resetCheck) {
  if (inputs[num].value === "" || resetCheck === "reset") {
    changeText("normal", num, arr);
  } else {
    if (arr[0] === 0) {
      if (inputs[num].value === inputs[1].value) {
        changeText("good", num, arr);
      } else {
        changeText("bad", num, arr);
      }
    } else {
      if (arr[0].test(inputs[num].value)) {
        changeText("good", num, arr);
      } else {
        changeText("bad", num, arr);
      }
    }
  }
}

function allText(num, resetCheck) {
  switch (num) {
    case 0:
      regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
      txt =
        "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
      arr = [regExp, txt];
      checkBoolean(num, arr, resetCheck);
      break;
    case 1:
      regExp = /^[!-~]{8,15}$/;
      txt = "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
      arr = [regExp, txt];
      checkBoolean(num, arr, resetCheck);
      break;
    case 2:
      regExp = 0;
      txt = "위의 비밀번호와 일치하게 입력하시오.";
      arr = [regExp, txt];
      checkBoolean(num, arr, resetCheck);
      break;
    case 3:
      regExp = /^[가-힣]{2,}$/;
      txt = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
      arr = [regExp, txt];
      checkBoolean(num, arr, resetCheck);
      break;
    case 4:
      regExp = /^[!-~]+@[!-~]+$/;
      txt = "이메일 형식에 맞춰서 입력하시오.";
      arr = [regExp, txt];
      checkBoolean(num, arr, resetCheck);
      break;
  }
}

function changeText(check, num, arr) {
  switch (check) {
    case "good":
      ps[num].style.color = "green";
      ps[num].innerHTML = "OK!";
      break;
    case "bad":
      ps[num].style.color = "red";
      ps[num].innerHTML = arr[1];
      break;
    case "normal":
      ps[num].style.color = "gray";
      ps[num].innerHTML = arr[1];
      break;
  }
}

for (let i = 0; i < ps.length; i++) {
  inputs[i].addEventListener("input", function () {
    allText(i);
  });
}

resetBtn.addEventListener("click", function () {
  for (let i = 0; i < ps.length; i++) {
    allText(i, "reset");
  }
});
