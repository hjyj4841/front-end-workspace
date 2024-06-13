const dDay = new Date("2025-01-01 00:00:00"); // 비교할 날짜

function count() {
  const sDay = new Date(); // 현재 날짜

  // dDay - sDay : 밀리세컨드
  const second = Math.floor((dDay - sDay) / 1000); // 1초 = 밀리세컨드/1000
  const minute = Math.floor(second / 60); // 1분 = 60초
  const hour = Math.floor(minute / 60); // 1시간 = 60분
  const date = Math.floor(hour / 24); // 1일 = 24시간

  dDayTimer.innerHTML = `${String(date).padStart(3, "0")}일 
  ${String(hour % 24).padStart(2, "0")}시간 
  ${String(minute % 60).padStart(2, "0")}분 
  ${String(second % 60).padStart(2, "0")}초`;
}

// 첫 화면에 바로 뜨게 하기 위함
count();

// 1초 마다 변경
setInterval(count, 1000);
