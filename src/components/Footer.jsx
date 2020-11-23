import React from "react";
import reactLogo from "../assets/react.svg";
import tailwindLogo from "../assets/tailwindcss.svg";

export default function Footer() {
  return (
    <footer className="text-lg text-black dark:text-gray-100 flex m-2">
      Made with <img className="mx-1 h-6" src={reactLogo} alt="react-logo" />
      and
      <img className="m-1 h-4" src={tailwindLogo} alt="tailwindcss-logo" />
      by{" "}
      <a className="mx-1 text-blue-500" href="http://github.com/iampavangandhi">
        Pavan Gandhi
      </a>
    </footer>
  );
}
