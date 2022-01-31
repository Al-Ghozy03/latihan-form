import React from "react";

export default function Sign({ child,text }) {
  return (
    <React.Fragment>
      <div className="border space-x-5 px-7 py-2 rounded-3xl justify-center flex items-center">
        <img src={child} className="h-6" alt="" />
        <small>{text}</small>
      </div>
    </React.Fragment>
  );
}
