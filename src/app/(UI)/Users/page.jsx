"use client";
import { useState } from "react";
import { useEffect } from "react";
import UserDash from "./UserDash";

export default function Dash() {
  const [allusers, setallusers] = useState([]);
  useEffect(() => {
    async function getallusers() {
      try {
        const response = await fetch("http://localhost:3000/api/users");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setallusers(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getallusers();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-black text-base">ADMIN All users Management</h2>
        <div className="flex flex-wrap justify-left">
          {allusers.map((user) => (
            <UserDash key={user._id} {...user} />
          ))}
        </div>
      </div>
    </>
  );
}
