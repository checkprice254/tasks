import UserEdit from "./UserEdit";
import DeleteUser from "./DeleteUser";

export default function UserDash(user) {
  return (
    <div className=" min-w-72 max-w-72 m-2 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 overflow-hidden">
      <div className="text-left space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-base text-black font-normal">
            User Name: {user.username}
          </p>
          <p className="text-base text-black font-normal text-overflow-ellipsis whitespace-nowrap overflow-hidden">
            Email: {user.email}
          </p>
          <p className="text-lg text-gray-700">role: {user.role}</p>
          {/* Display other User details as needed */}
          <div className="flex justify-between space-x-1">
            <UserEdit {...user} />
            <DeleteUser {...user} />
          </div>
        </div>
      </div>
    </div>
  );
}
