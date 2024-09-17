import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import {
  Alarm,
  PersonCircle,
  PlusCircle,
  ListTask,
} from "react-bootstrap-icons";
import DropdownMenu from "./DropdownMenu";

const navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="bg-gray-800 text-white p-0.5 flex justify-between items-center">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>
          <ListTask className="w-8 h-8 mr-2 inline-block" />
          Task App
        </div>
        <div className="flex items-center space-x-4 gap-10 ">
          <div>My Site, user </div>
          <Link href="/">Home</Link>
          <Link href="/create">Create User</Link>
          <Link href="/ClientMember">Client Member</Link>
          <DropdownMenu />
          <PersonCircle className="w-6 h-6 cursor-pointer" />
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default navbar;
