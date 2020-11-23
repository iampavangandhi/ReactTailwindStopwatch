import React from "react";

export default function Stopwatch({ actionHandler, time }) {
  return (
    <div
      onClick={() => actionHandler()}
      className="bg-gray-200 dark:bg-gray-800 border-8 border-gray-600 dark:border-gray-200 m-4 p-2 rounded-full h-72 w-72 flex items-center justify-center shadow-lg"
    >
      <h1 className="text-6xl text-gray-800 dark:text-gray-100">
        {time.minute < 10 ? "0" + time.minute : time.minute}:
        {time.second < 10 ? "0" + time.second : time.second}:
        {time.miliSecond < 100
          ? "0" + (time.miliSecond / 10).toFixed(0)
          : (time.miliSecond / 10).toFixed(0)}
      </h1>
    </div>
  );
}
