const inputs = document.querySelectorAll("input");
const ps = document.querySelectorAll("p");
let regExp;

// id
inputs[0].addEventListener("input", function () {
  regExp = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  if (regExp.test(inputs[0].value)) {
    // true = OK! (녹색)
    ps[0].style.color = "green";
    ps[0].innerHTML = "OK!";
  } else if (inputs[0].value == "") {
    ps[0].style.color = "gray";
    ps[0].innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  } else {
    // flase = 붉은색으로 글자색 변경
    ps[0].style.color = "red";
    ps[0].innerHTML =
      "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
  }
});

// pw
inputs[1].addEventListener("input", function () {
  regExp = /^[!-~]{8,15}$/;
  if (regExp.test(inputs[1].value)) {
    // true = OK! (녹색)
    ps[1].style.color = "green";
    ps[1].innerHTML = "OK!";
  } else if (inputs[1].value == "") {
    ps[1].style.color = "gray";
    ps[1].innerHTML = "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
  } else {
    // flase = 붉은색으로 글자색 변경
    ps[1].style.color = "red";
    ps[1].innerHTML = "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
  }
});

// pw 확인
inputs[2].addEventListener("input", function () {
  if (inputs[2].value == "") {
    ps[2].style.color = "gray";
    ps[2].innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
  } else {
    if (inputs[1].value == inputs[2].value) {
      // true = OK! (녹색)
      ps[2].style.color = "green";
      ps[2].innerHTML = "OK!";
    } else {
      // flase = 붉은색으로 글자색 변경
      ps[2].style.color = "red";
      ps[2].innerHTML = "위의 비밀번호와 일치하게 입력하시오.";
    }
  }
});

// name
inputs[3].addEventListener("input", function () {
  regExp = /^[가-힣]{2,}$/;
  if (regExp.test(inputs[3].value)) {
    // true = OK! (녹색)
    ps[3].style.color = "green";
    ps[3].innerHTML = "OK!";
  } else if (inputs[3].value == "") {
    ps[3].style.color = "gray";
    ps[3].innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  } else {
    // flase = 붉은색으로 글자색 변경
    ps[3].style.color = "red";
    ps[3].innerHTML = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
  }
});

// email
inputs[4].addEventListener("input", function () {
  regExp = /^[!-~]+@[!-~]+$/;
  if (regExp.test(inputs[4].value)) {
    // true = OK! (녹색)
    ps[4].style.color = "green";
    ps[4].innerHTML = "OK!";
  } else if (inputs[4].value == "") {
    ps[4].style.color = "gray";
    ps[4].innerHTML = "이메일 형식에 맞춰서 입력하시오.";
  } else {
    // flase = 붉은색으로 글자색 변경
    ps[4].style.color = "red";
    ps[4].innerHTML = "이메일 형식에 맞춰서 입력하시오.";
  }
});

resetBtn.addEventListener("click", function () {
  let str;
  for (let i = 0; i < ps.length; i++) {
    switch (i) {
      case 0:
        str =
          "첫글자는 반드시 영문자로, 그리고 영문자, 숫자 포함하여 총 4~12자로 입력하시오.";
        break;
      case 1:
        str = "영문자, 숫자, 특수문자 포함하여 총 8~15자로 입력하시오.";
        break;
      case 2:
        str = "위의 비밀번호와 일치하게 입력하시오.";
        break;
      case 3:
        str = "한글로만 이루어져야되며 2글자 이상으로 입력하시오.";
        break;
      case 4:
        str = "이메일 형식에 맞춰서 입력하시오.";
        break;
    }
    ps[i].style.color = "gray";
    ps[i].innerHTML = str;
  }
});
