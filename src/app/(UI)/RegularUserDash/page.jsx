"use client";
import { useState } from "react";
import { useEffect } from "react";
import TaskDash from "./TaskDash";
import { useSession } from "next-auth/react";

export default function Dash() {
  const [allTaks, setallTaks] = useState([]);
  const { data: session, status } = useSession();
  useEffect(() => {
    async function getallTaks() {
      try {
        const response = await fetch("http://localhost:3000/api/Tasks");

        //{session?.user.username}
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const userId = session?.user?.id;
        const userRole = session?.user?.role;
        const filteredData = json.filter((item) => item.userId === userId); //&& item.role === userRole
        setallTaks(filteredData);
      } catch (error) {
        console.error(error.message);
      }
    }
    getallTaks();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-black text-base">All Tasks ADMIN</h2>
        <div className="flex flex-wrap justify-center">
          {allTaks.map((task) => (
            <TaskDash key={task._id} {...task} />
          ))}
        </div>
      </div>
    </>
  );
}
