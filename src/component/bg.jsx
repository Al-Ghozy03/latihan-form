import React from "react";
import bg from "../img/bg.jpg"

export default function Bg({ children }) {
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <div className="w-full">{children}</div>
        <div className="h-screen bg-cover" style={{backgroundImage:`url(${bg})`,width:"100%"}}></div>
      </div>
    </React.Fragment>
  );
}
