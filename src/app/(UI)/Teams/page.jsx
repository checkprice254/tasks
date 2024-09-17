"use client";
import { useState } from "react";
import { useEffect } from "react";
import TeamDash from "./TeamDash";

export default function Dash() {
  const [allteams, setallteams] = useState([]);
  useEffect(() => {
    async function getallteams() {
      try {
        const response = await fetch("http://localhost:3000/api/teams");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        setallteams(json);
      } catch (error) {
        console.error(error.message);
      }
    }
    getallteams();
  }, []);

  return (
    <>
      <div>
        <h2 className="text-black text-base">ADMIN All teams Management</h2>
        <div className="flex flex-wrap justify-left">
          {allteams.map((team) => (
            <TeamDash key={team._id} {...team} />
          ))}
        </div>
      </div>
    </>
  );
}
