"use client";
import { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";
import CreateModal from "../(Components)/CreateModal";
import TeamModal from "../(Components)/TeamModal";
import { useSession } from "next-auth/react";

const DropdownMenu = () => {
  //use session to display team modal on it support and admin only
  const { data: session, status } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const HandleClick = () => {
    <CreateModal />;
  };

  return (
    <div className="relative">
      <PlusCircle className="w-6 h-6 cursor-pointer" onClick={toggleDropdown} />

      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white border rounded shadow-md">
          {(session?.user.role === "admin" ||
            session?.user.role === "ITSupport") && (
            <>
              <div className="block w-full py-2 px-1 text-gray-800 hover:bg-gray-200">
                <TeamModal />
              </div>
            </>
          )}
          <div className="block w-full py-2 px-1 text-gray-800 hover:bg-gray-200">
            <CreateModal />
          </div>
          <button
            className="block w-full py-2 px-4 text-gray-800 hover:bg-gray-200"
            onClick={HandleClick}
          >
            .....................
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
