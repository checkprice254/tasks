"use client";

import { useSession } from "next-auth/react";
import { Session } from "next-auth";
import {
  FileEarmarkText,
  PersonCircle,
  Plus,
  ListTask,
} from "react-bootstrap-icons";

export default function first() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="flex-1 ">
      <div>
        <h1 className="text-1xl font-bold underline text-gray-400">
          hello <span>{session?.user.username}</span>
        </h1>
        <div className="flex flex-row  bg-slate-100 mb-5 p-5">
          <div className="basis-1/3">
            <div className="flex items-center">
              <FileEarmarkText className="w-6 h-6 cursor-pointer" />
              <span className="ml-2">Completed Tasks</span>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex items-center">
              <FileEarmarkText className="w-6 h-6 cursor-pointer" />
              <span className="ml-2">Pending Tasks</span>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex items-center">
              <FileEarmarkText className="w-6 h-6 cursor-pointer" />
              <span className="ml-2">Assigned Tasks</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row bg-slate-100 mt-5">
        <div className="basis-1/2">
          <div className="flex flex-row">
            <div className="basis-1/2">
              <h1 className="text-black font-semibold">Task Priorities</h1>
              <p className="font-semibold">this are my tasks</p>
            </div>
            <div className="basis-1/2">
              <div className="flex items-center">
                <Plus className="w-6 h-6 cursor-pointer" />
                <button className="ml-2 focus:outline-none">Add Task</button>
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li>my first</li>
              <li>my first</li>
            </ul>
          </div>
        </div>
        <div className="basis-1/2">
          <h1 className="text-black font-bold">Announcements</h1>
          <p className="font-semibold">This are my announcements</p>
          <div>
            <ul>
              <li>my first</li>
              <li>my first</li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" bg-slate-50 mt-5 p-4">
        <div className="flex flex-row ">
          <div className="basis-1/2">
            <h1 className="text-black font-bold">My Teams</h1>
            <p className="font-semibold">Teams where am a member</p>
          </div>
          <div className="basis-1/2">
            <div className="flex items-center">
              <Plus className="w-6 h-6 cursor-pointer" />
              <button className="ml-2 focus:outline-slate-500">Add Team</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>01</div>
          <div>09</div>
          <div>09</div>
          <div>09</div>
        </div>
      </div>
    </div>
  );
}
