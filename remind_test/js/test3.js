const inputs = document.querySelectorAll("input"); // input 배열
const ps = document.querySelectorAll("form > p"); // p 배열

function addText(index) {
  let check;
  let txt;
  switch (index) {
    case 0:
      check = /^[a-zA-Z][a-zA-Z0-9]{7,11}$/;
      txt =
        "첫 글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12글자로 입력하시오.";
      break;
    case 1:
      check = /^[!-~]{8,15}$/;
      txt = "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
      break;
    case 2:
      check = 0;
      txt = "위의 비밀번호와 일치하게 입력하시오.";
      break;
    case 3:
      check = /^[가-힣]{2,}$/;
      txt = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
      break;
    case 4:
      check = /^[!-~]+@[!-~]+$/;
      txt = "이메일 형식에 맞춰서 입력하시오.";
  }
  return [check, txt];
}

function checkBoolean(check, index) {
  let change;
  if (inputs[index].value === "") {
    change = "normal";
  } else {
    if (check === 0) {
      if (inputs[index].value === inputs[1].value) {
        change = "good";
      } else {
        change = "bad";
      }
    } else if (check.test(inputs[index].value)) {
      change = "good";
    } else {
      change = "bad";
    }
  }
  return change;
}

function changeTxt(txt, index, change) {
  switch (change) {
    case "good":
      ps[index].innerHTML = "OK!";
      ps[index].style.color = "green";
      break;
    case "bad":
      ps[index].innerHTML = txt;
      ps[index].style.color = "red";
      break;
    case "normal":
      ps[index].innerHTML = txt;
      ps[index].style.color = "gray";
  }
  if (index === 1 && inputs[index].value !== inputs[0].value) {
    ps[2].innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
    ps[2].style.color = "red";
  }
}

for (let i = 0; i < ps.length; i++) {
  inputs[i].addEventListener("input", function () {
    const arr = addText(i);
    const change = checkBoolean(arr[0], i);
    changeTxt(arr[1], i, change);
  });
}

resetBtn.addEventListener("click", function () {
  for (let i = 0; i < ps.length; i++) {
    const arr = addText(i);
    changeTxt(arr[1], i, "normal");
  }
});
