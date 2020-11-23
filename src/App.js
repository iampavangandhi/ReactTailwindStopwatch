import { useState, useEffect } from "react";
import Toggle from "./components/Toggle";
import AppLayout from "./components/AppLayout";
import Heading from "./components/Heading";
import Stopwatch from "./components/Stopwatch";
import Controls from "./components/Controls";
import Laps from "./components/Laps";
import Footer from "./components/Footer";
import "./css/app.css";

function App() {
  const [time, setTime] = useState({ miliSecond: 0, second: 0, minute: 0 });
  const [exit, setExit] = useState(false);
  const [btnTxt, setBtnTxt] = useState("Start 🏁");

  const handleAction = () => {
    if (btnTxt === "Pause ⏸️") {
      setExit(!exit);
      setBtnTxt("Resume ▶️");
    } else {
      setExit(!exit);
      setBtnTxt("Pause ⏸️");
    }
  };

  const handleReset = () => {
    setExit(false);
    setBtnTxt("Start 🏁");
    setTime({ miliSecond: 0, second: 0, minute: 0 });
    document.querySelector("#timings").innerHTML = "";
  };

  useEffect(() => {
    let interval = null;
    if (exit) {
      let startTime = Date.now();
      interval = setInterval(() => {
        setTime((val) => {
          if (val.miliSecond > 999) {
            startTime = Date.now();
            return { ...val, miliSecond: 0, second: val.second + 1 };
          }

          if (val.second === 60) {
            return { ...val, second: 0, minute: val.minute + 1 };
          }

          if (val.minute === 60) {
            handleReset();
          }

          const elapsedTime = Date.now() - startTime;
          return { ...val, miliSecond: elapsedTime };
        });
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [exit]);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen h-full w-full flex flex-col items-center">
      <Toggle />
      <Heading />
      <Stopwatch actionHandler={handleAction} time={time} />
      <Controls
        time={time}
        setTime={setTime}
        setExit={setExit}
        btnTxt={btnTxt}
        setBtnTxt={setBtnTxt}
        handleAction={handleAction}
        handleReset={handleReset}
      />
      <Laps />
      <Footer />
    </div>
  );
}

export default App;
