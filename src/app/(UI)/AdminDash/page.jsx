"use client";
import { useState } from "react";
import { useEffect } from "react";
import TaskDash from "./TaskDash";

export default function Dash() {
  const [allTaks, setallTaks] = useState([]);
  useEffect(() => {
    async function getallTaks() {
      try {
        const response = await fetch("http://localhost:3000/api/Tasks");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setallTaks(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getallTaks();
  }, []);

  return (
    <>
      <div className="">
        <h2 className="text-black text-base ml-32">All Tasks ADMIN</h2>
        <div className="flex flex-wrap justify-center">
          {allTaks.map((task) => (
            <TaskDash key={task._id} {...task} />
          ))}
        </div>
      </div>
    </>
  );
}
