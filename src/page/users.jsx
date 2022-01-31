import axios from "axios";
import React, { useEffect, useState } from "react";
import Data from "../component/data";

export default function Users() {
  const [users, setUsers] = useState([]);

  async function getData() {
    try {
      let url = "http://localhost:9000/user";
      let respon = await axios.get(url);
      setUsers(respon.data.data);
    } catch (er) {
      console.log(er);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <div className="flex text-center">
        <div className="w-96 border font-semibold">Name</div>
        <div className="w-96 border font-semibold">Email</div>
        <div className="w-96 border font-semibold">Gender</div>
        <div className="w-96 border font-semibold">Option</div>
      </div>
      {users?.map((i, key) => (
        <Data name={i.name} email={i.email} id={i.id} key={key} />
      ))}
    </React.Fragment>
  );
}
