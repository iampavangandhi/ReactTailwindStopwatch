import React from "react";

export default function Heading() {
  return (
    <>
      <h1 className="text-5xl text-black dark:text-gray-100 mt-32 m-3">
        Hello, Stopwatch ⏱️
      </h1>

      <h4 className="text-2xl sm:text-xl text-black dark:text-gray-100 flex mx-4 my-1 mb-3 italic">
        This is a stopwatch build using ReactJS and TailwindCSS v2.0.
      </h4>
    </>
  );
}
