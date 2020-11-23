import React from "react";

export default function Controls({ time, btnTxt, handleAction, handleReset }) {
  const handleLap = () => {
    const element = document.createElement("li");
    const child = document.querySelector("#timings").childElementCount;

    element.innerHTML = `${child + 1}) ${
      time.minute < 10 ? "0" + time.minute : time.minute
    } mins, ${time.second < 10 ? "0" + time.second : time.second} secs & ${
      time.miliSecond < 10 ? "0" + time.miliSecond : time.miliSecond
    } milisecs`;

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
  };

  return (
    <div className="my-2 mx-1">
      <button
        className="bg-green-600 dark:bg-green-500 m-2 text-white font-semibold rounded-md p-2 inline-flex items-center justify-center hover:bg-green-700 dark:hover:bg-green-600 h-10 w-24"
        onClick={handleLap}
      >
        Lap ⏱️
      </button>
      <button
        className="bg-blue-600 dark:bg-blue-500 m-1 text-white font-semibold rounded-md p-2 inline-flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-600 h-10 w-28"
        onClick={handleAction}
      >
        {btnTxt}
      </button>
      <button
        className="bg-red-600 dark:bg-red-500 m-2 text-white font-semibold rounded-md p-2 inline-flex items-center justify-center hover:bg-red-700 dark:hover:bg-red-600 h-10 w-24"
        onClick={handleReset}
      >
        Reset ⏹️
      </button>
    </div>
  );
}
