import React from "react";

export default function AppLayout(props) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen h-full w-full flex flex-col items-center">
      {props.children}
    </div>
  );
}
