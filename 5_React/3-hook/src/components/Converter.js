import { useState, useEffect } from "react";
import Btn from "./Btn";

const Coverter = () => {
  const [text, setText] = useState("Minutes => Hours");
  const [bool, setBool] = useState(false);
  const [number, setNumber] = useState("");

  const invert = () => {
    setBool(!bool);
    reset();
  };

  useEffect(() => {
    if (bool) setText("Hours => Minutes");
    else setText("Minutes => Hours");
  }, [bool]);

  const change = (e) => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :{" "}
        <input
          type="number"
          placeholder="Minutes"
          disabled={bool}
          onChange={change}
          value={bool ? number * 60 : number}
        />
      </p>
      <p>
        Hours :{" "}
        <input
          type="number"
          placeholder="Hours"
          disabled={!bool}
          value={bool ? number : Math.floor(number / 60)}
          onChange={change}
        />
      </p>
      <p>
        <Btn click={reset} text="Reset" />
        <Btn click={invert} text={text} />
      </p>
    </>
  );
};

export default Coverter;

// import { useState, useRef } from "react";
// import Btn from "./Btn";

// const Coverter = () => {
//   const [btnText, setBtnText] = useState("Minutes => Hours");
//   const minutesRef = useRef();
//   const hoursRef = useRef();

//   const write = (e) => {
//     if (e.target.id === "minutes") {
//       const changeNum = Math.round(e.target.value / 60);
//       hoursRef.current.value = changeNum;
//     } else {
//       const changeNum = Math.round(e.target.value * 60);
//       minutesRef.current.value = changeNum;
//     }
//   };

//   const convertTime = () => {
//     if (btnText === "Minutes => Hours") {
//       setBtnText("Hours => Minutes");
//     } else {
//       setBtnText("Minutes => Hours");
//     }
//     minutesRef.current.disabled = !minutesRef.current.disabled;
//     hoursRef.current.disabled = !hoursRef.current.disabled;
//   };

//   const reset = () => {
//     minutesRef.current.value = "";
//     hoursRef.current.value = "";
//   };

//   return (
//     <>
//       <h1>Time Converter</h1>
//       <div>
//         Minutes: <input onChange={write} ref={minutesRef} id="minutes" />
//       </div>
//       <br />
//       <div>
//         Hours: <input onChange={write} ref={hoursRef} id="hours" disabled />
//       </div>
//       <br />
//       <div>
//         <Btn click={reset} text="Reset" />
//         <Btn click={convertTime} text={btnText} />
//       </div>
//     </>
//   );
// };

// export default Coverter;
