"use client";
import { House, ColumnsGap, People, Inbox } from "react-bootstrap-icons";
import Link from "next/link";

const sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-40 overflow-auto">
      <div className="mt-28 pl-0 ">
        <ul>
          <li className="flex items-center mb-16">
            <Link href="/" passHref>
              <div className="flex items-center cursor-pointer">
                <House className="w-6 h-6 mr-2" />
                Home
              </div>
            </Link>
          </li>

          <li className="flex items-center mb-16">
            <Link href="/Dashboard" passHref>
              <div className="flex items-center cursor-pointer">
                <ColumnsGap className="w-6 h-6 mr-2" />
                Dashboard
              </div>
            </Link>
          </li>
          <li className="flex items-center mb-16">
            <People className="w-6 h-6 mr-2" />
            Teams
          </li>
          <li className="flex items-center mb-16">
            <Inbox className="w-6 h-6 mr-2" />
            Inbox
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
