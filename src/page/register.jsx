import react from "react";
import React from "react";
import Bg from "../component/bg";
import Sign from "../component/sign";
import fb from "../img/facebook.png";
import google from "../img/google.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

export const url = `http://localhost:9000/register`;
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    gender: yup.string().required(),
  })
  .required();

export default function Register() {
  const [value, setValue] = react.useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    status: "active",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      let res = await axios.post(url, value);
      console.log("berhasil");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Bg>
        <div className="px-10 py-7 ">
          <h1 className="text-3xl text-gray-800 font-semibold">Register</h1>
          <div className="space-y-3 my-7">
            <Sign child={fb} text="Register with facebook" />
            <Sign child={google} text="Register with google" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-1 mb-3">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                name="email"
                value={value.email}
                {...register("email", { required: true })}
                onChange={(e) =>
                  setValue({
                    ...value,
                    email: e.target.value,
                  })
                }
                type="email"
                className="text-base pl-5 outline-none border focus:border-blue-500 rounded-3xl h-10"
                placeholder="Your email"
              />
              <small className="text-red-500">{errors.email?.message}</small>
            </div>
            <div className="grid gap-1 mb-3">
              <label className="text-sm" htmlFor="username">
                Username
              </label>
              <input
                {...register("name")}
                value={value.name}
                onChange={(e) =>
                  setValue({
                    ...value,
                    name: e.target.value,
                  })
                }
                name="name"
                type="text"
                className="text-base pl-5 outline-none border focus:border-blue-500 rounded-3xl h-10"
                placeholder="Your email"
              />
              <small className="text-red-500">{errors.name?.message}</small>
            </div>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                name="password"
                {...register("password", { maxLength: 8 })}
                value={value.password}
                onChange={(e) =>
                  setValue({
                    ...value,
                    password: e.target.value,
                  })
                }
                type="password"
                className="text-base pl-5 outline-none border focus:border-blue-500 rounded-3xl h-10"
                placeholder="Your password"
              />
              <small className="text-red-500">{errors.password?.message}</small>
            </div>
            <div className="flex justify-between px-32 mt-5">
              <div className="flex items-center space-x-2">
                <input
                  name="gender"
                  {...register("gender", { value: value })}
                  onChange={() =>
                    setValue({
                      ...value,
                      gender: "pria",
                    })
                  }
                  type="radio"
                  value="pria"
                  checked={value.gender === "pria"}
                />
                <small>pria</small>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  name="gender"
                  {...register("gender")}
                  onChange={() =>
                    setValue({
                      ...value,
                      gender: "wanita",
                    })
                  }
                  type="radio"
                  value="wanita"
                  checked={value.gender === "wanita"}
                />
                <small>wanita</small>
              </div>
            </div>
            <button className="bg-blue-600 mt-4 rounded-3xl text-white w-full py-2 font-semibold">
              Register
            </button>
          </form>
        </div>
      </Bg>
    </React.Fragment>
  );
}
