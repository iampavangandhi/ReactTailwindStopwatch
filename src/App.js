import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import tailwindLogo from "./assets/tailwindcss.svg";
import "./css/app.css";

function App() {
  const [time, setTime] = useState({ miliSecond: 0, second: 0, minute: 0 });
  const [exit, setExit] = useState(false);
  const [btnTxt, setBtnTxt] = useState("Start 🏁");

  const handleAction = () => {
    if (btnTxt === "Pause ⏸️") {
      setExit(!exit);
      setBtnTxt("Resume ▶️");

      const element = document.createElement("li");
      const child = document.querySelector("#timings").childElementCount;

      element.innerHTML = `${child + 1}) ${
        time.minute < 10 ? "0" + time.minute : time.minute
      } mins, ${time.second < 10 ? "0" + time.second : time.second} secs & ${
        time.miliSecond < 10 ? "0" + time.miliSecond : time.miliSecond
      } mili secs`;

      element.classList.add(
        "bg-gray-300",
        "dark:bg-gray-600",
        "p-2",
        "my-3",
        "text-xl",
        "rounded-md",
        "text-black",
        "dark:text-white",
        "text-semibold",
        "shadow-md"
      );

      document.querySelector("#timings").appendChild(element);
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

  const toggleMode = () => {
    if (document.querySelector("html").classList.contains("dark")) {
      document.querySelector("#sun").classList.add("hidden");
      document.querySelector("#moon").classList.remove("hidden");
      document.querySelector("html").classList.remove("dark");
    } else {
      document.querySelector("#sun").classList.remove("hidden");
      document.querySelector("#moon").classList.add("hidden");
      document.querySelector("html").classList.add("dark");
    }
  };

  useEffect(() => {
    let interval = null;
    if (exit) {
      interval = setInterval(() => {
        setTime((val) => {
          if (val.miliSecond === 99) {
            return { ...val, miliSecond: 0, second: val.second + 1 };
          }

          if (val.second > 59) {
            return { ...val, second: 0, minute: val.minute + 1 };
          }

          if (val.minute > 59) {
            handleReset();
          }

          return { ...val, miliSecond: val.miliSecond + 1 };
        });
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [exit, time]);

  return (
    <>
      <div
        onClick={toggleMode}
        className="bg-gray-100 dark:bg-gray-800 absolute top-5 right-5"
      >
        <svg
          version="1"
          id="sun"
          className="hidden text-yellow-100 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"
          />
        </svg>
        <svg
          version="1"
          id="moon"
          className="h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2A9.91 9.91 0 0 0 9 2.46A10 10 0 0 1 9 21.54A10 10 0 1 0 12 2Z"
          />
        </svg>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 min-h-screen h-full w-full flex flex-col items-center">
        <h1 className="text-5xl text-black dark:text-gray-100 mt-32 m-3">
          Hello, Stopwatch
        </h1>

        <h4 className="text-2xl sm:text-xl text-black dark:text-gray-100 flex mx-4 my-1 mb-3 italic">
          This is a simple stopwatch using TailwindCSS v2.0.
        </h4>
        <div
          onClick={handleAction}
          className="bg-gray-200 dark:bg-gray-800 border-8 border-gray-500 dark:border-gray-200 m-4 p-2 rounded-full h-72 w-72 flex items-center justify-center"
        >
          <h1 className="text-6xl text-black dark:text-gray-100">
            {time.minute < 10 ? "0" + time.minute : time.minute}:
            {time.second < 10 ? "0" + time.second : time.second}:
            {time.miliSecond < 10 ? "0" + time.miliSecond : time.miliSecond}
          </h1>
        </div>
        <div className="my-2">
          <button
            className="bg-blue-600 dark:bg-blue-500 m-3 text-white font-semibold rounded-md p-2 inline-flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 h-10 w-32"
            onClick={handleAction}
          >
            {btnTxt}
          </button>
          <button
            className="bg-red-600 dark:bg-red-500 m-3 text-white font-semibold rounded-md p-2 inline-flex items-center justify-center hover:bg-red-700 dark:hover:bg-red-600 h-10 w-32"
            onClick={handleReset}
          >
            Reset ⏹️
          </button>
        </div>
        <ul id="timings" className="mb-5"></ul>
        <footer className="text-lg text-black dark:text-gray-100 flex m-2">
          Made with{" "}
          <img className="mx-1 h-6" src={reactLogo} alt="react-logo" />
          and
          <img className="m-1 h-4" src={tailwindLogo} alt="tailwindcss-logo" />
          by{" "}
          <a
            className="mx-1 text-blue-500"
            href="http://github.com/iampavangandhi"
          >
            Pavan Gandhi
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
