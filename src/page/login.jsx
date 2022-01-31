import React from "react";
import Bg from "../component/bg";
import Sign from "../component/sign";
import fb from "../img/facebook.png";
import google from "../img/google.png";

export default function Login() {
  return (
    <React.Fragment>
      <Bg>
        <div className="px-10 py-7 ">
          <h1 className="text-3xl text-gray-800 font-semibold">Login</h1>
          <div className="space-y-3 my-7">
            <Sign child={fb} text="Sign in with facebook" />
            <Sign child={google} text="Sign in with google" />
          </div>
          <form>
            <div className="grid gap-1 mb-3">
              <label className="text-sm" htmlFor="email">Email</label>
              <input
                type="email"
                className="text-base pl-5 outline-none border focus:border-blue-500 rounded-3xl h-10" placeholder="Your email"
              />
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="password">Password</label>
              <input
                type="password"
                className="text-base pl-5 outline-none border focus:border-blue-500 rounded-3xl h-10" placeholder="Your password"
              />
            </div>
            <p className="text-blue-600 my-3 text-sm text-right">forgot password?</p>
            <button className="bg-blue-600 rounded-3xl text-white w-full py-2 font-semibold">Login</button>
          </form>
        </div>
      </Bg>
    </React.Fragment>
  );
}
