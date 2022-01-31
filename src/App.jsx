import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./page/register";
import Users from "./page/users";

export default function App() {
  return(
    <Routes>
      <Route path="/register" element={<Register/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="*" element={<Navigate replace to="/register" />}></Route>

    </Routes>
  )
}