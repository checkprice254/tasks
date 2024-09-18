"use client";
import {
  House,
  ColumnsGap,
  People,
  Inbox,
  PersonFill,
} from "react-bootstrap-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const sidebar = () => {
  const { data: session, status } = useSession();
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

          {(session?.user.role === "admin" ||
            session?.user.role === "ITSupport") && (
            <>
              <li className="flex items-center mb-16">
                <Link href="/Teams" passHref>
                  <div className="flex items-center cursor-pointer">
                    <People className="w-6 h-6 mr-2" />
                    Teams
                  </div>
                </Link>
              </li>

              <li className="flex items-center mb-16">
                <Link href="/Inbox" passHref>
                  <div className="flex items-center cursor-pointer">
                    <Inbox className="w-6 h-6 mr-2" />
                    Inbox
                  </div>
                </Link>
              </li>
            </>
          )}

          {session?.user.role === "admin" && (
            <>
              <li className="flex items-center mb-16">
                <Link href="/Users" passHref>
                  <div className="flex items-center cursor-pointer">
                    <PersonFill className="w-6 h-6 mr-2" />
                    Users
                  </div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
